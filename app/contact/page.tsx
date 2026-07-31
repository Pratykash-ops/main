"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MessageSquare, Send, Phone, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

function ContactContent() {
  const searchParams = useSearchParams();

  const urlParam = searchParams.get("url");
  const auditParam = searchParams.get("audit");
  const serviceParam = searchParams.get("service");

  const initialUrl = urlParam ? decodeURIComponent(urlParam) : "";
  const initialAudit = auditParam === "true" || !!urlParam;

  let initialHelp = "";
  if (serviceParam) {
    if (serviceParam === "website") initialHelp = "New Website";
    else if (serviceParam === "branding") initialHelp = "Logo & Branding";
    else if (serviceParam === "custom-tech") initialHelp = "Custom App";
    else if (serviceParam === "event") initialHelp = "Event Tech";
  }

  const [step, setStep] = useState(serviceParam ? 2 : 1);
  const [submitted, setSubmitted] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [helpWith, setHelpWith] = useState(initialHelp);
  const [websiteUrl, setWebsiteUrl] = useState(initialUrl);
  const [wantsCall, setWantsCall] = useState(initialAudit);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const businessTypeOptions = [
    { label: "Cafe or Restaurant Group", value: "Cafe/Restaurant", icon: "🍽️" },
    { label: "Educational Institution", value: "School/Institute", icon: "🎓" },
    { label: "Corporate Business or Startup", value: "Business/Startup", icon: "💼" },
    { label: "Creator or Personal Brand", value: "Creator/Personal", icon: "✨" },
    { label: "Just me — no business, just exploring", value: "Individual/Personal", icon: "👤" },
  ];

  const helpWithOptions = [
    { label: "Build a New Website", value: "New Website", desc: "Fresh, fast, and professional online presence." },
    { label: "Redesign Existing Site", value: "Redesign", desc: "Speed, layout, and visual upgrade for your current site." },
    { label: "Brand Identity & Logo", value: "Logo & Branding", desc: "Vector logos, color systems, and brand kits." },
    { label: "Custom App or Automation", value: "Custom App", desc: "Booking engines, portals, Discord bots, or workflows." },
    { label: "Event Tech & Ticketing", value: "Event Tech", desc: "Landing pages, QR tickets, and event management systems." },
    { label: "I just want to chat", value: "Explore Options", desc: "Not sure yet — let's have a no-pressure discovery call." },
  ];

  const canGoNext = () => {
    if (step === 1) return businessType !== "";
    if (step === 2) return helpWith !== "";
    if (step === 3) {
      if (websiteUrl.trim().length > 0) {
        return /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(websiteUrl.trim());
      }
      return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name.trim() !== "" && emailRegex.test(email.trim());
  };

  const handleNext = () => { if (canGoNext() && step < 4) setStep(step + 1); };
  const handleBack = () => { if (step > 1) setStep(step - 1); };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canGoNext()) return;
    
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Replace these placeholders with your actual EmailJS credentials
      // const SERVICE_ID = 'YOUR_SERVICE_ID';
      // const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      // const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        "service_nxrylzl", // Replace with your Service ID
        "template_n51f2uo", // Replace with your Template ID
        {
          name: name,
          contactInfo: email,
          businessType: businessType,
          helpWith: helpWith,
          websiteUrl: websiteUrl || "Not provided",
          wantsCall: wantsCall ? "Yes" : "No",
        },
        "YW82AN1dKDCN0FZv4" // Replace with your Public Key
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitError("Something went wrong while sending your request. Please try again or use WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppMessage = () => {
    const text = `Hi Minami Labs! Just submitted your form.\n- Name: ${name}\n- Type: ${businessType}\n- Need: ${helpWith}\n- Site: ${websiteUrl || "N/A"}\n- Wants 1-on-1 call: ${wantsCall ? "Yes" : "No"}`;
    return `https://wa.me/918368644902?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-20 flex flex-col justify-center min-h-[75vh] bg-grid-pattern relative">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full accent-glow -z-10" />

      {!submitted && (
        <div className="text-center space-y-3 mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s talk about your project
          </h1>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Quick 4-step form. We respond within 2 hours with a plan or a free call slot.
          </p>
          {/* Step Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s === step ? "w-6 bg-primary" : s < step ? "w-3 bg-primary/40" : "w-3 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden">
        {!submitted && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-100">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key={step}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.18 }}
              onSubmit={handleSubmit}
              className="space-y-5 pt-2"
            >
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Who are you?</h3>
                  <div className="space-y-2">
                    {businessTypeOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setBusinessType(opt.value)}
                        className={`w-full flex items-center gap-3 p-3.5 border rounded-xl text-left transition-all cursor-pointer ${
                          businessType === opt.value
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className="text-lg">{opt.icon}</span>
                        <span className="text-xs font-bold uppercase tracking-wide">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">What do you need?</h3>
                  <div className="space-y-2">
                    {helpWithOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setHelpWith(opt.value)}
                        className={`w-full flex flex-col p-3.5 border rounded-xl text-left transition-all cursor-pointer ${
                          helpWith === opt.value
                            ? "border-primary bg-primary/5"
                            : "border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className={`text-xs font-bold uppercase tracking-wide ${helpWith === opt.value ? "text-primary" : "text-slate-800"}`}>
                          {opt.label}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium mt-0.5">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">Existing website?</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Optional — skip if you don&apos;t have one</p>
                  </div>
                  <div className="space-y-1.5">
                    <input
                      type="text"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="yourwebsite.com or instagram.com/page"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-xs font-medium text-slate-800 placeholder:text-slate-400 ${
                        websiteUrl.trim() && !/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(websiteUrl.trim()) 
                          ? "border-red-300 focus:ring-red-500/30" 
                          : "border-slate-200"
                      }`}
                    />
                    {websiteUrl.trim() && !/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(websiteUrl.trim()) && (
                      <p className="text-[10px] font-bold text-red-500 pl-1 uppercase tracking-wider">Please enter a valid URL (e.g. example.com)</p>
                    )}
                  </div>
                  {/* 1-on-1 Call Option */}
                  <div className="border border-slate-200 bg-blue-50/40 p-4 rounded-xl space-y-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="wants-call"
                        checked={wantsCall}
                        onChange={(e) => setWantsCall(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer"
                      />
                      <label htmlFor="wants-call" className="text-xs font-bold text-slate-800 cursor-pointer select-none flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        Book a free 1-on-1 call with our team
                      </label>
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 pl-7 leading-relaxed">
                      A 15–20 min call where we understand your goals, suggest the best approach, and give you a rough estimate. No commitment needed.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Almost done — your details</h3>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rohan Mehta"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-xs font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rohan@example.com"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-xs font-medium text-slate-800 placeholder:text-slate-400 ${
                        email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) 
                          ? "border-red-300 focus:ring-red-500/30" 
                          : "border-slate-200"
                      }`}
                    />
                    {email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && (
                      <p className="text-[10px] font-bold text-red-500 pl-1 uppercase tracking-wider">Please enter a valid email address</p>
                    )}
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">No spam. We respect your privacy.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-medium rounded-xl text-center">
                  {submitError}
                </div>
              )}

              {/* Nav */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-6">
                {step > 1 ? (
                  <button type="button" onClick={handleBack} className="inline-flex items-center text-xs font-bold uppercase text-slate-400 hover:text-slate-700 cursor-pointer transition-colors">
                    <ArrowLeft className="mr-1.5 w-4 h-4" /> Back
                  </button>
                ) : <span />}

                {step < 4 ? (
                  <button
                    type="button"
                    disabled={!canGoNext()}
                    onClick={handleNext}
                    className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                      canGoNext() ? "bg-primary text-white hover:bg-primary-hover shadow-sm" : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end ml-auto">
                    <button
                      type="button"
                      disabled={!canGoNext()}
                      onClick={() => {
                        if(canGoNext()) {
                          window.open(getWhatsAppMessage(), '_blank');
                          setSubmitted(true);
                        }
                      }}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 w-full sm:w-auto rounded-xl text-[11px] font-bold uppercase transition-all cursor-pointer ${
                        canGoNext() ? "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-sm" : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      WhatsApp <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="submit"
                      disabled={!canGoNext() || isSubmitting}
                      className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 w-full sm:w-auto rounded-xl text-[11px] font-bold uppercase transition-all cursor-pointer ${
                        canGoNext() && !isSubmitting ? "bg-primary text-white hover:bg-primary-hover shadow-sm" : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          Submitting... <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Email Submit <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
                <Send className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-slate-900">Got it, {name}!</h3>
                <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
                  We&apos;ll reach out to <span className="font-bold text-slate-800">{email}</span> within 2 hours.
                  {wantsCall && " We'll also send a calendar link to book your 1-on-1 call."}
                </p>
              </div>
              {wantsCall && (
                <div className="border border-blue-200 bg-blue-50 p-3 rounded-xl max-w-xs mx-auto flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-[10px] font-bold text-primary">Free 1-on-1 call confirmed — calendar link incoming!</p>
                </div>
              )}
              <div className="pt-5 border-t border-slate-100 space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Want to connect right now?</p>
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#25D366] text-white text-xs font-bold uppercase rounded-xl shadow-sm hover:bg-[#20ba59] transition-all group"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Open WhatsApp Chat
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-xs font-extrabold uppercase text-slate-400 tracking-widest">Loading...</p>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
