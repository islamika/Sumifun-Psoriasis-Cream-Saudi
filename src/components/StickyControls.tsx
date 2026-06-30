/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { MessageSquare, PhoneCall, ChevronUp, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyControls() {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show controls when scrolled down more than 300px
      setShowControls(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToForm = () => {
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Side Action Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 left-6 z-40 flex flex-col gap-3"
          >
            {/* WhatsApp floating button */}
            <a
              href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%83%D8%B1%D9%8A%D9%85%20%D8%B3%D9%84%D9%82%20%D9%84%D9%84%D8%B5%D8%AF%D9%81%D9%8a%D9%87"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا واتساب"
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
            </a>

            {/* Direct Call floating button */}
            <a
              href="tel:+966500000000"
              aria-label="اتصل بمبيعاتنا هاتفياً"
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 fill-white text-blue-500" />
            </a>

            {/* Scroll to Top button */}
            <button
              onClick={scrollToTop}
              aria-label="الرجوع لأعلى الصفحة"
              className="w-12 h-12 rounded-full bg-brand-dark hover:bg-brand-emerald text-brand-gold hover:text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-brand-gold/10 cursor-pointer"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Sticky Bottom Buy Bar (Mobile & Desktop) */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur-xl border-t border-[#064e3b]/10 py-3.5 px-4 md:px-8 z-40 shadow-[0_-10px_35px_rgba(0,0,0,0.08)] flex items-center justify-between gap-6"
          >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
              
              {/* Product Info & Pricing (Right side in RTL) */}
              <div className="text-right flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs text-[#064e3b] font-black tracking-wide">كريم سوميفون الأصلي</span>
                  <span className="text-[10px] text-slate-500 font-bold">المركب العشبي المطور 🇸🇦</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-baseline gap-1.5 leading-none">
                    <span className="text-lg md:text-2xl font-black text-[#064e3b]">199 ر.س</span>
                    <span className="text-xs text-slate-400 line-through font-bold">299 ر.س</span>
                  </div>
                  <span className="hidden md:inline-block bg-brand-gold/20 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                    وفر 100 ر.س (خصم 33%)
                  </span>
                </div>
              </div>

              {/* Fast Trust Indicators on Desktop */}
              <div className="hidden lg:flex items-center gap-6 text-xs text-slate-600 font-extrabold">
                <span className="flex items-center gap-1.5 text-[#064e3b]">
                  🚚 شحن مجاني وسريع لكافة المدن
                </span>
                <span className="flex items-center gap-1.5 text-[#064e3b]">
                  🛡️ الدفع عند الاستلام بعد المعاينة
                </span>
              </div>

              {/* Action Button (Left side in RTL) */}
              <button
                onClick={scrollToForm}
                className="flex-1 md:flex-none md:px-10 bg-[#064e3b] hover:bg-[#022c22] text-white font-black text-xs sm:text-sm md:text-base py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-[#064e3b]/10 hover:shadow-xl transition-all duration-300 animate-pulse-gold select-none cursor-pointer border border-[#064e3b]/10 hover:scale-[1.02]"
              >
                <ShoppingCart className="w-4.5 h-4.5 text-brand-gold stroke-[2.5]" />
                <span>اطلب الآن - الدفع عند الاستلام</span>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
