import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-8">
      <Link href="/" className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors">
        <ArrowLeft className="mr-1.5 w-4 h-4" />
        Back to Home
      </Link>
      
      <div className="space-y-4">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted">Last updated: July 31, 2026</p>
      </div>

      <div className="max-w-none text-sm sm:text-base text-muted space-y-6 leading-relaxed">
        <p>
          At Minami Labs, accessible from minamilabs.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Minami Labs and how we use it.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">1. Information We Collect</h3>
        <p>
          If you contact us directly or fill out our project inquiry form, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, operate, and maintain our website and services.</li>
          <li>Improve, personalize, and expand our website.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>Communicate with you to discuss project inquiries, request reviews, or send updates.</li>
          <li>Send WhatsApp or Email updates regarding your inquiries.</li>
        </ul>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">3. Log Files</h3>
        <p>
          Minami Labs follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">4. Consent</h3>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
}
