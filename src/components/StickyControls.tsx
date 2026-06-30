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

      {/* Sticky Bottom Buy Bar for Mobile */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-100 py-3 px-4 z-40 lg:hidden shadow-[0_-5px_25px_rgba(0,0,0,0.06)] flex items-center justify-between gap-4"
          >
            <div className="text-right flex flex-col">
              <span className="text-[10px] text-slate-500 font-bold leading-none mb-1">كريم سوميفون الأصلي</span>
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="text-base font-black text-brand-dark">199 ر.س</span>
                <span className="text-[10px] text-slate-400 line-through">299 ر.س</span>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="flex-1 bg-brand-dark hover:bg-brand-emerald text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-2xl flex items-center justify-center gap-2 shadow-md animate-pulse-gold select-none cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-brand-gold" />
              <span>اطلب الآن - دفع عند الاستلام</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
