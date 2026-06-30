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
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#fafaf8] to-[#fbfbfa] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-amber-700 bg-amber-50 border-2 border-amber-100 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>✨ شهادات معتمدة وموثقة بالصوت والصورة</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            ماذا يقول عملاؤنا في المملكة <span className="font-serif italic text-brand-gold">بعد استخدام سوميفون؟</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            استعرض مراجعات وتجارب حقيقية لعملاء سعوديين عانوا لسنوات من تهيج الصدفية والأكزيما، واستعادوا حيوية ونعومة بشرتهم بالكامل.
          </p>
        </div>

        {/* Aggregate Trust Metrics panel (Luxury Design) */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border-2 border-[#064e3b]/10 mb-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-right shadow-premium-xl relative overflow-hidden">
          
          <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-l border-slate-100 pb-6 md:pb-0 md:pl-8">
            <span className="text-7xl font-black font-serif text-[#064e3b] leading-none mb-2">4.9</span>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-extrabold">بناءً على 1,482 تقييم موثق لعملاء سعوديين</p>
          </div>

          <div className="flex flex-col gap-3 w-full border-b md:border-b-0 md:border-l border-slate-100 pb-6 md:pb-0 md:pl-8">
            {/* Rating distribution lines */}
            {[
              { stars: 5, pct: "94%" },
              { stars: 4, pct: "5%" },
              { stars: 3, pct: "1%" },
              { stars: 2, pct: "0%" },
              { stars: 1, pct: "0%" },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3 w-full">
                <span className="text-xs text-slate-600 font-extrabold w-12 flex items-center justify-end gap-1">
                  <span>{row.stars}</span>
                  <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                </span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#064e3b] rounded-full" style={{ width: row.pct }} />
                </div>
                <span className="text-xs text-slate-500 font-extrabold w-8 text-left">{row.pct}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-emerald shadow-inner">
              <UserCheck className="w-7 h-7 stroke-[2.5]" />
            </div>
            <h4 className="font-extrabold text-sm text-brand-dark">شراء آمن ومؤكد 100%</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              كافة التقييمات المعروضة لعملاء حقيقيين أتموا الشراء وحصلوا على المنتج بنجاح داخل أراضي المملكة.
            </p>
          </div>
        </div>

        {/* Filter Toolbar (Luxury design) */}
        <div className="bg-white p-4.5 rounded-2xl border-2 border-[#064e3b]/10 max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-premium">
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#064e3b] font-black shrink-0">
            <Filter className="w-4.5 h-4.5 text-[#064e3b]" />
            <span>تصفية مراجعات العملاء حسب:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Star ratings filters */}
            <button
              onClick={() => setFilterRating("all")}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                filterRating === "all"
                  ? "bg-[#064e3b] text-white shadow-md shadow-[#064e3b]/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              جميع الآراء
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                filterRating === 5
                  ? "bg-[#064e3b] text-white shadow-md shadow-[#064e3b]/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>5</span>
              <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
            </button>
            <button
              onClick={() => setFilterRating(4)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                filterRating === 4
                  ? "bg-[#064e3b] text-white shadow-md shadow-[#064e3b]/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>4</span>
              <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
            </button>

            {/* City dropdown */}
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-black focus:outline-none cursor-pointer"
            >
              <option value="all">كافة مدن السعودية</option>
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 border-2 border-[#064e3b]/5 hover:border-brand-gold/25 shadow-premium hover:shadow-premium-lg transition-all duration-300 flex flex-col gap-4 text-right group"
                >
                  {/* Review Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder with initials */}
                      <div className="w-11 h-11 rounded-full bg-[#064e3b]/5 text-[#064e3b] flex items-center justify-center font-black text-sm border-2 border-[#064e3b]/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {review.name.split(" ")[0][0]}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#064e3b] text-sm leading-tight">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-bold">
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
                        <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-black flex items-center gap-1 border border-emerald-100">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>شراء مؤكد</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed flex-1 font-bold">
                    "{review.text}"
                  </p>

                  {/* Review Attachment Image */}
                  {review.image && (
                    <div className="mt-3 overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-video w-full max-h-48 border-2 border-[#064e3b]/5 shadow-sm relative">
                      <img
                        src={review.image}
                        alt={`مرفق تقييم ${review.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent flex items-end p-3">
                        <span className="text-[10px] text-white font-black bg-[#064e3b]/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-brand-gold/20 shadow">
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
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-[#064e3b]/15">
              <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-pulse" />
              <p className="text-slate-500 text-sm font-black">عذراً، لا توجد تقييمات تطابق خيارات التصفية المحددة.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
