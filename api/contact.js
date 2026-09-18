import fs from 'fs';
import path from 'path';

function getEnvVar(key) {
  try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(new RegExp(`^${key}=(.*)$`, 'm'));
      if (match && match[1].trim()) return match[1].trim();
    }
  } catch (e) {}
  return process.env[key] || '';
}

export default async function handler(req, res) {
  // 1. HTTP Method Check: Only POST allowed
  if (req.method !== 'POST') {
    if (res.setHeader) res.setHeader('Allow', ['POST']);
    return res.status ? res.status(405).json({ error: 'Method Not Allowed' }) : null;
  }

  try {
    // Parse request body
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, message, honeypot } = body;

    // 2. Anti-Spam Honeypot Check
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn('[CONTACT API] Honeypot trigger detected. Dropping quietly.');
      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    }

    // 3. Server-side Input Validation
    const trimmedName = (name || '').trim();
    const trimmedEmail = (email || '').trim();
    const trimmedMessage = (message || '').trim();

    if (!trimmedName || trimmedName.length < 2) {
      return res.status(400).json({ error: 'Please provide a valid name (at least 2 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      return res.status(400).json({ error: 'Please enter a message (at least 5 characters).' });
    }

    if (trimmedMessage.length > 5000) {
      return res.status(400).json({ error: 'Message exceeds maximum length of 5000 characters.' });
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const portfolioUrl = getEnvVar('PORTFOLIO_URL') || 'https://muneeshkumar-portfolio.vercel.app';
    const recipientEmail = getEnvVar('CONTACT_EMAIL') || 'muneeshkumar.tech@gmail.com';
    const resendApiKey = getEnvVar('RESEND_API_KEY');

    // Check if key is configured and not default placeholder
    const isPlaceholderKey = !resendApiKey || resendApiKey.includes('123456789') || resendApiKey.includes('example') || resendApiKey.includes('your_');


    // 4. Primary Notification Channel: Resend Email Delivery
    let emailSuccess = false;
    let emailErrorDetails = '';

    if (resendApiKey && !isPlaceholderKey) {
      try {
        const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Portfolio Message</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090a0d; color: #e2e8f0; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #12141a; border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 12px; padding: 32px; box-shadow: 0 8px 32px rgba(0,0,0,0.6); }
    .header { border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; }
    .badge { background: rgba(212, 175, 55, 0.15); color: #d4af37; font-size: 11px; font-weight: 700; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; border: 1px solid rgba(212, 175, 55, 0.4); }
    h2 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 6px; font-weight: 600; }
    .value { font-size: 15px; color: #f8fafc; font-weight: 400; line-height: 1.5; }
    .value-box { background: #1a1d26; border-left: 3px solid #d4af37; padding: 16px; border-radius: 6px; white-space: pre-wrap; word-break: break-word; color: #f1f5f9; font-size: 14px; line-height: 1.6; }
    .footer { border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px; margin-top: 28px; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>New Portfolio Message</h2>
      <span class="badge">MUNEESH PORTFOLIO</span>
    </div>

    <div class="field">
      <div class="label">Visitor Name</div>
      <div class="value">${escapeHtml(trimmedName)}</div>
    </div>

    <div class="field">
      <div class="label">Work Email</div>
      <div class="value"><a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #d4af37; text-decoration: none;">${escapeHtml(trimmedEmail)}</a></div>
    </div>

    <div class="field">
      <div class="label">Message</div>
      <div class="value-box">${escapeHtml(trimmedMessage)}</div>
    </div>

    <div class="footer">
      <span>Time: ${escapeHtml(timestamp)}</span>
      <span>Source: <a href="${escapeHtml(portfolioUrl)}" style="color: #94a3b8;">${escapeHtml(portfolioUrl)}</a></span>
    </div>
  </div>
</body>
</html>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: trimmedEmail,
            subject: `New Portfolio Contact — ${trimmedName}`,
            html: emailHtml,
            text: `NEW PORTFOLIO MESSAGE\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage:\n${trimmedMessage}\n\nSubmitted: ${timestamp}\nPortfolio: ${portfolioUrl}`,
          }),
        });

        const resendData = await resendRes.json();
        if (resendRes.ok) {
          emailSuccess = true;
          console.log('[CONTACT API] Resend email delivery succeeded ID:', resendData.id);
        } else {
          emailErrorDetails = resendData.message || 'Resend provider returned an error.';
          console.error('[CONTACT API] Resend email delivery failed:', resendData);
        }
      } catch (err) {
        emailErrorDetails = err.message || 'Network exception during email dispatch.';
        console.error('[CONTACT API] Resend dispatch exception:', err);
      }
    } else {
      console.warn('[CONTACT API] RESEND_API_KEY is not configured or using placeholder string in .env.local.');
      // In development/test mode without valid key, allow local test submission
      emailSuccess = true;
      emailErrorDetails = 'RESEND_API_KEY is placeholder.';
    }

    // 5. Google Sheets Integration (via Google Apps Script Web App)
    const googleSheetWebAppUrl =
      getEnvVar('GOOGLE_SHEET_WEB_APP_URL') ||
      getEnvVar('VITE_GOOGLE_SCRIPT_URL') ||
      'https://script.google.com/macros/s/AKfycby8ic3baHIi45edSDtINoWZ2pw7bXxP5wUWa0zUlX6m9skuRGYBYED3jV0D3T8lsjzUbw/exec';

    let sheetSuccess = false;
    if (googleSheetWebAppUrl) {
      try {
        const sheetRes = await fetch(googleSheetWebAppUrl, {
          method: 'POST',
          redirect: 'follow',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
          }),
        });

        const sheetText = await sheetRes.text();
        if (sheetRes.ok && !sheetText.includes('Page not found') && !sheetText.includes('unable to open')) {
          sheetSuccess = true;
          console.log('[CONTACT API] Successfully dispatched row to Google Sheet Web App:', sheetText.substring(0, 150));
        } else {
          console.warn('[CONTACT API] Google Sheet Web App status:', sheetRes.status, sheetText.substring(0, 150));
        }
      } catch (err) {
        console.error('[CONTACT API] Google Sheet dispatch exception:', err);
      }
    }

    // 6. Secondary Channel: Optional Telegram Bot Instant Alert
    const telegramBotToken = getEnvVar('TELEGRAM_BOT_TOKEN');
    const telegramChatId = getEnvVar('TELEGRAM_CHAT_ID');

    if (telegramBotToken && telegramChatId) {
      try {
        const telegramText = `🚨 <b>NEW PORTFOLIO MESSAGE</b>\n\n👤 <b>Name:</b> ${escapeHtml(trimmedName)}\n📧 <b>Email:</b> ${escapeHtml(trimmedEmail)}\n\n💬 <b>Message:</b>\n${escapeHtml(trimmedMessage)}\n\n🕐 <b>Time:</b> ${escapeHtml(timestamp)}\n🌐 <b>Source:</b> Portfolio Website`;

        const telegramRes = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramText,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          }),
        });

        if (telegramRes.ok) {
          console.log('[CONTACT API] Telegram mobile alert sent successfully.');
        } else {
          const telegramErr = await telegramRes.json();
          console.warn('[CONTACT API] Telegram alert failed:', telegramErr);
        }
      } catch (err) {
        console.warn('[CONTACT API] Exception sending Telegram alert:', err);
      }
    }

    // 7. Channel Success Evaluation
    if (emailSuccess || sheetSuccess) {
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!',
      });
    } else {
      return res.status(500).json({
        error: 'Something went wrong. Please check your configuration or reach out directly via email.',
      });
    }
  } catch (error) {
    console.error('[CONTACT API] Server error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
