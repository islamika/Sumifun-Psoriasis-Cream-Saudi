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
    <section id="faq" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            تساؤلات واستفسارات
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            الأسئلة الشائعة حول كريم سوميفون <span className="font-serif italic text-brand-gold">في السعودية</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            قبل الشراء، استعرض إجابات تفصيلية وشاملة وموثوقة عن أبرز الأسئلة التي تطرح على فريق خدمة العملاء والاستشارات الطبية لدينا.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqData.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-brand-emerald/20 shadow-premium-lg"
                    : "bg-white/80 border-emerald-900/10 shadow-premium hover:border-emerald-900/20"
                }`}
              >
                {/* Trigger Header Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 md:py-6 px-6 md:px-8 text-right flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#064e3b] text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      <HelpCircle className="w-4.5 h-4.5" />
                    </div>
                    <span className={`font-bold text-sm md:text-base tracking-tight ${
                      isOpen ? "text-brand-dark" : "text-slate-700 hover:text-brand-dark"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-xl transition-transform duration-300 ${
                    isOpen ? "bg-brand-emerald/10 text-brand-emerald rotate-180" : "bg-slate-50 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-50/50">
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
        <div className="mt-16 bg-white/80 p-6 md:p-8 rounded-2xl border border-emerald-900/10 shadow-premium max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h4 className="font-extrabold text-base text-brand-dark mb-1">لديك استفسار آخر لم نجب عليه؟</h4>
            <p className="text-xs text-slate-500 leading-relaxed">فريق الاستشارات وخدمة العملاء السعودي متاح للإجابة على تساؤلاتك 24 ساعة عبر الواتساب.</p>
          </div>
          <a
            href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%83%D8%B1%D9%8A%D9%85%20%D8%B3%D9%84%D9%8A%D9%85%D9%81%D9%88%D9%86%20%D9%84%D9%84%D8%B5%D8%AF%D9%81%D9%8a%D9%87"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <span>تواصل معنا على الواتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
}
