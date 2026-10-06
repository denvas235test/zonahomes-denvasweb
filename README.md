# Zona Homes Services LLC - website

Static site (HTML + CSS + a little JS). No build step. Deploys as-is on Vercel.

## Files
- `index.html` - the whole page
- `styles.css`, `script.js` - styling and the quote form handler
- `assets/fonts/` - self-hosted Barlow and Cormorant Garamond (woff2)
- `favicon.svg`, `robots.txt`, `vercel.json`

## Images
All photos load from Cloudinary (`kat6qihq`) by public ID, with no folders in the URLs.
The uploaded originals are untouched; the page asks Cloudinary for responsive sizes (`f_auto,q_auto:best,w_N`).

| Public ID | Used for |
|---|---|
| `zona-logo-gold-charcoal` | header and footer logo (PNG, transparent) |
| `zona-hero-painted-living-room` | hero |
| `zona-interior-painting-hallway` | interior painting card |
| `zona-exterior-painting-house` | exterior painting card |
| `zona-epoxy-garage-card` | epoxy card |
| `zona-drywall-repair` | repairs card |
| `zona-junk-removal-garage` | junk removal card |
| `zona-deep-cleaning-kitchen` | deep cleaning card |
| `zona-epoxy-garage-featured` | epoxy spotlight section |
| `zona-cta-background-house` | final call-to-action background |
| `zona-og-cover` | Open Graph / social share image (1200x630) |

These photos are AI-generated stand-ins. Replace them with real job photos as the client takes them
(upload to Cloudinary, keep the same public IDs or update the names in `index.html`).

## Quote form
Web3Forms. The access key is in the hidden `access_key` field of `#quote-form` in `index.html`.
Leads go to the email the key was created with. To switch to the client's email, create a new key
with the client's address at web3forms.com and replace the value.

## Gallery
The "Recent work" section (`#work`) is hidden until there are real job photos. Remove the `hidden`
attribute and add one `<figure>` per photo (see the comment in `index.html`).

## After the domain is known
- Add `<link rel="canonical">` and `<meta property="og:url">` with the final URL.
- Test the share preview on WhatsApp/Facebook (they cache old previews).
