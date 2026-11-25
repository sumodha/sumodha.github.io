# Sumodha’s portfolio

A React and TypeScript portfolio built with Vite.

Use Node.js 22.18 or newer. The build workflow uses Node 22.

Run these commands from this directory:

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and creates the production site in `dist`.
`npm run preview` serves that production build locally.
`npm run lint` checks source and test code; `npm test` runs content, link handling, gallery, and grid-layout regression checks.

## Editing content

- `src/utils/cards.tsx` contains all cards. `description` supplies the compact summary and full-story introduction; `details` supplies expanded copy. Optional `links` maps visible labels to URLs, for example `{ 'source code': 'https://github.com/...' }`. Omit it when a card has no links.
- Write capitalization and title formatting directly in the data; components preserve the authored copy.
- `type: 'work'` entries appear in experience and require a `companyLink` for the company name. `type: 'projects'` entries appear in projects. `type: 'miscellany'` entries appear in the gallery and include `category` and `tall`. Each section follows the order of entries in `cards`.
- The first `images` entry is the cover. Projects use the full image list; experience carousels use only the entries after the cover and show `links` when expanded. Each image’s `alt` also supplies its caption. Add photos as `{ src: '/portfolio/your-photo.jpg', alt: 'A description of the photo' }` after placing them in `public/portfolio`. Experience carousels stay hidden until there are additional photos and display at up to 20 × 15.625 rem, with captions and progress controls underneath.
- Miscellany cards use the first image in the gallery and display their optional `date` beside the category. Their `slug` identifies the story route when a `Content` component is provided; cards without Markdown remain captioned images.
- `src/projects-markdown` contains the full-story MDX pages and their writing guide. Its custom components are provided by `src/components/mdxComponents`.
- `src/data/site.ts` contains contact destinations, including the résumé at `/portfolio/resume/resume.pdf`. The introduction uses icons; the footer uses text links.
- Images use direct public paths: `/portfolio/<card-folder>/...` for card covers, project media, and documents, `/cover-image/cover.jpg` for the portrait, and `/art/...` for artwork. Store the corresponding files under `public`; card covers share a folder with their related media.

The site uses system Helvetica Neue/Arial and bundled Canela fonts. Project story prose uses regular Canela. Top-level Markdown headings and project titles use Canela Bold Italic; Markdown subheadings use Helvetica Neue.

## Styling

`src/index.css` defines shared colors, typography, page gutters, borders, captions, and filter buttons. Component styles live beside their components: section containers own grid/list layout, and individual cards own their appearance. `PortfolioSection`, `SkillList`, and `LinkList` own shared UI styles. Carousel controls have separate overlay and progress variants, so each variant sets its own layout without undoing the other. Keep the disclosure’s shadow/focus-ring padding when changing experience layouts. Use `rem` for dimensions and spacing, `em` for media queries, and percentages for motion tied to an element’s size. Do not set a fixed root font size, so browser font preferences continue to work.

## Code structure

- `src/types/portfolio.ts` defines the work, project, and miscellany card variants. Generic media and CSS-variable types live alongside it, so UI components do not import their types from the content module.
- `src/utils/cards.tsx` remains the single source for authored card content and section order. Components receive typed card props; section containers handle filtering and expansion state.
- `src/components` contains reusable UI. The MDX provider exposes the same `ImageCarousel` used by experience entries.
- `src/layouts/SiteLayout.tsx` owns the common navigation, main landmark, and footer for all pages.
- `CardLinks` adapts authored link maps to `LinkList`; `ContactLinks` handles contact icons or text. Both use `ResourceLink` for consistent destinations: app routes use the router, public files use native browser links, and external links open in a new tab.
- `src/data/site.ts` owns contact destinations and navigation labels. Page-title handling, route generation, date formatting, and reduced-motion preferences have shared helpers.
- The build workflow runs lint, regression tests, and the production build before packaging the site. The `src/projects-markdown` folder is kept intact.
