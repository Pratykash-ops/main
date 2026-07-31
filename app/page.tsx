"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Laptop, Sparkles, Cpu, Ticket, ArrowRight, Check, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import SplitText from "@/components/react-bits/split-text";
import BlurText from "@/components/react-bits/blur-text";
import CountUp from "@/components/count-up";

// B2B Segment Icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils: Laptop,
  Sparkles: Sparkles,
  GraduationCap: Cpu,
  Briefcase: Ticket,
};

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Outcome indicators for corporate projects
  const projectOutcomes: Record<string, string> = {
    "orchid-international": "Measurable Result: +240% inbound leads generated",
    "anime-group-india": "Measurable Result: 12k+ instant QR tickets scanned",
    "shubham-singhal": "Measurable Result: 100% automated booking calendar setup",
  };

  return (
    <div className="w-full bg-grid-pattern relative min-h-screen">
      {/* Background Decorative Art (Gradient Blob) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full accent-glow -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full accent-glow -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                <span>{siteConfig.home.hero.badge}</span>
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                <SplitText text="We Engineer " delay={0.05} />
                <span className="relative inline-block text-primary">
                  Websites
                  <span className="absolute left-0 bottom-1.5 w-full h-2 bg-accent/35 -z-10 rounded" />
                </span>
                <SplitText text=" & Brands That Drive Growth." delay={0.2} />
              </h1>

              <div className="text-slate-600 font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <BlurText text={siteConfig.home.hero.subheadline} delay={0.4} />
              </div>

              {/* Hero CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  href={siteConfig.home.hero.ctaPrimary.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-extrabold text-sm uppercase rounded-lg shadow-sm hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  {siteConfig.home.hero.ctaPrimary.label}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={siteConfig.home.hero.ctaSecondary.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-extrabold text-sm uppercase rounded-lg shadow-sm hover:bg-slate-50 transition-all duration-200"
                >
                  {siteConfig.home.hero.ctaSecondary.label}
                </Link>
              </motion.div>
            </div>

            {/* Right Visual (Visually Artistic Isometric Tech Stack) */}
            <div className="lg:col-span-5 relative w-full h-[400px] md:h-[450px] flex items-center justify-center">
              {/* Isometric Container */}
              <div className="relative w-full max-w-sm aspect-[4/5] flex flex-col justify-center items-center scale-90 sm:scale-100">
                {/* Connection lines running vertically between layers */}
                <div className="absolute w-[2px] h-[70%] bg-gradient-to-b from-primary/10 via-primary/30 to-accent/10 z-0 left-1/2 -translate-x-1/2" />
                
                {/* LAYER 3: CLIENT LAYOUT FRONTEND (TOP) */}
                <motion.div
                  initial={{ opacity: 0, y: -40, rotateX: 50, rotateZ: -30 }}
                  animate={{ opacity: 1, y: -60, rotateX: 50, rotateZ: -30 }}
                  whileHover={{ y: -75, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                  className="w-64 h-36 bg-white border border-slate-200 shadow-md rounded-xl p-4 flex flex-col justify-between absolute z-30 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">FRONTEND CLIENT</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  </div>
                  <div className="space-y-1.5 py-2">
                    <div className="w-1/2 h-2 bg-slate-100 rounded" />
                    <div className="w-5/6 h-2 bg-slate-100 rounded" />
                    <div className="w-3/4 h-2 bg-slate-100 rounded" />
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-bold text-slate-400">
                    <span>LCP: 1.1s</span>
                    <span className="text-emerald-500 font-extrabold">99/100 SPEED</span>
                  </div>
                </motion.div>

                {/* LAYER 2: LOGIC & DATABASE (MIDDLE) */}
                <motion.div
                  initial={{ opacity: 0, y: 0, rotateX: 50, rotateZ: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 50, rotateZ: -30 }}
                  whileHover={{ y: -12, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  className="w-64 h-36 bg-slate-900 border border-slate-800 shadow-lg rounded-xl p-4 flex flex-col justify-between absolute z-20 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-accent bg-accent/15 px-2 py-0.5 rounded">API GATEWAY</span>
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex justify-between items-center py-2 gap-2">
                    <div className="flex-1 h-8 rounded border border-slate-800 bg-slate-950 p-1 flex items-center justify-center">
                      <span className="w-full h-1 bg-gradient-to-r from-primary to-accent" />
                    </div>
                    <div className="flex-1 h-8 rounded border border-slate-800 bg-slate-950 p-1 flex items-center justify-center">
                      <span className="w-full h-1 bg-gradient-to-r from-accent to-primary" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-bold text-slate-400">
                    <span>latency: 14ms</span>
                    <span className="text-accent">200 OK</span>
                  </div>
                </motion.div>

                {/* LAYER 1: BASE CLOUD & INFRA (BOTTOM) */}
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateX: 50, rotateZ: -30 }}
                  animate={{ opacity: 1, y: 60, rotateX: 50, rotateZ: -30 }}
                  whileHover={{ y: 48, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                  className="w-64 h-36 bg-slate-55 border border-slate-200 shadow-sm rounded-xl p-4 flex flex-col justify-between absolute z-10 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">INFRASTRUCTURE</span>
                    <span className="text-[9px] font-bold text-emerald-500">SECURE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 py-2">
                    <div className="h-6 bg-white border border-slate-100 rounded flex items-center justify-center text-[8px] font-bold">AWS</div>
                    <div className="h-6 bg-white border border-slate-100 rounded flex items-center justify-center text-[8px] font-bold">VERCEL</div>
                    <div className="h-6 bg-white border border-slate-100 rounded flex items-center justify-center text-[8px] font-bold">SSL</div>
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-bold text-slate-400">
                    <span>99.9% SLA</span>
                    <span className="text-primary">256-bit AES</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE STATS METRICS BAR */}
      <section className="bg-slate-900 border-y border-slate-800 py-10 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="py-4 md:py-0">
              <p className="text-4xl sm:text-5xl font-extrabold text-accent leading-none">
                <CountUp to={10} suffix="+" />
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Projects Shipped</p>
            </div>
            <div className="py-4 md:py-0">
              <p className="text-4xl sm:text-5xl font-extrabold text-accent leading-none">
                <CountUp to={99} suffix=".9%" />
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Server Uptime SLA</p>
            </div>
            <div className="py-4 md:py-0">
              <p className="text-4xl sm:text-5xl font-extrabold text-accent leading-none">
                <CountUp to={2} suffix=" Hr" />
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Avg Support Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS SEGMENTS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Technology Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              We design and construct reliable, high-converting digital infrastructures matching modern corporate specifications.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {siteConfig.home.clientTypes.map((client, idx) => {
              const Icon = iconMap[client.icon] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="border border-slate-200 bg-slate-50 p-6 rounded-xl hover:shadow-flat-md hover:bg-white transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {client.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {client.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. ONBOARDING PROCESS TIMELINE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Professional Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              A transparent, outcome-driven engagement flow built to guarantee timeline deadlines.
            </p>
          </div>

          <div className="relative mt-8">
            {/* Connection line (Desktop only) */}
            <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-slate-200 -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {siteConfig.home.process.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 px-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-extrabold text-base flex items-center justify-center shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED WORK SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Case Studies
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-semibold max-w-xl">
                A look at what we&apos;ve shipped for travel brands, event networks, and personal brands.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/work"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover group"
              >
                Explore all work
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.portfolio.projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-flat-lg hover:translate-y-[-3px] transition-all duration-300"
              >
                {/* Screenshot Visual Header */}
                <div className="h-48 w-full relative overflow-hidden bg-slate-50 border-b border-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Info body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{project.description}</p>
                    
                    {/* Measurement outcomes restructured */}
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100/80">
                      <p className="text-[10px] font-extrabold text-primary uppercase tracking-wide flex items-center">
                        <Check className="w-3.5 h-3.5 mr-1" />
                        {projectOutcomes[project.id] || "Measurable Result: Success guaranteed"}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-5 border-t border-slate-100 mt-5 flex justify-end">
                    <Link
                      href={`/work?project=${project.id}`}
                      className="text-xs font-bold text-primary group-hover:text-primary-hover inline-flex items-center"
                    >
                      Read Case Study
                      <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM 1-ON-1 CALL CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto">
            <Phone className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Book a Free 1-on-1 Strategy Call
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
              15–20 minutes with our team. We&apos;ll understand your goals, suggest the right approach, and give you a rough estimate — no commitment required.
            </p>
          </div>
          <Link
            href="/contact?audit=true"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-extrabold text-sm uppercase rounded-xl shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transition-all group"
          >
            Book Free Call
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
