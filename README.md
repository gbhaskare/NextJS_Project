# TechStore

A responsive mini product showcase built as a Next.js and TypeScript technical assignment. TechStore is a fictional electronics retailer focused on clear product discovery and an approachable shopping experience.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

Other useful commands:

```bash
npm run lint
npm run type-check
npm run build
```

## Features

* Home page with an accessible hero and featured products
* Product listing with text search, category selection, and price-range filtering
* Statically generated product-detail routes with metadata, descriptions, specifications, and related items
* Session-only cart with add, remove, quantity update, item count, subtotal, and total
* Frontend-only login demonstration and guest mode
* About and contact pages; the contact form provides a client-side demo confirmation
* Page-specific metadata, semantic landmarks/headings, descriptive controls, keyboard focus states, and responsive layouts

## Architecture

* `app/`: App Router routes, layouts, and page metadata
* `components/`: reusable layout, product, and cart components
* `context/`: React Context state for cart and demo authentication
* `data/`: typed static catalog data
* `types/`: shared TypeScript domain types
* `lib/`: small presentation utilities

The project deliberately has no API, database, payment system, or real authentication. Product visuals are lightweight code-based illustrations to keep the submission self-contained and avoid external image dependencies.

Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL before production deployment so social metadata resolves to the final host.

## AI-assisted development

AI tools were used as development assistants during the project:

* **OpenAI Codex:** Project setup, scaffolding, implementation, and debugging.
* **ChatGPT:** Creating prompts, understanding Next.js concepts, and discussing difficult technical issues.
* **GitHub Copilot:** Code suggestions and help with resolving some development errors.

All AI-assisted code and suggestions were reviewed and tested before being used in the project.

## Assumptions and limitations

* Prices use USD and represent sample catalog data.
* Cart and login state are intentionally in-memory and reset on refresh.
* Checkout and contact submission are demonstrations only.
