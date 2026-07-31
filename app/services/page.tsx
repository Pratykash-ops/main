"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check, ArrowRight, Globe, Palette, ShoppingBag,
  Video, Layout, Bot, Sword, CalendarClock,
  Workflow, BrainCircuit, Phone
} from "lucide-react";
import { siteConfig } from "@/config/site";

const primaryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-design-build": Globe,
  "logo-brand-identity": Palette,
  "ecommerce-storefronts": ShoppingBag,
};

const additionalIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "promo-video": Video,
  "social-media-kits": Layout,
  "discord-bots": Bot,
  "minecraft-servers": Sword,
  "event-tech": CalendarClock,
};

const consultingIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "smart-automations": Workflow,
  "tech-consulting": BrainCircuit,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const primaryAccents: Record<string, { iconBg: string; btn: string }> = {
    primary: { iconBg: "bg-primary/10 text-primary", btn: "bg-primary text-white hover:bg-primary-hover" },
    secondary: { iconBg: "bg-slate-100 text-slate-700", btn: "bg-slate-900 text-white hover:bg-slate-700" },
    indigo: { iconBg: "bg-blue-50 text-blue-700", btn: "bg-blue-700 text-white hover:bg-blue-800" },
  };

  return (
    <div className="w-full bg-grid-pattern relative min-h-screen">
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full accent-glow -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full accent-glow -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20"
          >
            Full-Spectrum Digital Studio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {siteConfig.services.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed"
          >
            {siteConfig.services.description}
          </motion.p>
        </div>

        {/* ── PRIMARY SERVICES ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 whitespace-nowrap">Core Offerings</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {siteConfig.services.primary.map((service) => {
              const Icon = primaryIcons[service.id] || Globe;
              const accent = primaryAccents[service.accent] ?? primaryAccents.primary;
              const contactLink = `/contact?service=${service.id}`;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${accent.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider border border-slate-200 px-2 py-1 rounded-lg">{service.price}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-lg text-slate-900 leading-tight">{service.title}</h3>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-wide">{service.forWho}</p>
                    </div>

                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-600 font-medium">
                          <Check className="w-3.5 h-3.5 text-primary mr-2 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={contactLink}
                    className={`mt-6 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 group ${accent.btn}`}
                  >
                    {service.ctaText}
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── ADDITIONAL SERVICES ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 whitespace-nowrap">We Also Offer</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {siteConfig.services.additional.map((service) => {
              const Icon = additionalIcons[service.id] || Globe;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/15 text-slate-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── CONSULTING / STRATEGY ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 whitespace-nowrap">Strategy & Consulting</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {siteConfig.services.consulting.map((service) => {
              const Icon = consultingIcons[service.id] || BrainCircuit;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="bg-slate-900 text-white border border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base text-white">{service.title}</h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-primary text-white p-8 sm:p-12 rounded-2xl text-center space-y-5 shadow-lg">
          <Phone className="w-8 h-8 mx-auto opacity-80" />
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="font-heading font-bold text-2xl">Not sure what you need?</h3>
            <p className="text-sm text-blue-100 font-medium leading-relaxed">
              Book a free 1-on-1 call. We'll listen to your goals and recommend the right approach — no sales pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary text-sm font-extrabold uppercase rounded-xl hover:-translate-y-0.5 transition-all group"
          >
            Book Free Call
            <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
