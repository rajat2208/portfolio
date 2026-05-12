# Portfolio — Rajat Singh

Personal portfolio site. Next.js 16 (App Router) + Tailwind v4 + TypeScript.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Structure

```
app/
  layout.tsx              # Site shell, nav, footer, metadata
  page.tsx                # Home (/)
  globals.css             # Design tokens
  components/
    CaseStudy.tsx         # Reusable case-study layout + Section
  about/page.tsx          # /about
  writing/page.tsx        # /writing (placeholder index)
  projects/
    mlb-fouls/page.tsx    # /projects/mlb-fouls
    acrobat-sign/page.tsx # /projects/acrobat-sign
public/
  resume.pdf              # Linked from nav and home
```

## Adding a new project

1. Create `app/projects/<slug>/page.tsx` using `CaseStudy` and `Section` from `app/components/CaseStudy.tsx` (copy one of the existing files as a template).
2. Add the project to the `projects` array at the top of `app/page.tsx` so it appears on the home page.

## Adding a writing post

Currently `/writing` is a placeholder. When ready, easiest path is to add MDX:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

Then create `app/writing/<slug>/page.mdx` and update `app/writing/page.tsx` to list posts.

## Deploy to Vercel

1. Push to a GitHub repo
2. Import the repo at <https://vercel.com/new>
3. Defaults work; no env vars needed

## Future enhancements

- Add demo GIFs / short video clips per project
- Ship the MLB Foul Ball Heatmap live so the project page has a working link
- First writing post
- Custom domain
- View counts or basic analytics (Plausible / Vercel Analytics)
