"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b border-slate-200 bg-[#F8FAFC]/90 backdrop-blur-md ${
        scrolled ? "shadow-sm bg-white/95" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/assets/logo_color-no_bg.png"
                alt="Minami Labs"
                width={140}
                height={48}
                className="h-11 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                priority
              />
              <span className="font-heading font-extrabold text-base tracking-tight text-slate-900 group-hover:text-primary transition-colors hidden sm:block">
                Minami Labs
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {siteConfig.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact?ref=navbar"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-xs font-extrabold uppercase rounded-lg shadow-sm hover:bg-primary-hover transition-all group"
            >
              Book Free Call
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-white text-foreground hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#F8FAFC] border-t border-slate-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
          {siteConfig.navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-bold uppercase transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/contact?ref=navbar-mobile"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 bg-primary text-white text-sm font-extrabold uppercase rounded-lg shadow-sm hover:bg-primary-hover"
            >
              Book Free Call
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
