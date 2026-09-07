# Cloudflare Status Dashboard

A minimal React + Vite + TypeScript + Tailwind project that displays Cloudflare's public status and incidents.

Features
- Overall status banner
- Component list with statuses
- Active incidents and incident history
- Auto-refresh (60s) and manual refresh

Getting started

1. Clone the repo

   git clone https://github.com/225kmblueman/cloudflare-status-dashboard.git
   cd cloudflare-status-dashboard

2. Install

   npm install

3. Run in development

   npm run dev

Build & deploy

- Build: npm run build
- Preview: npm run preview

Deploy to Vercel or Netlify as a static site (build command: npm run build, output: dist)

Notes
- Data is fetched from https://www.cloudflarestatus.com/api/v2/
- No authentication required

