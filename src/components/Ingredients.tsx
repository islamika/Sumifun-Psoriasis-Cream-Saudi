/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Leaf, Info } from "lucide-react";
import { motion } from "motion/react";
import { ingredientsData } from "../data";

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      {/* Decorative botanical circles */}
      <div className="absolute top-[-5%] right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#064e3b] bg-[#064e3b]/10 border border-[#064e3b]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            قوة الطبيعة العلاجية
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            مكونات عشبية فاخرة وخلاصة طبية طبيعية <span className="font-serif italic text-brand-gold">100%</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            سر فعالية كريم سوميفون يكمن في احتوائه على توليفة طبية نادرة مستخلصة بدقة فائقة من النباتات البرية والطب الشعبي الآسيوي المطور، دون إضافة غرام واحد من الكورتيزون أو الكيماويات المسببة لترقق الجلد.
          </p>
        </div>

        {/* Ingredients Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredientsData.map((ingredient, idx) => (
            <motion.div
              key={ingredient.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/80 rounded-2xl border border-emerald-900/10 shadow-premium hover:shadow-premium-lg hover:border-brand-emerald/20 transition-all duration-300 overflow-hidden flex flex-col group text-right"
            >
              {/* Ingredient Image Frame */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={ingredient.image}
                  alt={ingredient.arabicName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Botanical Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-brand-dark px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-emerald-900/10 flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-brand-emerald" />
                  <span>عشبي نقي 100%</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {ingredient.name}
                  </span>
                  <h3 className="text-xl font-bold text-brand-dark mt-0.5 group-hover:text-brand-emerald transition-colors">
                    {ingredient.arabicName}
                  </h3>
                </div>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed flex-1">
                  {ingredient.description}
                </p>

                {/* Specific Action Highlight */}
                <div className="bg-brand-light/50 border border-brand-emerald/10 p-3.5 rounded-2xl flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <div className="text-xs text-brand-dark leading-relaxed">
                    <span className="font-extrabold block mb-0.5 text-brand-dark">دوره العلاجي:</span>
                    {ingredient.benefits}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Lab Quality Banner */}
        <div className="mt-16 bg-[#064e3b]/5 rounded-2xl p-8 md:p-12 border border-emerald-900/10 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="max-w-2xl text-right">
            <h4 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">
              نقاء فائق من مزارع عشبية خاضعة للمراقبة الطبية
            </h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">
              كل مادة عشبية مضافة لكريم سوميفون يتم قطفها بعناية فائقة وتنقيتها عبر تكنولوجيا التقطير البارد لضمان الحفاظ على الخصائص النشطة ومضادات الأكسدة القوية. تركيبتنا متوازنة الحموضة لكي تناسب الطبقة الخارجية الرقيقة للجلد المصاب بالصدفية الحادة.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald">
              ✓ خالي من العطور الصناعية المسببة للتحسس
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-emerald-900/10 shrink-0">
            <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-emerald font-bold text-lg">
              GMP
            </div>
            <div className="text-right">
              <h5 className="font-bold text-sm text-brand-dark">شهادة ممارسات التصنيع الجيدة</h5>
              <p className="text-[10px] text-slate-500 font-medium">مصنع بوفق المعايير والمقاييس العالمية</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
