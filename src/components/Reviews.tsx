/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Star, ShieldCheck, Filter, UserCheck, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { reviewsData } from "../data";

export default function Reviews() {
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [filterCity, setFilterCity] = useState<string | "all">("all");

  // Get unique cities from reviews for filtering
  const cities = ["all", ...Array.from(new Set(reviewsData.map((r) => r.city)))];

  const filteredReviews = reviewsData.filter((review) => {
    const matchRating = filterRating === "all" || review.rating === filterRating;
    const matchCity = filterCity === "all" || review.city === filterCity;
    return matchRating && matchCity;
  });

  return (
    <section id="reviews" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            أصوات عملاء السعداء من قلب المملكة
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            ماذا يقول عملاؤنا في السعودية بعد تجربة <span className="font-serif italic text-brand-gold">كريم سوميفون؟</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            استعرض مراجعات وتقييمات العملاء الحقيقيين الذين عانوا لسنوات من الصدفية والأكزيما الحادة، وتخلصوا منها بفضل الله وتركيبتنا الطبيعية الاستثنائية.
          </p>
        </div>

        {/* Aggregate Trust Metrics panel */}
        <div className="bg-white/80 rounded-2xl p-8 border border-emerald-900/10 mb-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-right shadow-premium">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-6xl font-light font-serif text-brand-dark mb-2">4.9</span>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-bold">بناءً على 1,482 تقييم موثق للعملاء</p>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            {/* Rating distribution lines */}
            {[
              { stars: 5, pct: "94%" },
              { stars: 4, pct: "5%" },
              { stars: 3, pct: "1%" },
              { stars: 2, pct: "0%" },
              { stars: 1, pct: "0%" },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3 w-full">
                <span className="text-xs text-slate-600 font-bold w-12 flex items-center justify-end gap-1">
                  <span>{row.stars}</span>
                  <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                </span>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#064e3b] rounded-full" style={{ width: row.pct }} />
                </div>
                <span className="text-xs text-slate-500 font-bold w-8 text-left">{row.pct}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-900/10 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-emerald">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm text-brand-dark">مشترون موثقون ومفحوصون</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              كل التقييمات المعروضة هنا لعملاء حقيقيين أتموا الشراء وحصلوا على المنتج داخل أراضي المملكة.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white/80 p-4 rounded-2xl border border-emerald-900/10 max-w-5xl mx-auto mb-10 flex flex-wrap items-center justify-between gap-4 shadow-premium">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-bold shrink-0">
            <Filter className="w-4 h-4 text-brand-emerald" />
            <span>فلترة الآراء حسب:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Star ratings filters */}
            <button
              onClick={() => setFilterRating("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterRating === "all"
                  ? "bg-[#064e3b] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              جميع التقييمات
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                filterRating === 5
                  ? "bg-[#064e3b] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>5</span>
              <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
            </button>
            <button
              onClick={() => setFilterRating(4)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                filterRating === 4
                  ? "bg-[#064e3b] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>4</span>
              <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
            </button>

            {/* City dropdown */}
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="px-4 py-2 bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="all">كل المدن السعودية</option>
              {cities.filter(c => c !== "all").map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reviews Cards List */}
        <div className="max-w-5xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/80 hover:bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-premium hover:shadow-premium-lg transition-all duration-300 flex flex-col gap-4 text-right"
                >
                  {/* Review Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder with initials */}
                      <div className="w-10 h-10 rounded-full bg-brand-light text-brand-emerald flex items-center justify-center font-extrabold text-sm border border-brand-emerald/10 shadow-inner">
                        {review.name.split(" ")[0][0]}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-brand-dark text-sm leading-tight">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-medium">
                          مدينة {review.city} • {review.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                        ))}
                      </div>
                      {review.isVerified && (
                        <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 border border-emerald-100">
                          <ShieldCheck className="w-2.5 h-2.5" />
                          <span>شراء مؤكد</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1 font-medium">
                    "{review.text}"
                  </p>

                  {/* Review Attachment Image */}
                  {review.image && (
                    <div className="mt-3 overflow-hidden rounded-xl aspect-[4/3] sm:aspect-video w-full max-h-48 border border-emerald-900/10 shadow-sm relative group">
                      <img
                        src={review.image}
                        alt={`مرفق تقييم ${review.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end p-3">
                        <span className="text-[10px] text-white font-bold bg-[#064e3b]/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow">
                          صورة حقيقية للطلب المرسل 📸
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12 bg-white/80 rounded-2xl border border-dashed border-emerald-950/20">
              <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm font-bold">عذراً، لا توجد تقييمات تطابق خيارات الفلترة المحددة.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
