# Project showcase sources

Project content is curated in `src/data.js` (`projects`, `projectsSection`). Edit `categories` to control filter membership. Set `github` to an empty string to omit the repository button. Add a `demo` only after verification and set `demoVerified: true` to display it. No GitHub requests run in visitors' browsers.

Verified on 2026-11-06:

- Mother Tongue Bridge: https://github.com/Akashshinde84/Mother-tongue — repository metadata and README confirm the name and application. No application screenshots or confirmed public deployment URL found.
- Invoice Processing: https://github.com/Akashshinde84/Automated-Invoice-Processing-and-Anomaly-Detection — README documents https://invoice-detection.streamlit.app/; an HTTP GET returned 200 without changing that URL. This verifies URL availability, not every hosted application workflow. Repository images are sample invoice inputs, not application screenshots.
- Shopping Prediction: https://github.com/Akashshinde84/smart-online-shopping-prediction — repository contains analysis charts, but no application screenshots or confirmed public deployment URL.

`public/images/projects/shopping-model-comparison.png` is an unchanged copy of:
https://raw.githubusercontent.com/Akashshinde84/smart-online-shopping-prediction/df908fcca25b46695a2f09ceeb8275274aaba62d/static/comparison_chart.png

The chart is labeled as a repository analysis chart, not an application screenshot. Its embedded results are supplied by that project and were not independently reproduced. Other cards use decorative category icons. Existing personal assets have not been changed.

For a new project image, set `image` to `{ src, alt, caption, source }`. Local `src` paths are relative to `public/` and resolved using Vite's deployment base. Use `image: null` when a real image is unavailable. Failed images fall back to category icons.

## Ongoing final-year project

The first project, Enterprise Multi-Agent RAG Knowledge Assistant with Tool Use & Memory, is curated from the portfolio owner's supplied project proposal. Its status is `In Progress`; capabilities and technology concepts are explicitly planned. No repository, deployment, named implementation framework, or specific vector database is assumed.

In `src/data.js`, edit `status` to change the visible status badge. `featureStage`, `featuresLabel`, `techLabel`, and `planningNote` independently describe what is planned versus implemented; review those fields when the implementation progresses. `featured`, `featuredLabel`, and `academicLabel` control its presentation. The AI / Machine Learning filter includes the proposal; Python membership is intentionally omitted because a language has not been confirmed for this project.

## Original conceptual project illustrations

Four original SVG illustrations are now stored in `public/images/projects/`: `enterprise-rag.svg`, `mother-tongue-bridge.svg`, `invoice-anomaly-detection.svg`, and `shopping-prediction.svg`. They use consistent 960 × 540 canvases and abstract diagrams tied to the supplied project capabilities. They are explicitly captioned as concept illustrations, not captured application screens. The RAG diagram describes proposed architecture; its development status and planned-feature labels remain intact.

No genuine application screenshots were present in the local assets. The prior repository model-comparison chart is retained unchanged at `shopping-model-comparison.png` but is no longer the shopping card's primary visual. Its provenance remains documented above. To replace an illustration with a verified screenshot later, update the project's `image` object in `src/data.js`, set `kind: 'screenshot'`, and provide accurate `alt`, `caption`, dimensions, and optional source URL.
