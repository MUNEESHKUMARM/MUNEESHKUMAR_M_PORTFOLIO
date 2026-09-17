# Muneeshkumar M — React + Vite Portfolio

A responsive React + Vite implementation of the provided Figma portfolio: dark Apple-inspired monitor workspace, gold glassmorphism accents, skills matrix, education timeline, internship pipeline, project dashboards, certifications, flip contact card, and mailto contact form.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Resume

Place the real resume PDF at `public/resume.pdf` so the Resume/Preview buttons work.

## Notes

- Styling is plain CSS; Tailwind is not used.
- The supplied Figma image/SVG assets are referenced from Figma's temporary asset URLs. For a long-lived deployment, replace them with local assets in `src/assets` or `public/assets`.
- Update social/profile URLs and contact text in `src/App.jsx` as needed.
