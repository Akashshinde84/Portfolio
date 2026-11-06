# Akash Shinde — Developer Portfolio

Responsive developer portfolio built with React 19, Vite 6, Tailwind CSS 4, Framer Motion 12, Lucide React, and JavaScript.

## Local development

Use Node.js 22 LTS (verified with 22.19.0) and npm.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite, usually http://localhost:5173. For the first dependency installation without a lockfile, use `npm install`.

## Project structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx
    SectionHeading.jsx
    External.jsx
  App.jsx
  data.js
  main.jsx
  index.css
public/
  profile.jpg
  resume.pdf
  certificates/                 # Six original certificate files
index.html
vite.config.js
```

- `src/data.js` contains the existing profile, skills, projects, education, certifications, and activities. It also provides the public asset URL helper.
- `src/components/` contains the portfolio sections and shared animation, heading, and external link components.
- `src/App.jsx` composes the page; `src/index.css` contains the existing theme and Tailwind import.
- Tailwind 4 uses `@tailwindcss/vite`; no separate Tailwind or PostCSS configuration is needed.
- Framer Motion is already used for animations; no package migration is required.

## Assets and content

The uploaded profile photo, resume, and all six certificates remain in their original locations. Resume and certificate links use Vite's `BASE_URL`, so they also work when a deployment base is configured. To deploy under a subpath, set Vite's `base` option or build with `npm run build -- --base=/your-path/`.

The existing GitHub, LinkedIn, email, project links, and personal details are preserved. Projects without a demo URL omit the Live Demo link. Contact uses `mailto:` and requires no backend. Inter is self-hosted; system sans-serif fonts are the fallback. External project and social destinations should be reviewed before publication.

## Production build

```bash
npm run build
npm run preview
```

Vercel and Netlify can use the Vite preset, build command `npm run build`, and output directory `dist`. `npm run preview` serves the production build locally.

## Contact and resume

Contact details and copy are editable in `src/data.js`. The contact form validates Name, Email, Subject, and Message, then opens a draft in the visitor's configured email app. The visitor must review and send it there. This website does not send or store messages, and shows no submission success/loading state. Direct email, phone, LinkedIn, and GitHub links are also provided.

The original uploaded resume remains at `public/resume.pdf`; both the hero and contact download buttons use the same centralized path with Vite's deployment base. Use `npm run dev` or `npm run preview` to view the site; opening `dist/index.html` directly from the filesystem does not provide Vite's asset serving.

## SEO, accessibility, and regression checks

Inter is self-hosted through Fontsource. Framer Motion features load in a separate chunk; no second animation library is used. Existing images keep their original contents, with dimensions reserved for layout stability and lazy loading on the noncritical project chart. Reduced-motion preferences disable typing and floating motion; the hero also has an explicit pause control.

The title, description, Open Graph title/description, and SVG favicon are configured in `index.html`. `seo.config.js` generates `robots.txt` for every build. The final deployment URL has not been assumed: canonical, Open Graph URL/image, and a one-page `sitemap.xml` are generated only when `SITE_URL` contains the real public URL. Set it in a local `.env` (see `.env.example`) or in your deployment environment, then rebuild. Include a trailing deployment subpath if applicable; configure Vite's `base` to match. Section anchors are not separate sitemap pages.

```bash
npm run build
npm run test:e2e
node tests/seo-check.mjs
```

The browser tests use locally installed Microsoft Edge (`channel: 'msedge'`) with Playwright and axe, and start a temporary production preview server. Install Edge before running them on another machine, or configure an installed Playwright Chromium browser. Tests cover the 320, 375, 768, 1024, and 1440 pixel layouts, horizontal overflow, mobile menu keyboard behavior, filters, form errors, WCAG A/AA automated checks, reduced motion, and document links. Test screenshots and reports are ignored by Git. Automated accessibility results supplement manual review; they do not certify every assistive-technology workflow.
