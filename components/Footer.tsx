import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Trusted By logos ── */}
        <div className="flex flex-wrap items-center justify-center gap-10 pb-10 border-b border-slate-800 mb-10">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 w-full text-center">
            Trusted by
          </p>
          <Image
            src="/assets/logos/orchidInternational.png"
            alt="Orchid International"
            width={160}
            height={80}
            className="h-8 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-200 grayscale invert"
          />
          <Image
            src="/assets/logos/animegroupindia.png"
            alt="Anime Group India"
            width={160}
            height={80}
            className="h-8 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-200 grayscale invert"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">

          {/* Brand block */}
          <div className="space-y-5 pr-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo-no-bg.png"
                alt="Minami Labs"
                width={120}
                height={40}
                className="h-8 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              We design and build high-performance digital products for businesses that take their online presence seriously.
            </p>

            {/* Social icons via react-icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-lg border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                title="Email Us"
                className="w-8 h-8 rounded-lg border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Studio links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-sm text-white tracking-wider uppercase pb-2 border-b border-slate-800">
              Studio
            </h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-sm text-white tracking-wider uppercase pb-2 border-b border-slate-800">
              Capabilities
            </h3>
            <ul className="space-y-2">
              {siteConfig.services.primary.map((item) => (
                <li key={item.id}>
                  <Link
                    href="/services"
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-semibold text-sm text-white tracking-wider uppercase pb-2 border-b border-slate-800">
                Start a Project
              </h3>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Book a free 1-on-1 call. We&apos;ll discuss your goals and give you an honest recommendation.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase text-accent hover:text-white group transition-colors"
              >
                Chat on WhatsApp
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-[10px] text-slate-600">Response within 2 hours.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
