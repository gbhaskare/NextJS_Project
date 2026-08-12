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

*** Prompts****
TechStore
AI-Assisted Development Workflow & Representative Prompts
Technical Assignment: Angular & Next.js Developer — Revalsys Technologies
Project: Mini Product Showcase Website built with Next.js, TypeScript, App Router and Tailwind CSS.
Purpose of this document
This document summarizes the structured AI-assisted development workflow followed while building TechStore. It
separates the roles of ChatGPT, OpenAI Codex, and GitHub Copilot and provides representative prompts used
during planning, implementation, debugging, review, and documentation.
Important note: These are representative development prompts based on the project workflow, rather than a claim that every
line of code was generated automatically. AI suggestions were reviewed, adapted, tested locally, and verified before submission.
Page 1
TechStore — AI-Assisted Development Prompts
TechStore — AI-Assisted Development Prompts Page 2
1. Requirement Analysis — ChatGPT
I have received a technical assignment for an Angular & Next.js Developer position.
The assignment requires a Mini Product Showcase Website using Next.js and TypeScript.
Requirements:- Home page with Hero and Featured Products- Product Listing with Search and Filters- Product Detail page- Cart- Login and Guest User Handling- About Us / Contact Us- Responsive UI- SEO- TypeScript- Clean reusable architecture- Proper state management- README documentation- AI-assisted development documentation
Please break this assignment into practical development phases. For each phase explain what should be
implemented, recommended Next.js architecture, reusable components, Server vs Client Components, SEO
approach, state management, and verification steps.
Do not generate the complete application yet. Create a practical one-day implementation plan.
2. Architecture Planning — ChatGPT
Based on the TechStore product showcase assignment, suggest a clean and maintainable Next.js App Router
architecture.
Use:
app/
components/
context/
data/
types/
lib/
public/
Explain:- Reusable component organization- Product data location- Shared TypeScript types- Cart/auth state- Server vs Client Components- How to avoid unnecessary libraries and over-engineering
Keep the architecture appropriate for a small technical assignment.
3. Repository Setup — OpenAI Codex
You are working as a senior Next.js engineer on a technical assignment.
Set up the TechStore project using Next.js, TypeScript, App Router and Tailwind CSS.
Create the initial architecture:
app/
components/
context/
data/
types/
lib/
public/
For this phase:
1. Initialize the project.
TechStore — AI-Assisted Development Prompts Page 3
2. Configure TypeScript and Tailwind.
3. Create a strongly typed Product interface.
4. Add 8–10 realistic electronics products as typed static data.
5. Create the root layout.
6. Create a minimal home page.
7. Configure global styling.
8. Avoid backend, database, real authentication, payment processing, and unnecessary dependencies.
Run lint, type checking and production build. Fix errors and report files, dependencies, architecture
decisions and verification results.
4. Home Page — OpenAI Codex
Implement the TechStore Home Page using the existing architecture.
Requirements:- Responsive navbar- Hero section- Clear CTA to view products- Featured products- Reusable ProductCard- Footer- Responsive mobile/tablet/desktop layout- Semantic HTML- Proper H1/H2 hierarchy- Accessible controls
Use existing typed product data and avoid unnecessary dependencies.
Run lint, type-check and production build after implementation.
5. Product Listing — OpenAI Codex
Implement the Product Listing page at /products.
Requirements:- Responsive product grid- Search by product name- Category filter- Price filter- Clear/reset filters- Empty state- Mobile-friendly filter UI- Reusable ProductCard- TypeScript- Client Components only where interactive state is required
Keep product data separate from UI and maintain the existing architecture. Run lint, type-check and build.
6. Product Detail — OpenAI Codex
Implement Product Detail functionality.
Requirements:- Dynamic route /products/[id]- Product image- Name- Price- Description- Specifications- Add to Cart- Related products- Invalid product ID handling- Responsive and semantic UI- Page-specific SEO metadata
TechStore — AI-Assisted Development Prompts Page 4
Use the existing Product type and data without duplication. Use generateMetadata where appropriate. Verify
multiple valid products and an invalid ID. Run lint, type-check and build.
7. Cart State — OpenAI Codex
Implement shopping cart functionality using React Context API.
Requirements:- Add product- Remove product- Increase/decrease quantity- Cart item count- Subtotal and total- Empty cart state- Cart page- Cart state accessible from product UI and navbar
Keep state logic separate from presentation. Do not introduce Redux because this is a small application. Use
TypeScript and verify all cart operations.
8. Login & Guest Handling — OpenAI Codex
Implement the login and guest-user flow.
Requirements:- Login page- Frontend-only login demonstration- Continue as guest option- No backend authentication- No real credentials- Small reusable authentication context
The purpose is to demonstrate the required user flow, not production authentication. Verify login and guest
flows and run lint, type-check and build.
9. About & Contact — OpenAI Codex
Implement About Us and Contact Us pages.
Requirements:- Unique About content- Contact information- Contact form- Client-side demo confirmation- Responsive design- Semantic HTML- Proper heading hierarchy- Accessible form labels and controls
About and Contact should have clearly different content and purpose. No backend submission. Run lint,
type-check and build.
10. SEO Review — ChatGPT
Review the SEO requirements for my Next.js App Router project.
Explain practical implementation of:- Page titles- Meta descriptions- Static metadata- generateMetadata()- Dynamic product metadata- Canonical URLs
TechStore — AI-Assisted Development Prompts Page 5- Open Graph metadata- Semantic HTML- Heading hierarchy
Also explain common SEO mistakes to avoid in a small technical assignment.
11. SEO Implementation Review — OpenAI Codex
Review the TechStore project specifically for SEO.
Check Home, Products, Product Detail, Cart, Login, About and Contact.
Verify:
1. Page titles
2. Meta descriptions
3. Dynamic product metadata
4. Semantic HTML
5. H1/H2/H3 hierarchy
6. Meaningful links and buttons
7. Appropriate Open Graph metadata
Do not unnecessarily change the UI. Make only safe SEO/accessibility improvements and run lint, type-check
and production build.
12. Responsive & Accessibility Review — OpenAI Codex
Perform a UI quality review of TechStore.
Check mobile, tablet and desktop layouts, navbar, hero, product grid, filters, product detail, cart, login
and contact form.
Also check semantic HTML, labels, keyboard focus states, heading hierarchy, readability, overflow and
accessibility.
Do not redesign unnecessarily. Fix actual usability/accessibility issues and verify the build.
13. Last-Mile Debugging — GitHub Copilot
I have a TypeScript/Next.js error in this component.
Please identify the cause and suggest the smallest correct fix.
Do not rewrite the whole component.
Explain:
1. Why the error occurs
2. What needs to change
3. Whether the change affects other components
I will review and test the suggested change before applying it.
14. Final Code Review — OpenAI Codex
The TechStore technical assignment is functionally complete.
Perform a final code review against the assignment.
Check:- Home- Product Listing- Search/filtering- Product Detail- Cart
TechStore — AI-Assisted Development Prompts Page 6- Login- Guest handling- About- Contact- Next.js App Router- TypeScript- Component reusability- State management- Responsive design- SEO- Accessibility- Error handling- Code organization- Unnecessary dependencies- Avoidable any usage- Duplicated code- Unnecessary Client Components- Unused imports/files- Broken links
Do not make large architectural changes. Make only safe improvements suitable for a one-day assignment.
Finally run:
npm run lint
npm run type-check
npm run build
Report changes and verification results.
15. README Documentation — ChatGPT
Create a concise professional README for the TechStore technical assignment.
Include:- Project overview- Setup instructions- Features- Architecture- AI-assisted development- Assumptions and limitations
Accurately mention:
OpenAI Codex — project setup, scaffolding, implementation and larger debugging tasks.
ChatGPT — prompt refinement, understanding Next.js concepts and discussing difficult technical issues.
GitHub Copilot — code suggestions and helping resolve some development errors.
Do not make the README sound like the entire project was automatically generated. State that AI suggestions
were reviewed and tested.
AI Tool Responsibilities
ChatGPT — Requirement analysis, task breakdown, architecture discussions, Next.js/SEO concept clarification,
prompt refinement, and documentation assistance.
OpenAI Codex — Repository setup, project scaffolding, larger feature implementation, architecture-level changes,
refactoring, verification, and final code review.
GitHub Copilot — Primarily used toward the end for smaller code suggestions, code completion, and resolving
some development errors.
The development process remained developer-driven: requirements were understood first, implementation was
reviewed, the application was tested locally, and lint/type-check/build verification was performed before
submission.
Final verification checklist
• npm install / npm ci
• npm run dev
• npm run lint
• npm run type-check
• npm run build
• Manual testing of navigation, search/filtering, product details, cart operations, login/guest flow, About and Contact
pages
• Responsive and SEO review
Prepared for technical assignment submission — TechStore
Page 7
TechStore — AI-Assisted Development Prompts
