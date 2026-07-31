# MISSION
You are a Lead UX/UI Designer and Senior Full-Stack Engineer. Your objective is to build a warm, inviting, high-converting website for **Minami Labs** (minamilabs.in). 

The target audience is **EVERYDAY BUSINESS OWNERS & CREATORS**—cafe owners, schools, Instagram creators, local brands, event organizers, and modern startups. They want beautiful websites, great branding, and smooth tech without getting headache-inducing jargon thrown at them.

---

# DESIGN & UI/UX PHILOSOPHY

- **Core Aesthetic:** "Warm Japanese Light Minimalist" (Think Muji, Apple, and Notion Light Mode).
- **Theme:** Strictly **LIGHT MODE** default. Clean, spacious, warm, and trustworthy.
- **Color Palette:**
  - Background: Warm Canvas Off-White (`#FAF9F5` or `#F9FAFB`)
  - Surface/Cards: Pure White (`#FFFFFF`) with subtle soft shadows (`box-shadow: 0 4px 20px rgba(0,0,0,0.03)`) and clean borders (`#E5E7EB`).
  - Primary Accent: Japanese Crimson / Coral (`#FF3B5C`) — energetic, friendly, warm.
  - Secondary Accent: Soft Warm Indigo (`#4F46E5`) or Sage Green (`#10B981`).
  - Text Primary: Rich Charcoal (`#111827`) — ultra-legible and soft on the eyes.
  - Text Muted: Warm Slate (`#6B7280`).
- **Typography:**
  - Primary Font: `Inter` or `Geist Sans` (friendly, modern, highly readable).
  - Accent Headings: `Plus Jakarta Sans` or `Outfit` (soft geometric curves).
  - No monospace/code fonts anywhere on the user-facing pages!
- **Tone of Voice:** 
  - Friendly, clear, direct, and human. 
  - Zero developer jargon. Replace "Full-Stack React App" with "Custom High-Speed Website." Replace "AI Pipeline/RAG" with "Smart Business Automation." Replace "Initialize Build" with "Get Started."

---

# ARCHITECTURE & CONFIG-DRIVEN STRUCTURE

- **Framework:** Next.js 14+ (App Router), React 18, TypeScript.
- **Styling:** Tailwind CSS, Shadcn UI.
- **Motion:** Framer Motion (smooth, gentle fade-ins, soft hover card lifts).
- **Config File (`config/site.ts`):** All copy, services, portfolio items, team info, and testimonials MUST live in a central `config/site.ts` file so non-technical owners can edit text in seconds.

---

# DETAILED PAGE SPECIFICATIONS

### 1. Home Page (`/`)
- **Hero Section:**
  - **Badge:** `✨ Design & Web Studio based in India`
  - **Headline:** "We Build Beautiful Websites & Brands That Grow Your Business."
  - **Subheadline:** "Whether you run a cafe, an educational institute, a personal brand, or a growing business—we handle your website, design, and digital tech so you can focus on running your business."
  - **Primary CTA Button:** "Get a Free Website Review" (Glows warm crimson on hover).
  - **Secondary CTA Button:** "See Our Recent Work".
  - **Visual:** A crisp, warm hero layout featuring floating mockups of real websites (a cafe booking site, a brand logo kit, a school dashboard).
- **Who We Help (Client Cards):**
  - Grid of 4 card types showing target clients:
    1. *Cafes & Restaurants* (Online menus, table bookings, Google maps setup).
    2. *Creators & Brands* (Personal portfolios, merch stores, link hubs).
    3. *Schools & Institutes* (Student portals, admission forms, clean websites).
    4. *Startups & Businesses* (High-converting landing pages, custom web apps).
- **Simple 3-Step Process:**
  - Step 1: *We Talk* (Tell us what you need in plain English).
  - Step 2: *We Design & Build* (You get updates every 3 days).
  - Step 3: *You Launch* (Your business gets a stunning new digital home).
- **Featured Work Showcase:** Big visual cards highlighting 3 top projects with clear outcomes.
- **Social Proof / Testimonials:** Clean white review cards with stars and real human faces.

### 2. Work / Portfolio (`/work`)
- **Data Source:** Pull from Pratyaksh’s background (`pratyaksh.minamilabs.in`).
- **Header:** "Real Work. Real Impact."
- **Subtext:** "Explore how we’ve helped businesses, events, and companies elevate their digital presence."
- **Category Filter Tabs:** `All`, `Websites`, `Branding & Logos`, `Events & Media`.
- **Featured Projects (Driven by `site.ts`):**
  - *Orchid International:* Web design & marketing assets for a premier travel brand.
  - *Anime Group India (AGI):* Event websites, ticket scanning systems, and community hubs.
  - *Garmedi HospEquip:* Professional corporate identity, cleanroom engineering branding, and logos.
  - *Custom Client Work:* E-commerce storefronts, creator portfolios, and custom tools.
- **Project Detail Modals/Cards:** Shows a crisp full-page preview image, what the client needed, and what Minami Labs delivered.

### 3. Services (`/services`)
- **Header:** "How We Can Help You"
- **Subtext:** "Clear, fixed-price services with zero hidden fees."
- **Service Cards (Simple & Actionable):**
  1. **Website Design & Build:**
     - *For:* Cafes, schools, local businesses, creators.
     - *Includes:* Mobile-friendly design, fast loading, Google Maps setup, contact forms, WhatsApp order buttons.
  2. **Logo & Brand Identity:**
     - *For:* New businesses, re-brands, hardware & corporate firms.
     - *Includes:* Custom logos, color palettes, social media banners, business cards.
  3. **Custom Web Apps & Automation:**
     - *For:* Growing businesses wanting custom features.
     - *Includes:* Booking engines, customer dashboards, automated lead collection.
  4. **Event Tech & Promotion:**
     - *For:* Expo organizers, conventions, meetups.
     - *Includes:* QR ticketing websites, promotional promo videos, banner designs.

### 4. About Us (`/about`)
- **Header:** "Crafted with Care. Driven by Quality."
- **Story Section:** "Minami (南) means South. We are a boutique digital studio based in India. We believe great design shouldn't be complicated, and building a website shouldn't feel like learning rocket science."
- **Core Values:**
  - 🌸 *Simplicity First:* No confusing jargon.
  - ⚡ *Lightning Fast:* Websites that load instantly on all smartphones.
  - 🤝 *Human Support:* You talk directly to the people building your project.
- **Team Section:**
  - Friendly bio card for **Pratyaksh** (Tech & Lead Builder) and co-founders with personal social links.

### 5. Contact & Free Review (`/contact`)
- **Header:** "Let's Build Something Great Together."
- **Subtext:** "Fill out this quick form or send us a WhatsApp message. We respond within 2 hours."
- **Interactive Intake Form (Warm & Easy):**
  - Question 1: "What type of business do you run?" [Cafe/Restaurant | Creator/Personal | School/Institute | Other Business]
  - Question 2: "What do you need help with?" [New Website | Redesign Old Site | Logo & Branding | Custom Tech]
  - Question 3: "Do you have an existing website or social page?" [URL Input Box]
  - Question 4: "Your Name & WhatsApp / Email"
- **Free Audit Box:** "Want a free 3-minute video showing how to improve your current website? Drop your URL above and we'll send a personalized review!"

### 6. Legal Pages (`/privacy`, `/terms`)
- Clean, readable black-on-white text, simple navigation back to Home.

---

# EXECUTION STEPS FOR THE AGENT

1. Create `config/site.ts` with all friendly copy, service options, work experience, and contact metadata.
2. Configure Tailwind with warm light-mode colors (`bg-[#FAF9F5]`, primary `#FF3B5C`, text `#111827`).
3. Build a sticky glassmorphic light navbar (`Navbar.tsx`) with links: `Home`, `Work`, `Services`, `About`, `Contact`, and a bright red `Get Started` CTA button.
4. Build pages in order: `Home` -> `Work` -> `Services` -> `About` -> `Contact`.
5. Ensure 100% responsive design (looks incredible on mobile phones since cafe owners and creators browse on mobile).