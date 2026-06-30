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
          <span className="text-xs font-bold text-[#064e3b] bg-[#064e3b]/10 border border-[#064e3b]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            مقارنة عادلة وشفافة
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            ما الذي يميز كريم سوميفون الأصلي <span className="font-serif italic text-brand-gold">عن العلاجات الأخرى؟</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            قبل اتخاذ قرار الشراء، تعرف على الفوارق الأساسية والجوهرية بين تركيبتنا الطبيعية الآمنة ومختلف المستحضرات والحلول المطروحة في الأسواق الكيميائية المجهدة للجلد.
          </p>
        </div>

        {/* Comparison Table wrapper */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-emerald-900/10 shadow-premium-lg bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-6 px-6 font-extrabold text-base md:text-lg">المعايير والمميزات</th>
                  <th className="py-6 px-6 text-center font-extrabold text-brand-gold text-base md:text-lg flex items-center justify-center gap-1.5">
                    <BadgeCheck className="w-5 h-5 text-brand-gold" />
                    <span>كريم سوميفون الأصلي</span>
                  </th>
                  <th className="py-6 px-6 text-center font-extrabold text-slate-300 text-base md:text-lg">العلاجات والكريمات الأخرى</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    {/* Feature Name */}
                    <td className="py-5 px-6 font-semibold text-slate-700 text-xs md:text-sm">
                      {feature.name}
                    </td>

                    {/* Sumifun Column */}
                    <td className="py-5 px-6 text-center bg-brand-light/20">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-light text-brand-emerald">
                        <Check className="w-5 h-5 stroke-[3px]" />
                      </div>
                    </td>

                    {/* Others Column */}
                    <td className="py-5 px-6 text-center">
                      {feature.others ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-orange-500">
                          <Check className="w-4 h-4 stroke-[3.5]" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500">
                          <X className="w-4 h-4 stroke-[3]" />
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
        <div className="mt-16 max-w-4xl mx-auto bg-brand-dark text-white rounded-2xl p-6 md:p-8 border border-brand-gold/15 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-md">
          <div className="text-right">
            <h4 className="font-extrabold text-base md:text-lg text-brand-gold-light mb-1.5">
              ضمان ذهبي 100% لاسترجاع الأموال
            </h4>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              إن لم تشهد أي تحسن ملموس في زوال القشور وتخفيف الحكة خلال 14 يوماً من استلام كريم سوميفون، اتصل بنا فوراً وسنقوم بإعادة ثمن عبوتك بالكامل فوراً. ثقتنا في العلاج والنتائج لا حدود لها!
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("order-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="whitespace-nowrap bg-brand-gold hover:bg-white text-brand-dark font-black text-xs md:text-sm px-6 py-3.5 rounded-2xl tracking-wide transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            اطلب الآن واحصل على الضمان الذهبي
          </button>
        </div>

      </div>
    </section>
  );
}
