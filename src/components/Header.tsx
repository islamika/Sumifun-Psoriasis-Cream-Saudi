/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ShoppingCart, ShieldCheck, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Banner (Saudi KSA Trust Announcement) */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4 text-center font-medium relative z-50 flex items-center justify-center gap-2">
        <span>🇸🇦 شحن مجاني لكافة مناطق المملكة العربية السعودية والدفع عند الاستلام</span>
        <span className="hidden md:inline-block bg-brand-gold text-brand-dark px-2 py-0.5 rounded-full text-[10px] font-bold animate-pulse">
          توصيل سريع خلال 24 ساعة
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#fdfdfb]/90 backdrop-blur-md border-b border-emerald-900/10 py-3"
            : "bg-[#fdfdfb]/80 backdrop-blur-md border-b border-emerald-900/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#064e3b] flex items-center justify-center text-brand-gold font-serif italic text-lg border border-brand-gold/10">
              S
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-light text-[#064e3b] tracking-tight flex items-center gap-1">
                Sumifun<span className="text-brand-gold font-serif font-black">.</span>
              </h1>
              <p className="text-[9px] text-emerald-900/40 font-bold tracking-widest uppercase hidden sm:block">
                KSA PREMIUM PSORIASIS TREATMENT
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-emerald-900/70 uppercase">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("problem")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              الأعراض
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              الفوائد
            </button>
            <button
              onClick={() => scrollToSection("ingredients")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              المكونات
            </button>
            <button
              onClick={() => scrollToSection("how-to-use")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              طريقة الاستخدام
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              آراء العملاء
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              الأسئلة الشائعة
            </button>
          </nav>

          {/* Action Button & Contact Info */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+966500000000"
              className="hidden sm:flex items-center gap-2 text-emerald-900/80 hover:text-brand-emerald font-semibold text-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-emerald" />
              <span>إتصال سريع</span>
            </a>

            <button
              onClick={() => scrollToSection("order-form")}
              className="bg-[#064e3b] hover:bg-[#022c22] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all duration-300 border border-brand-gold/10"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-brand-gold" />
              <span>اطلب الآن - 199 ر.س</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-dark rounded-full hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-lg fixed top-[84px] left-0 w-full z-30 overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-4 text-right font-semibold text-slate-700">
              <button
                onClick={() => scrollToSection("hero")}
                className="py-2.5 border-b border-slate-50 hover:text-brand-emerald transition-all text-right"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("problem")}
                className="py-2.5 border-b border-slate-50 hover:text-brand-emerald transition-all text-right"
              >
                الأعراض والصدفية
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="py-2.5 border-b border-slate-50 hover:text-brand-emerald transition-all text-right"
              >
                فوائد المنتج
              </button>
              <button
                onClick={() => scrollToSection("ingredients")}
                className="py-2.5 border-b border-slate-50 hover:text-brand-emerald transition-all text-right"
              >
                المكونات الطبيعية
              </button>
              <button
                onClick={() => scrollToSection("how-to-use")}
                className="py-2.5 border-b border-slate-50 hover:text-brand-emerald transition-all text-right"
              >
                طريقة الاستخدام
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="py-2.5 border-b border-slate-50 hover:text-brand-emerald transition-all text-right"
              >
                آراء العملاء السعوديين
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="py-2.5 hover:text-brand-emerald transition-all text-right"
              >
                الأسئلة الشائعة
              </button>
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <a
                  href="tel:+966500000000"
                  className="w-full text-center py-3 bg-slate-100 hover:bg-slate-200 text-brand-dark rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-brand-emerald" />
                  <span>اتصال هاتفي مبيعات</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
