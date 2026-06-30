/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, X, ShieldAlert, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";
import { comparisonData } from "../data";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>✨ معايير ومقاييس التميز</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            مقارنة عادلة: كيف يتفوق <span className="font-serif italic text-brand-gold">كريم سوميفون</span>؟
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            تعرف بالدليل الملموس على الفوارق الأساسية بين تركيبتنا العشبية الطبيعية الفاخرة وباقي المستحضرات الكيميائية المتاحة بالأسواق والتي قد تسبب تهيجاً مزمناً لجلدك.
          </p>
        </div>

        {/* Comparison Table wrapper */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border-2 border-[#064e3b]/15 shadow-premium-xl bg-white relative">
          {/* Decorative luxury gold ribbon in background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-[#064e3b] text-white">
                  <th className="py-6 px-6 font-black text-sm md:text-base tracking-wide text-right">المعايير والمميزات الفريدة</th>
                  <th className="py-6 px-6 text-center font-black text-brand-gold text-sm md:text-base bg-emerald-950/40 border-l border-r border-[#064e3b]/30">
                    <div className="flex items-center justify-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-brand-gold stroke-[2.5] animate-pulse" />
                      <span>كريم سوميفون الأصلي</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 text-center font-bold text-slate-300 text-xs md:text-sm">العلاجات والكريمات التقليدية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors duration-200">
                    {/* Feature Name */}
                    <td className="py-5 px-6 font-extrabold text-slate-800 text-xs md:text-sm leading-relaxed">
                      {feature.name}
                    </td>

                    {/* Sumifun Column */}
                    <td className="py-5 px-6 text-center bg-[#064e3b]/5 border-l border-r border-[#064e3b]/10">
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#064e3b] text-brand-gold shadow-md">
                        <Check className="w-5 h-5 stroke-[3px]" />
                      </div>
                    </td>

                    {/* Others Column */}
                    <td className="py-5 px-6 text-center">
                      {feature.others ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                          <Check className="w-4 h-4 stroke-[3px]" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500 border border-red-100">
                          <X className="w-4 h-4 stroke-[3.5px]" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security / Quality guarantee note */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#064e3b] text-white rounded-3xl p-6 md:p-10 border-2 border-brand-gold/25 flex flex-col sm:flex-row items-center gap-8 justify-between shadow-premium-xl relative overflow-hidden group">
          {/* Golden shine accent in background */}
          <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-brand-gold/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
          
          <div className="text-right flex-1 z-10">
            <h4 className="font-black text-lg md:text-xl text-brand-gold mb-2.5 flex items-center gap-2">
              <span>🛡️ الضمان الذهبي لراحة البال 100%</span>
            </h4>
            <p className="text-xs md:text-sm text-emerald-100 leading-relaxed font-medium">
              نحن لا نبيع مجرد وعود. استخدم كريم سوميفون الأصلي بانتظام لمدة 14 يوماً كاملة، وإذا لم تلمس تحسناً حقيقياً ومدهشاً في زوال القشور وتوقف الحكة الشديدة، تواصل معنا فوراً وسنقوم بإعادة كامل مبلغ الشراء فوراً دون أي شروط معقدة.
            </p>
          </div>
          
          <button
            onClick={() => {
              const element = document.getElementById("order-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="whitespace-nowrap bg-brand-gold hover:bg-white text-brand-dark font-black text-xs md:text-sm px-8 py-4.5 rounded-2xl tracking-wide transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-[1.03] cursor-pointer z-10 border border-[#064e3b]/10 shrink-0"
          >
            اطلب الآن واستفد من الضمان الذهبي
          </button>
        </div>

      </div>
    </section>
  );
}
