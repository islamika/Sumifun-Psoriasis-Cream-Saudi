/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q1"); // Default open the first question

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#fbfbfa] to-[#fafaf8] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>✨ إجابات علمية شافية</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            استفسارات تهمك: <span className="font-serif italic text-brand-gold">الأسئلة الشائعة</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            تصفح الإجابات الشافية والموثقة سريرياً من لجنة الخبراء لدينا حول أفضل طرق الاستخدام والنتائج المتوقعة مع كريم سوميفون الأصلي.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {faqData.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#064e3b]/30 shadow-premium-xl"
                    : "bg-white/90 border-[#064e3b]/5 shadow-premium hover:border-[#064e3b]/20"
                }`}
              >
                {/* Trigger Header Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 md:py-6 px-6 md:px-8 text-right flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#064e3b] text-brand-gold border-[#064e3b]" 
                        : "bg-slate-50 text-slate-500 border-slate-100"
                    }`}>
                      <HelpCircle className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className={`font-black text-xs sm:text-sm md:text-base tracking-tight transition-colors duration-200 ${
                      isOpen ? "text-[#064e3b]" : "text-slate-800 hover:text-[#064e3b]"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <span className={`p-2 rounded-xl transition-all duration-300 ${
                    isOpen ? "bg-[#064e3b]/10 text-[#064e3b] rotate-180" : "bg-slate-50 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-xs md:text-sm text-slate-700 leading-relaxed font-bold border-t border-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic WhatsApp Support Button */}
        <div className="mt-16 bg-white p-6 md:p-10 rounded-3xl border-2 border-[#064e3b]/15 shadow-premium-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-right z-10">
            <h4 className="font-black text-lg md:text-xl text-[#064e3b] mb-1.5 flex items-center gap-2">
              <span>💬 هل لديك تساؤل خاص بوضعك الصحي؟</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 font-bold leading-relaxed">
              يسعد خبراؤنا السعوديون تقديم استشارات مجانية وسرية كاملة حول حالتك وطريقة الاستخدام المثلى 24 ساعة عبر الواتساب.
            </p>
          </div>
          
          <a
            href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%83%D8%B1%D9%84%D9%85%20%D8%B3%D9%84%D9%8A%D9%85%D9%81%D9%88%D9%86%20%D9%84%D9%84%D8%B5%D8%AF%D9%81%D9%8a%D9%87"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs md:text-sm px-8 py-4.5 rounded-2xl flex items-center gap-2 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer z-10 shrink-0"
          >
            <span>استشارة مجانية فورية بالواتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
}
