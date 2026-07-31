import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-8">
      <Link href="/" className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors">
        <ArrowLeft className="mr-1.5 w-4 h-4" />
        Back to Home
      </Link>
      
      <div className="space-y-4">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
          Terms of Service
        </h1>
        <p className="text-xs text-muted">Last updated: July 31, 2026</p>
      </div>

      <div className="max-w-none text-sm sm:text-base text-muted space-y-6 leading-relaxed">
        <p>
          Welcome to Minami Labs! By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">1. Scope of Services</h3>
        <p>
          Minami Labs provides custom website design, development, brand identity assets, and digital consulting services. Each project will be governed by a separate statement of work, custom estimate, or fixed-price project scope agreed upon before the start of work.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">2. Intellectual Property & Ownership</h3>
        <p>
          Upon receipt of final payment, Minami Labs transfers all intellectual property rights of the custom designs, graphics, and code built specifically for your project to you. Minami Labs retains the right to display the completed work in our online portfolio and marketing materials unless agreed otherwise.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">3. Client Responsibilities</h3>
        <p>
          You agree to provide required content, feedback, media files, and approvals in a timely manner (within 3 days of request) to maintain project schedules. Minami Labs is not responsible for delays caused by missing client materials.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">4. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by applicable law, Minami Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
        </p>

        <h3 className="font-heading font-bold text-lg text-foreground pt-4">5. Changes to Terms</h3>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate the date of the latest update at the top of this page.
        </p>
      </div>
    </div>
  );
}
