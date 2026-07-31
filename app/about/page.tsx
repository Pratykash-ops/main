"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Zap, Shield, Users, ArrowRight, Plus, X, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

const valueIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap: Zap,
  Shield: Shield,
  Users: Users,
};

export default function About() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const avatarColors: Record<string, string> = {
    Pratyaksh: "bg-primary",
    Vijay: "bg-slate-800",
    "Krishna Pal": "bg-accent text-slate-900",
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">

      {/* ── Animated Gradient Background ── */}
      <div className="fixed inset-0 -z-20 bg-[#F8FAFC]" />
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-200/20 blur-[80px]"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* ── HERO: Mission Statement ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20">
            Boutique Studio · Est. India
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.06]">
            {siteConfig.about.title}
          </h1>
          <p className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {siteConfig.about.story}
          </p>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-4">
            {[
              { value: "10+", label: "Projects" },
              { value: "2 Hr", label: "Avg Response" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Client Logos ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Trusted by growing brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { src: "/assets/logos/orchidInternational.png", alt: "Orchid International" },
              { src: "/assets/logos/animegroupindia.png", alt: "Anime Group India" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </motion.section>

        {/* ── Core Values ── */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 whitespace-nowrap">How We Operate</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {siteConfig.about.values.map((val) => {
              const Icon = valueIconMap[val.icon] || Zap;
              return (
                <motion.div
                  key={val.title}
                  variants={itemVariants}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900 mb-1">{val.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{val.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ── Team ── */}
        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 whitespace-nowrap">The Team</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <p className="text-center text-xs text-slate-400 font-medium mb-10">Click a card to learn more</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {siteConfig.about.team.map((member) => {
              const isOpen = expandedMember === member.name;
              const bgColor = avatarColors[member.name] ?? "bg-primary";

              return (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  layout
                  onClick={() => setExpandedMember(isOpen ? null : member.name)}
                  className={`bg-white border rounded-2xl shadow-sm cursor-pointer transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-primary shadow-md" : "border-slate-200 hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  {/* Tile Header — always visible */}
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center font-extrabold text-lg text-white shrink-0`}>
                        {member.avatar}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-sm text-slate-900">{member.name}</p>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-wide mt-0.5">{member.role}</p>
                      </div>
                    </div>
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-primary border-primary text-white rotate-45" : "border-slate-200 text-slate-400"}`}>
                      {isOpen ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-100 px-5 pb-5 pt-4 space-y-4"
                      >
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{member.bio}</p>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                          {member.links.linkedin && (
                            <a
                              href={member.links.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                              <FaLinkedin className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {"github" in member.links && member.links.github && (
                            <a
                              href={member.links.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                            >
                              <FaGithub className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {"instagram" in member.links && member.links.instagram && (
                            <a
                              href={member.links.instagram}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all"
                            >
                              <FaInstagram className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ── CTA Strip ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-5"
        >
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">Ready to work with us?</h2>
          <p className="text-slate-400 text-sm font-medium max-w-lg mx-auto leading-relaxed">
            Book a free 1-on-1 discovery call. No pitches — just an honest conversation about your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold text-sm uppercase rounded-xl hover:bg-primary-hover hover:-translate-y-0.5 transition-all group"
          >
            Book Free Call
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.section>

      </div>
    </div>
  );
}
