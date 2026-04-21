# CLAUDE.md — Romero's Service Company Website Rebuild

## What This Project Is
A full website rebuild for Romero's Service Company, a multi-trade residential AND commercial repair contractor serving Lafayette and Acadiana, Louisiana. Built in Astro, deployed on Netlify.

## The Most Important Rules
- This business is RESIDENTIAL AND COMMERCIAL equally — never residential only
- Never use "handyman" as primary positioning anywhere on the site
- Primary descriptor is always "residential and commercial repair services"
- Confirmed homepage title: "Residential & Commercial Repair Services in Lafayette, LA │ Romero's Service Company"
- Forbidden title: "Home Repair & Handyman Services in Lafayette, LA" — never reintroduce this
- Phone display: (337) 366-0592 — always this format in visible text
- Phone link: tel:3373660592 — always this format in href attributes
- No street address anywhere on the site or in schema
- No fabricated content — testimonials and photos must be real and verbatim
- Response time: "typically within 24 hours" — never "within 24 hours" as a hard guarantee
- Emergency pages: use "We respond fast" — never 24-hour language

## The Stack
- Framework: Astro (static HTML output, no client-side rendering for SEO content)
- Hosting: Netlify
- Forms: Netlify Forms — add netlify attribute to form element
- CSS: Tailwind with PostCSS — purged and minified, never CDN, final bundle under 30KB compressed
- Images: WebP only, heroes max 200KB, content images 50-150KB
- Caching: Configure via netlify.toml — static assets 1 year, HTML no-cache

## Brand Assets
- Colors: Extract hex values from existing logo or site CSS before using — do not substitute without client approval. Reference only: #2C5F8A navy, #E8611A orange
- Logo: Use existing logo as-is — no alterations, no new logo created

## Project Documents
All planning documents are .docx files in this folder. Read the relevant module document before building any page in that module:
- romeros_MASTER_hermes.docx — master blueprint, read sections 1-6 before any code
- romeros_sitemap_v2_FINAL.docx — full site architecture
- romeros_module01_FINAL.docx — homepage spec (M01)
- romeros_module02_FINAL.docx — services hub spec (M02)
- romeros_module03_FINAL.docx — request service form spec (M03)
- romeros_module04_FINAL.docx — emergency page spec (M04)
- romeros_module05_FINAL.docx — property managers spec (M05)
- romeros_module06_FINAL.docx — all 8 service pages (M06)
- romeros_module07_FINAL.docx — all 7 city pages (M07)
- romeros_module08_FINAL.docx — 5 supporting pages (M08)

## Build Order
Phase 1 is 22 pages. Build in module order: M01 → M02 → M03 → M04 → M05 → M06 → M07 → M08

## Build Rules
- Missing assets: Insert <!-- PLACEHOLDER: description --> and continue building. Hard stops — do NOT launch without: Adam's origin story on /about, free estimates answer in FAQ, GBP URL on /contact
- Implementation flexibility: Claude Code may make layout, spacing, responsive, and typography decisions as long as no locked rule is violated. Over-literal interpretation that produces awkward UX is a build failure
- Secondary links: Max 1-2 contextual body copy links per page allowed beyond the primary cross-link mapping

## Performance Requirements
- LCP under 2.5 seconds on mobile — must pass before launch on /, /emergency-repairs, /request-service
- Hero images: preload in head, do not lazy-load
- All below-fold images: add loading="lazy"
- Use srcset and sizes on all content images for responsive delivery
- No render-blocking JS above fold

## What Needs to Come From Adam Before Launch
- His real origin story for /about (2-3 paragraphs, first-person plural)
- Real job photos — WebP format, compressed to size limits above
- Real customer testimonials — verbatim, name + city, minimum 5 for /reviews
- Trade-specific testimonials where possible
- Emergency testimonial — real urgent job quote
- Property manager testimonial — must be from a PM or landlord, not a homeowner
- City-specific testimonials for Lafayette and Youngsville at minimum
- Nextdoor Neighborhood Favorite badge image
- Google Business Profile URL
- Confirmed business hours