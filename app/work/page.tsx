"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronRight, Check } from "lucide-react";
import { siteConfig } from "@/config/site";

// Outcome indicators for corporate projects
const projectOutcomes: Record<string, { label: string; desc: string }[]> = {
  "orchid-international": [
    { label: "Lead Generation Boost", desc: "Inbound travel inquiries increased by 2.4x within 30 days of launch." },
    { label: "Faster Load Times", desc: "LCP speed optimized to 1.1 seconds on 4G connections." }
  ],
  "anime-group-india": [
    { label: "High-Throughput Ticketing", desc: "12,000+ tickets scanned at gates without single system latency drop." },
    { label: "WhatsApp Delivery", desc: "Automated ticketing dispatch reduced support emails by 80%." }
  ],
  "shubham-singhal": [
    { label: "Automated Bookings", desc: "Calendly sync reduced customer onboarding administration by 12 hours/week." },
    { label: "Journal Content Hub", desc: "SEO-friendly markdown columns brought a 40% uptick in search referrals." }
  ],
};

function WorkContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  // Directly derive active project ID from query parameters to avoid effect/setState loops
  const projectParam = searchParams.get("project");
  const selectedProjectId = projectParam && siteConfig.portfolio.projects.some(p => p.id === projectParam)
    ? projectParam
    : null;

  // Set project parameter in URL on click
  const openProjectModal = (id: string) => {
    router.push(`/work?project=${id}`, { scroll: false });
  };

  // Clear project parameter in URL on close
  const closeProjectModal = () => {
    router.push("/work", { scroll: false });
  };

  const filteredProjects = activeCategory === "All"
    ? siteConfig.portfolio.projects
    : siteConfig.portfolio.projects.filter(p => p.category === activeCategory);

  const selectedProject = siteConfig.portfolio.projects.find(p => p.id === selectedProjectId);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          {siteConfig.portfolio.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed"
        >
          {siteConfig.portfolio.description}
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {siteConfig.portfolio.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === category
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              key={project.id}
              onClick={() => openProjectModal(project.id)}
              className="group cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-flat-lg hover:translate-y-[-2px] transition-all duration-300"
            >
              {/* Image Area */}
              <div className="h-64 w-full relative overflow-hidden bg-slate-50 border-b border-slate-100 transition-transform duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={350}
                  unoptimized={project.image.includes("youtube.com")}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                {"videoId" in project && project.videoId && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors z-10">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Info Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-primary font-bold uppercase tracking-wide group-hover:text-primary-hover transition-colors">
                    <span>Explore Study</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-flat-lg overflow-hidden z-10"
            >
              {/* Header Image or Video */}
              <div className={`w-full relative overflow-hidden border-b border-slate-100 ${"videoId" in selectedProject && selectedProject.videoId ? 'aspect-video bg-black' : 'h-56 sm:h-64'}`}>
                {"videoId" in selectedProject && selectedProject.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1&rel=0`}
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : (
                  <>
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={800}
                      height={500}
                      unoptimized={selectedProject.image.includes("youtube.com")}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                      <span className="text-foreground text-xs font-bold tracking-wider uppercase bg-accent px-3.5 py-1 rounded-full shadow-sm">
                        {selectedProject.category}
                      </span>
                    </div>
                  </>
                )}
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-600 hover:text-slate-900 border border-slate-200/50 hover:bg-white shadow-sm active:scale-95 transition-all cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Text Information Details */}
              <div className="p-6 sm:p-10 max-h-[60vh] overflow-y-auto space-y-6">
                <div>
                  <h2 className="font-heading font-bold text-3xl text-slate-900 uppercase">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">{selectedProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="border border-slate-200 bg-slate-50 p-5 rounded-xl space-y-2">
                    <h4 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider pb-1.5 border-b border-slate-200/60">
                      The Challenge
                    </h4>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="border border-slate-200 bg-slate-50 p-5 rounded-xl space-y-2">
                    <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider pb-1.5 border-b border-slate-200/60">
                      Our Solution Blueprint
                    </h4>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Restructured Outcomes Section */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-heading font-bold text-xs text-slate-800 uppercase tracking-wider">
                    Project Outcomes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(projectOutcomes[selectedProject.id] || []).map((outcome, idx) => (
                      <div key={idx} className="flex items-start bg-blue-50/50 border border-blue-100 p-3 rounded-lg">
                        <Check className="w-4.5 h-4.5 text-primary mr-2 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-tight uppercase">{outcome.label}</p>
                          <p className="text-[10px] text-slate-600 font-semibold mt-1 leading-relaxed">{outcome.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Inside Modal */}
                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] font-bold uppercase text-slate-400">Inspired by this project?</p>
                    <p className="text-sm font-bold text-slate-900 uppercase">Let&apos;s build a custom version for you.</p>
                  </div>
                  <Link
                    href={`/contact?ref=case-study-${selectedProject.id}`}
                    onClick={closeProjectModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-primary text-white text-xs font-black uppercase rounded-lg shadow-sm hover:bg-primary-hover transition-all group"
                  >
                    Start Your Project
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <p className="text-xs font-extrabold uppercase text-muted">Loading portfolio work...</p>
      </div>
    }>
      <WorkContent />
    </Suspense>
  );
}
