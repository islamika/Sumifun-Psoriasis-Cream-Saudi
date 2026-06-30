/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Leaf, Info } from "lucide-react";
import { motion } from "motion/react";
import { ingredientsData } from "../data";

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-gradient-to-b from-[#fafaf8] to-[#fbfbfa] relative overflow-hidden border-t border-emerald-900/5">
      {/* Decorative botanical circles */}
      <div className="absolute top-[-5%] right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>🌱 فاعلية عشبية نقية</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            مكونات عشبية برية وخلاصات طبية طبيعية <span className="font-serif italic text-brand-gold">100%</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            سر الكفاءة الفائقة يكمن في توليفة عشبية نادرة مستخلصة بعناية فائقة من الطب التقليدي المطور، دون إضافة ذرة واحدة من الكورتيزون أو الكيماويات المسببة لترقق الجلد.
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
              className="bg-white rounded-3xl border-2 border-[#064e3b]/5 hover:border-brand-gold/30 shadow-premium hover:shadow-premium-xl transition-all duration-300 overflow-hidden flex flex-col group text-right"
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
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-emerald-950 px-3 py-1 rounded-full text-[10px] font-black shadow-sm border border-emerald-900/10 flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-[#064e3b] stroke-[2.5]" />
                  <span>عشبي نقي 100%</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-extrabold">
                    {ingredient.name}
                  </span>
                  <h3 className="text-xl font-black text-[#064e3b] mt-0.5 group-hover:text-brand-gold transition-colors">
                    {ingredient.arabicName}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs md:text-sm font-bold leading-relaxed flex-1">
                  {ingredient.description}
                </p>

                {/* Specific Action Highlight */}
                <div className="bg-[#064e3b]/5 border-2 border-[#064e3b]/10 p-3.5 rounded-2xl flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div className="text-xs text-slate-700 leading-relaxed font-bold">
                    <span className="font-black block mb-0.5 text-[#064e3b]">دوره العلاجي للبشرة:</span>
                    {ingredient.benefits}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Lab Quality Banner */}
        <div className="mt-16 bg-[#064e3b]/5 rounded-[2rem] p-8 md:p-12 border-2 border-[#064e3b]/10 flex flex-col lg:flex-row items-center gap-8 justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl text-right z-10">
            <h4 className="text-xl md:text-2xl font-black text-[#064e3b] mb-4">
              نقاء فائق من مزارع عشبية خاضعة للمراقبة المخبرية
            </h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 font-bold">
              كل مادة عشبية مضافة لكريم سوميفون يتم قطفها بعناية فائقة وتنقيتها عبر تكنولوجيا التقطير البارد لضمان الحفاظ على الخصائص النشطة ومضادات الأكسدة القوية. تركيبتنا متوازنة الحموضة لكي تناسب الطبقة الخارجية الرقيقة للجلد المصاب بالصدفية الحادة.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#064e3b]">
              ✓ خالي تماماً من العطور الكيميائية الصناعية المسببة للتهيج
            </span>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-premium border-2 border-[#064e3b]/5 shrink-0 z-10">
            <div className="w-12 h-12 rounded-xl bg-[#064e3b] flex items-center justify-center text-brand-gold font-black text-sm shadow-md">
              GMP
            </div>
            <div className="text-right">
              <h5 className="font-black text-sm text-[#064e3b]">شهادة ممارسات التصنيع الجيدة</h5>
              <p className="text-[10px] text-slate-500 font-extrabold">مصنع وفق أعلى المعايير والمقاييس الطبية العالمية</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
