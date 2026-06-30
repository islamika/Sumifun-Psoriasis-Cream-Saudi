/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Truck, Coins, Star, Clock, Heart } from "lucide-react";
import { motion } from "motion/react";

// Reference the generated product image
const productImage = "/src/assets/images/psoriasis_cream_product_1782822279571.jpg";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 md:py-24 bg-[#fdfdfb]">
      {/* Decorative Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-amber-500/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column (Right on RTL) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right order-2 lg:order-1">
            
            {/* Saudi Flag & Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-brand-dark text-xs md:text-sm font-bold mb-6"
            >
              <span className="flex items-center text-base">🇸🇦</span>
              <span className="tracking-wide">المنتج الأكثر مبيعاً بالمملكة العربية السعودية لعام 2026</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark leading-tight md:leading-tight lg:leading-[1.15] mb-6"
            >
              تخلص من عذاب الصدفية والأكزيما <span className="font-serif italic text-brand-gold">نهائياً</span> واستعد <span className="font-serif italic text-brand-emerald">عافية بشرتك</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              كريم سوميفون <span className="text-brand-dark font-bold">Sumifun الأصلي المطور</span> - تركيبته العشبية الطبيعية 100% بدون كورتيزون، تمنحك إيقافاً فورياً للحكة المزعجة، وتزيل قشور الجلد السميكة لتعود بشرتك ملساء وصحية في أيام معدودة.
            </motion.p>

            {/* Value Highlights Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 md:gap-4 w-full mb-8"
            >
              <div className="bg-white/80 p-3 md:p-4 rounded-2xl shadow-premium border border-emerald-900/10 flex flex-col items-center text-center gap-1.5 md:gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-brand-emerald">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-800">شحن مجاني سريع</span>
                <span className="text-[10px] text-slate-500 font-medium">لكل مدن السعودية</span>
              </div>
              <div className="bg-white/80 p-3 md:p-4 rounded-2xl shadow-premium border border-emerald-900/10 flex flex-col items-center text-center gap-1.5 md:gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-brand-gold">
                  <Coins className="w-5 h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-800">الدفع عند الاستلام</span>
                <span className="text-[10px] text-slate-500 font-medium">افحص منتجك ثم ادفع</span>
              </div>
              <div className="bg-white/80 p-3 md:p-4 rounded-2xl shadow-premium border border-emerald-900/10 flex flex-col items-center text-center gap-1.5 md:gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-brand-emerald">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-800">أصلي ومضمون</span>
                <span className="text-[10px] text-slate-500 font-medium">طبيعي وآمن 100%</span>
              </div>
            </motion.div>

            {/* Pricing Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-[#064e3b] text-white p-5 md:p-6 rounded-2xl w-full border border-brand-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 shadow-premium-lg"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-right">
                <span className="text-[11px] text-brand-gold-light font-bold tracking-wider mb-1 uppercase">عرض لفترة محدودة جداً</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-white">199 ر.س</span>
                  <span className="text-sm md:text-base text-slate-400 line-through">299 ر.س</span>
                </div>
                <span className="text-xs text-emerald-300 font-medium mt-1">توفير 100 ر.س (خصم 33% اليوم) + توصيل مجاني</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                {/* Countdown urgency */}
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
                  <Clock className="w-3.5 h-3.5 animate-spin" />
                  <span>ينتهي العرض قريباً: متبقي 7 قطع فقط!</span>
                </div>
                <button
                  onClick={scrollToForm}
                  className="bg-brand-gold hover:bg-white text-brand-dark hover:text-brand-dark px-8 py-3.5 rounded-xl text-sm md:text-base font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto animate-pulse-gold hover:scale-[1.03]"
                >
                  اطلب الآن بالدفع عند الاستلام
                </button>
              </div>
            </motion.div>

            {/* Trust factors footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-semibold"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                <span>تقييم 4.9/5 بناءً على 1,482 عميل سعودي</span>
              </div>
              <div className="hidden sm:block text-slate-300">|</div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>خالٍ تماماً من الكورتيزون والمواد الكيماوية</span>
              </div>
            </motion.div>

          </div>

          {/* Image Column (Left on RTL) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[420px] lg:max-w-none"
            >
              {/* Decorative Frame Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-emerald/15 to-transparent rounded-2xl -rotate-2 scale-102 -z-10" />
              <div className="absolute inset-0 bg-white rounded-2xl shadow-premium border border-emerald-900/10 -z-10" />
              
              {/* Product Badge Overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-sm border border-emerald-900/10 flex items-center gap-1.5 z-10">
                <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                <span className="text-xs font-bold text-brand-dark">منتج أصلي 100%</span>
              </div>

              {/* Discount Tag Overlay */}
              <div className="absolute bottom-6 left-6 bg-amber-400 text-brand-dark font-black px-4 py-2 rounded-xl shadow-md border border-white flex flex-col items-center leading-none z-10">
                <span className="text-[10px] uppercase tracking-wider font-bold">خصم</span>
                <span className="text-lg">33%</span>
              </div>

              {/* The generated high-end product image */}
              <div className="overflow-hidden rounded-2xl aspect-square border-4 border-white shadow-inner relative group">
                <img
                  src={productImage}
                  alt="كريم سوميفون الأصلي لعلاج الصدفية"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual texture hint */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 via-transparent to-transparent p-6 text-white text-right">
                  <h3 className="font-extrabold text-sm text-brand-gold-light">Sumifun Psoriasis Cream</h3>
                  <p className="text-[10px] text-slate-200 mt-1">تركيبة فعالة سريعة التغلغل والشفاء للجلد المصاب</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
