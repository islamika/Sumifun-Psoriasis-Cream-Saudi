/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ShieldCheck, Truck, Coins, Star, Clock, Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Gallery image paths
const mainProductImage = "/src/assets/images/psoriasis_cream_product_1782822279571.jpg";
const luxuryGalleryImage = "/src/assets/images/sumifun_luxury_gallery_1_1782831989059.jpg";
const textureGalleryImage = "/src/assets/images/sumifun_luxury_texture_1782832003766.jpg";

const galleryImages = [
  {
    src: mainProductImage,
    alt: "كريم سوميفون الأصلي لعلاج الصدفية",
    title: "العبوة الأصلية",
    subtitle: "كريم سوميفون المطور المضاد للصدفية"
  },
  {
    src: luxuryGalleryImage,
    alt: "علبة كريم سوميفون على سطح رخامي فاخر",
    title: "مكونات نقية",
    subtitle: "مستخلصات عشبية علاجية نادرة"
  },
  {
    src: textureGalleryImage,
    alt: "قوام الكريم اللطيف سريع الامتصاص والترطيب",
    title: "قوام حريري",
    subtitle: "تغلغل فوري لتهدئة تهيج الجلد"
  }
];

export default function Hero() {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const scrollToForm = () => {
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] via-[#fafaf8] to-[#f5f5f0]">
      {/* Premium Luxury Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-emerald-800/5 blur-[140px] -z-10" />
      <div className="absolute bottom-[5%] left-[-15%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-amber-500/5 blur-[120px] -z-10" />
      
      {/* Subtle organic pattern element */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none -z-10 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column (Right on RTL) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right order-2 lg:order-1">
            
            {/* Saudi Flag & Premium Gold Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#064e3b]/5 border border-[#064e3b]/10 text-brand-dark text-xs md:text-sm font-extrabold mb-6 shadow-sm"
            >
              <span className="flex items-center text-base">🇸🇦</span>
              <span className="tracking-wide text-brand-dark/95 flex items-center gap-1.5">
                المنتج العلاجي الأكثر طلباً بالمملكة لعام 2026 
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse fill-brand-gold" />
              </span>
            </motion.div>

            {/* Main Luxury Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#064e3b] leading-[1.2] md:leading-[1.15] lg:leading-[1.12] mb-6 tracking-tight"
            >
              ودّع معاناة الصدفية والأكزيما <span className="font-serif italic text-brand-gold block mt-1">واستعد نعومة بشرتك الطبيعية</span>
            </motion.h1>

            {/* Premium Editorial Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-8 max-w-2xl"
            >
              كريم سوميفون <span className="text-brand-dark font-black underline decoration-brand-gold decoration-2">Sumifun الأصلي المطور</span> - تركيبة عشبية ملكية فاخرة وخالية تماماً من الكورتيزون. يقضي على القشور البيضاء ويوقف الحكة الشديدة فوراً ليمنح جلدك مرونة فائقة وترطيباً عميقاً في 10 أيام فقط.
            </motion.p>

            {/* Interactive Image Gallery: Mobile Thumbnails inside Content Column if needed */}
            
            {/* Luxury Value Highlights Cards with Hover Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 md:gap-4 w-full mb-8"
            >
              <div className="bg-white/90 p-4 rounded-2xl shadow-premium hover:shadow-premium-lg border border-[#064e3b]/5 hover:border-brand-gold/20 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-emerald">
                  <Truck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-brand-dark">شحن مجاني سريع</span>
                <span className="text-[10.5px] text-[#064e3b] font-bold">لكافة مدن السعودية</span>
              </div>
              
              <div className="bg-white/90 p-4 rounded-2xl shadow-premium hover:shadow-premium-lg border border-[#064e3b]/5 hover:border-brand-gold/20 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-brand-gold">
                  <Coins className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-brand-dark">الدفع عند الاستلام</span>
                <span className="text-[10.5px] text-amber-700 font-bold">افحص ثم ادفع بأمان</span>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl shadow-premium hover:shadow-premium-lg border border-[#064e3b]/5 hover:border-brand-gold/20 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#064e3b]">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-brand-dark">ضمان ذهبي ممتد</span>
                <span className="text-[10.5px] text-[#064e3b] font-bold">طبيعي وآمن 100%</span>
              </div>
            </motion.div>

            {/* Golden Ribbon Pricing & Call to Action Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-brand-dark text-white p-6 md:p-8 rounded-2xl w-full border border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 shadow-premium-xl relative overflow-hidden group"
            >
              {/* Subtle background glow */}
              <div className="absolute -right-24 -top-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-right relative z-10">
                <span className="text-xs text-brand-gold font-extrabold tracking-widest mb-1.5 uppercase flex items-center gap-1">
                  ✨ عرض خاص محدود: خصم اليوم الوطني 33%
                </span>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight">199 ر.س</span>
                  <span className="text-sm md:text-base text-slate-400 line-through font-bold">299 ر.س</span>
                </div>
                <span className="text-xs text-emerald-300 font-bold mt-1">توفير 100 ر.س فوراً + توصيل مجاني لباب المنزل</span>
              </div>
              
              <div className="flex flex-col items-center gap-2.5 w-full sm:w-auto relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-extrabold">
                  <Clock className="w-4 h-4 text-brand-gold animate-pulse" />
                  <span>ينتهي العرض قريباً: متبقي 7 قطع فقط!</span>
                </div>
                <button
                  onClick={scrollToForm}
                  className="bg-brand-gold hover:bg-white text-brand-dark font-black px-8 py-4 rounded-xl text-sm md:text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto animate-pulse-gold hover:scale-[1.03] cursor-pointer"
                >
                  اطلب الآن بالدفع عند الاستلام
                </button>
              </div>
            </motion.div>

            {/* Customer Rating Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center flex-wrap gap-x-6 gap-y-3 text-xs md:text-sm text-slate-600 font-bold"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <span>4.9/5 بناءً على 1,482 تقييم عملاء في السعودية</span>
              </div>
              <div className="hidden sm:block text-slate-300 font-normal">|</div>
              <div className="flex items-center gap-1.5 text-[#064e3b]">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>خالٍ تماماً من الكورتيزون • آمن للأطفال والكبار</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Image Gallery Column (Left on RTL) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center items-center order-1 lg:order-2">
            
            {/* Main Interactive Product Image Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[440px] lg:max-w-none"
            >
              {/* Luxury gold glow border */}
              <div className="absolute inset-[-4px] rounded-[24px] bg-gradient-to-tr from-brand-gold/30 via-emerald-800/10 to-brand-gold/30 blur-sm -z-10" />
              <div className="absolute inset-0 bg-white rounded-2xl shadow-premium-xl border border-[#064e3b]/10 -z-10" />
              
              {/* Product Badge Overlay */}
              <div className="absolute top-4 right-4 bg-[#064e3b] text-white px-3.5 py-1.5 rounded-xl shadow-md border border-brand-gold/20 flex items-center gap-1.5 z-10">
                <ShieldCheck className="w-4 h-4 text-brand-gold stroke-[2.5]" />
                <span className="text-xs font-black">منتج أصلي ومصرح 🇸🇦</span>
              </div>

              {/* Discount Tag Overlay */}
              <div className="absolute bottom-5 left-5 bg-brand-gold text-brand-dark font-black px-4.5 py-2.5 rounded-xl shadow-lg border-2 border-white flex flex-col items-center leading-none z-10">
                <span className="text-[10px] uppercase tracking-wider font-extrabold">خصم خاص</span>
                <span className="text-xl mt-0.5">33%</span>
              </div>

              {/* Slider Arrow Navigation Overlays */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-[#064e3b] hover:text-white flex items-center justify-center text-brand-dark transition-all duration-200 z-10 cursor-pointer"
                aria-label="الصورة السابقة"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button 
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-[#064e3b] hover:text-white flex items-center justify-center text-brand-dark transition-all duration-200 z-10 cursor-pointer"
                aria-label="الصورة التالية"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Large Product Active Image container */}
              <div className="overflow-hidden rounded-2xl aspect-square border-[6px] border-white shadow-inner relative group bg-slate-50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={galleryImages[activeImageIdx].src}
                    alt={galleryImages[activeImageIdx].alt}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Visual texture description bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent p-6 text-white text-right">
                  <h3 className="font-black text-sm text-brand-gold">{galleryImages[activeImageIdx].title}</h3>
                  <p className="text-xs text-slate-100 mt-1 font-bold">{galleryImages[activeImageIdx].subtitle}</p>
                </div>
              </div>

            </motion.div>

            {/* Thumbnail Navigation Gallery list */}
            <div className="flex gap-3 justify-center w-full max-w-[440px]">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden bg-white shadow-sm border-2 transition-all duration-300 cursor-pointer ${
                    activeImageIdx === idx 
                      ? "border-brand-gold ring-2 ring-brand-gold/15 scale-105" 
                      : "border-slate-200 hover:border-[#064e3b]/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={`صورة مصغرة ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {activeImageIdx === idx && (
                    <div className="absolute inset-0 bg-brand-gold/10 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                    </div>
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
