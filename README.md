# Zona Homes Services LLC - website

Multi-page site built with [Astro](https://astro.build) (static output). Deploys on Vercel with no extra config:
Vercel detects Astro, runs `npm run build` and serves `dist/`.

Live (test): https://zonahomes-denvasweb.vercel.app/

## Pages (16)
`/`, `/services/`, `/services/<slug>/` x6, `/property-managers/`, `/areas/`, `/areas/<city>/` x3, `/contact/`, `/privacy/`, 404.

## Where things live
- `src/data/services.ts` - copy for each service page (intro, what's included, process, tips, FAQs)
- `src/data/cities.ts` - copy for each city page
- `src/data/site.ts` - phone, URL, Web3Forms key, list of towns and distance tiers
- `src/components/` - header, footer, quote form, FAQ, service-area map
- `src/layouts/BaseLayout.astro` - SEO tags, Open Graph, canonical, JSON-LD
- `src/styles/global.css` - all styling (light theme, gold accent)
- `public/` - favicon and fonts. The share image is `zona-og-cover` on Cloudinary

## SEO
Unique title, description, canonical and Open Graph on every page; LocalBusiness (HousePainter), Service,
FAQPage and BreadcrumbList structured data; sitemap at `/sitemap-index.xml` (generated at build);
clean URLs with trailing slashes; internal links between services, cities and the property-manager page.

## Images
Photos load from Cloudinary (`kat6qihq`) by public ID, no folders in the URLs. Originals are untouched; the site asks for
responsive sizes (`f_auto,q_auto:best,w_N`). Current photos are AI-generated stand-ins: replace with real job photos.

## Quote form
Web3Forms, key in `src/data/site.ts`. Leads go to the email the key was created with.

## Search engines (currently blocked)
While testing, every page has `noindex, nofollow` and `robots.txt` disallows everything. To launch, set `indexable: true`
in `src/data/site.ts` and redeploy: that removes the noindex tag and publishes the sitemap line in `robots.txt`.

## Custom domain
When the real domain is connected, change `site` in `astro.config.mjs`, `url` in `src/data/site.ts`
(`robots.txt` is generated from it).

## Commands
`npm install`, `npm run dev`, `npm run build`
