export const siteConfig = {
  name: "Minami Labs",
  url: "https://minamilabs.in",
  description: "We build beautiful websites & brands that grow your business. Custom, high-speed, and zero jargon.",
  contact: {
    whatsapp: "https://wa.me/918368644902?text=Hi%20Minami%20Labs!%20I'd%20like%20to%20chat%20about%20a%20website%20project.",
    email: "hello@minamilabs.in",
    instagram: "https://instagram.com/minamilabs.in",
    twitter: "https://x.com/minamilabs"
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  home: {
    hero: {
      badge: "Design & Web Studio based in India",
      headline: "We Build Beautiful Websites & Brands That Grow Your Business.",
      subheadline: "Whether you run a cafe, an educational institute, a personal brand, or a growing business—we handle your website, design, and digital tech so you can focus on running your business.",
      ctaPrimary: { label: "Book a Free 1-on-1 Call", href: "/contact?audit=true" },
      ctaSecondary: { label: "See Our Recent Work", href: "/work" }
    },
    clientTypes: [
      {
        title: "Cafes & Restaurants",
        description: "Online menus, table bookings, and Google Maps setup so customers find and order from you easily.",
        icon: "Utensils"
      },
      {
        title: "Creators & Personal Brands",
        description: "Stunning personal portfolios, merch stores, and link hubs to showcase and monetize your work.",
        icon: "Sparkles"
      },
      {
        title: "Schools & Institutes",
        description: "Student portals, admission application forms, and clean, easy-to-navigate educational websites.",
        icon: "GraduationCap"
      },
      {
        title: "Startups & Local Businesses",
        description: "High-converting landing pages, corporate websites, and custom tools to power your daily operations.",
        icon: "Briefcase"
      }
    ],
    process: {
      title: "Our Simple 3-Step Process",
      steps: [
        {
          step: "01",
          title: "We Talk",
          description: "Tell us what you need in plain English or Hinglish. No complicated developer jargon, just a friendly conversation about your goals."
        },
        {
          step: "02",
          title: "We Design & Build",
          description: "We bring your vision to life. You'll receive design updates and staging links every 3 days to see progress in real time."
        },
        {
          step: "03",
          title: "You Launch",
          description: "Your business gets a stunning, lightning-fast new digital home. We hand over the keys and support you along the way."
        }
      ]
    },
    testimonials: [
      {
        quote: "Minami Labs delivered a gorgeous website for my personal portfolio as a psychologist in record time. We got table bookings working on day one, and customers love how fast the menu loads on their phones!",
        author: "Dr. Shubham Singhal",
        role: "Clinical Psychologist",
        rating: 5,
        avatar: "DS"
      },
      {
        quote: "Pratyaksh and the team made the entire process so easy. I didn't have to worry about servers, domains, or coding. They spoke my language and got my personal portfolio live in a week.",
        author: "Rohan Mishra",
        role: "Visual Artist & Content Creator",
        rating: 5,
        avatar: "RM"
      },
      {
        quote: "Our Event needed a clean landing for our upcoming event attendees. Minami Labs built exactly what we wanted, and their support is incredibly responsive.",
        author: "Shubham",
        role: "Director, Anime Group India",
        rating: 5,
        avatar: "SS"
      }
    ]
  },
  portfolio: {
    title: "Real Work. Real Impact.",
    description: "Explore how we've helped businesses, events, and companies elevate their digital presence.",
    categories: ["All", "Websites", "Branding & Logos", "Events & Media"],
    projects: [
      {
        id: "orchid-international",
        title: "Orchid International",
        category: "Websites",
        description: "Web design & marketing assets for a premier travel brand.",
        challenge: "The client needed a high-converting, visually rich web experience to showcase premium holiday packages and capture leads directly.",
        solution: "We designed a warm, destination-focused layout with smooth gallery transition sliders, integrated lead generation forms, and fast loading performance.",
        tags: ["Web Design", "Travel Branding", "Lead Gen"],
        image: "/assets/projects/orchidinternational.png"
      },
      {
        id: "anime-group-india",
        title: "AnimeGroupIndia Landing Page",
        category: "Websites",
        description: "High-converting promotional landing page and ticket scanning solution.",
        challenge: "AGI needed an easy-to-use ticketing platform that could withstand high traffic spikes during event launches and allow physical volunteers to scan QR tickets at the gates.",
        solution: "We engineered a robust event site with instant ticket generation, email/WhatsApp receipt delivery, and a lightweight mobile-friendly QR scanning dashboard for event staff.",
        tags: ["Event Landing Page", "QR Ticketing", "High Traffic"],
        image: "/assets/projects/agi-clan-wars.png"
      },
      {
        id: "agi-treasure-hunt",
        title: "AGI Treasure Hunt",
        category: "Events & Media",
        description: "An interactive digital treasure hunt experience for community engagement.",
        challenge: "AGI wanted a gamified engagement system for live event attendees that tracked QR puzzle completion and rewarded winners in real time.",
        solution: "Built systems for real-time puzzle solving, progression tracking, and instant prize redemption at the gate booth.",
        tags: ["Game Design", "QR Puzzles", "Real-time"],
        image: "/assets/projects/agi-treasure-hunt.png"
      },
      {
        id: "shubham-singhal",
        title: "Shubham Singhal Personal Portfolio",
        category: "Websites",
        description: "Sleek personal branding website and booking portal for a mental health consultant.",
        challenge: "The client needed a digital hub to outline their professional practice, write columns, and allow clients to schedule online sessions smoothly.",
        solution: "We developed a clean, typography-focused Muji-style website integrated with Calendly and a markdown journal engine.",
        tags: ["Web Design", "Personal Branding", "Booking Portal"],
        image: "/assets/projects/psychologistSite.png"
      },
      {
        id: "agi-summer-fiesta-concept",
        title: "AGI Summer Fiesta Concept Video",
        category: "Events & Media",
        description: "Promotional concept video for the AGI Summer Fiesta 2025 event.",
        challenge: "The client wanted a visually striking promotional video to build hype and announce their upcoming summer anime festival across social media.",
        solution: "We produced a high-energy concept video with dynamic motion graphics, custom transitions, and synced audio to capture the festival's vibrant atmosphere.",
        tags: ["Video Production", "Motion Graphics", "Promo"],
        image: "https://img.youtube.com/vi/FmnQiUJbG5s/maxresdefault.jpg",
        videoId: "FmnQiUJbG5s"
      },
      {
        id: "agi-summer-fiesta-announcement",
        title: "Summer Anime Fiesta Announcement",
        category: "Events & Media",
        description: "Official announcement video for the Anime Group India Summer Fiesta.",
        challenge: "AGI needed an engaging and clear announcement video to reveal the dates, venue, and key attractions for their biggest summer event.",
        solution: "We crafted an exciting reveal trailer with engaging typography, crisp editing, and a strong call-to-action for ticket sales.",
        tags: ["Video Production", "Event Teaser", "Promo"],
        image: "https://img.youtube.com/vi/WJjfsdEavzQ/maxresdefault.jpg",
        videoId: "WJjfsdEavzQ"
      }
    ]
  },
  services: {
    title: "What We Build",
    description: "End-to-end digital solutions from design to deployment. Fixed price, zero hidden fees.",
    primary: [
      {
        id: "website-design-build",
        title: "Beautiful, Lightning-Fast Websites",
        price: "Fixed Price",
        forWho: "Cafes, schools, local businesses, creators",
        includes: [
          "Mobile-friendly responsive design",
          "Lightning-fast page load times (sub 2s LCP)",
          "Google Maps & Search optimization",
          "Beautiful contact forms & lead collection",
          "WhatsApp direct-order buttons"
        ],
        ctaText: "Build My Website",
        accent: "primary"
      },
      {
        id: "logo-brand-identity",
        title: "Complete Brand Identity & Logos",
        price: "Fixed Price",
        forWho: "New businesses, re-brands, corporate firms",
        includes: [
          "Custom vector logo files (SVG, PNG, EPS)",
          "Harmonious brand color palette",
          "Modern typography pairing guide",
          "Social media banners & profile icons",
          "Print-ready business card layouts"
        ],
        ctaText: "Design My Brand",
        accent: "secondary"
      },
      {
        id: "ecommerce-storefronts",
        title: "Custom E-Commerce Storefronts",
        price: "Fixed Price",
        forWho: "Retailers, product brands, D2C sellers",
        includes: [
          "Custom product catalog & collections",
          "Secure checkout & payment gateway",
          "Inventory & order management panel",
          "Mobile-first shopping experience",
          "SEO-optimized product pages"
        ],
        ctaText: "Launch My Store",
        accent: "indigo"
      }
    ],
    additional: [
      {
        id: "promo-video",
        title: "Promotional Video Production",
        description: "High-quality promotional reels, motion graphics, and event recap videos for social media and ads."
      },
      {
        id: "social-media-kits",
        title: "Social Media Design Kits",
        description: "Branded post templates, story frames, and thumbnail packs to keep your content consistently on-brand."
      },
      {
        id: "discord-bots",
        title: "Custom Discord Community Bots",
        description: "Feature-rich bots for role assignment, moderation, economy systems, and community engagement."
      },
      {
        id: "minecraft-servers",
        title: "Minecraft Server Builds & Plugins",
        description: "Custom server environments, gameplay plugins, and lobby designs for gaming communities."
      },
      {
        id: "event-tech",
        title: "Event Tech & Management Systems",
        description: "End-to-end event portals with ticketing, QR scanning, leaderboards, and automated reminders."
      }
    ],
    consulting: [
      {
        id: "smart-automations",
        title: "Smart Business Automations",
        description: "Automate repetitive workflows — lead capture, invoice sending, WhatsApp follow-ups, and reporting dashboards."
      },
      {
        id: "tech-consulting",
        title: "Tech Consulting for Business Growth",
        description: "1-on-1 strategy calls to map your tech stack, identify gaps, and build a digital roadmap that matches your business stage."
      }
    ]
  },
  about: {
    title: "We build digital products that mean business.",
    story: "Minami (南) means South. We are a boutique digital design & engineering studio built in India, working with founders, creators, and growing businesses who need a reliable tech partner — not just a freelancer.",
    values: [
      {
        icon: "Zap",
        title: "Simplicity First",
        description: "No confusing code jargon. We speak plain English and keep everything simple, direct, and focused on your business growth."
      },
      {
        icon: "Shield",
        title: "Lightning Fast",
        description: "Your customers are busy. We build highly optimized, lightweight websites that load instantly on all smartphones and tablets."
      },
      {
        icon: "Users",
        title: "Human Support",
        description: "No robotic ticketing queues. You communicate directly with the builders actually working on your project."
      }
    ],
    team: [
      {
        name: "Pratyaksh",
        role: "Technical Lead & Founder",
        bio: "Full-stack builder passionate about creating clean, high-performance web products and modern digital solutions that solve real business problems.",
        avatar: "P",
        links: {
          linkedin: "https://linkedin.com/in/pratyaksh",
          github: "https://github.com/pratyaksh"
        }
      },
      {
        name: "Vijay",
        role: "POC & Sales Executive",
        bio: "Bridges client vision and studio execution. Vijay leads all initial discovery calls, scoping, and partnership negotiations to ensure every project starts right.",
        avatar: "V",
        links: {
          linkedin: "https://linkedin.com/in/vijay"
        }
      },
      {
        name: "Krishna Pal",
        role: "Creative Stylist & Designer",
        bio: "Crafts the visual identity behind every product. Krishna leads brand aesthetics, UI composition, and design systems that make interfaces feel premium.",
        avatar: "K",
        links: {
          linkedin: "https://linkedin.com/in/krishnapal",
          instagram: "https://instagram.com/krishnapal"
        }
      }
    ]
  }
};
