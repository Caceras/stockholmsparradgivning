# stockholmsparradgivning.se

Static site (Astro) for Stockholms Parrådgivning. No database, no admin login, nothing to hack.

- **Edit text:** pages in `src/pages/*.astro`; municipality texts in `src/data/kommuntext.ts`; team, prices and menu in `src/data/site.ts`.
- **Build:** `npm ci && npm run build` → `dist/`
- **Deploy:** Dockerfile (Node build → nginx). `nginx.conf` holds the 301 forwards from the old WordPress addresses, security headers and caching.
- **Google:** a sitemap is generated automatically at `/sitemap-index.xml`; `robots.txt` points to it.
