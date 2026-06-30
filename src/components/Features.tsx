/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ComponentType } from "react";
import { Leaf, Activity, Truck, Coins } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data";

const iconMap: Record<string, ComponentType<any>> = {
  Leaf: Leaf,
  Activity: Activity,
  Truck: Truck,
  Coins: Coins,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#fafaf8] to-[#fbfbfa] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>🛡️ ثقة وأمان بلا حدود</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            لماذا تتسوق بثقة مطلقة وأمان كامل <span className="font-serif italic text-brand-gold">من متجرنا؟</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            نحن نوفر المنتج الأصلي المضمون 100% مع تجربة تسوق سلسة وراقية تليق بنضارة وسلامة بشرتكم.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Leaf;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-[#064e3b]/5 hover:border-brand-gold/30 shadow-premium hover:shadow-premium-xl transition-all duration-300 text-right flex flex-col gap-5 group"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-[#064e3b]/5 group-hover:bg-[#064e3b] transition-colors duration-300 flex items-center justify-center text-[#064e3b] group-hover:text-brand-gold self-start border border-[#064e3b]/10">
                  <IconComponent className="w-7 h-7 stroke-[2.3]" />
                </div>

                <h3 className="text-xl font-black text-[#064e3b] tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-xs md:text-sm font-bold leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Highlight Metrics Strip */}
        <div className="mt-16 bg-[#064e3b] text-white rounded-3xl p-6 md:p-10 border-2 border-brand-gold/25 shadow-premium-2xl flex flex-wrap items-center justify-around gap-y-6 gap-x-12 relative overflow-hidden group">
          {/* Subtle gold shine background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col items-center text-center z-10">
            <span className="text-3xl md:text-5xl font-black font-serif text-brand-gold">100%</span>
            <span className="text-xs text-emerald-100 mt-2 font-bold">عشبي طبيعي وآمن تماماً</span>
          </div>
          <div className="w-px h-12 bg-emerald-800/50 hidden md:block" />
          <div className="flex flex-col items-center text-center z-10">
            <span className="text-3xl md:text-5xl font-black font-serif text-brand-gold">+1,480</span>
            <span className="text-xs text-emerald-100 mt-2 font-bold">عميل سعودي راضٍ وممتن</span>
          </div>
          <div className="w-px h-12 bg-emerald-800/50 hidden md:block" />
          <div className="flex flex-col items-center text-center z-10">
            <span className="text-3xl md:text-5xl font-black font-serif text-brand-gold">24-48 ساعة</span>
            <span className="text-xs text-emerald-100 mt-2 font-bold">توصيل فائق السرعة بالمملكة</span>
          </div>
          <div className="w-px h-12 bg-emerald-800/50 hidden md:block" />
          <div className="flex flex-col items-center text-center z-10">
            <span className="text-3xl md:text-5xl font-black font-serif text-brand-gold">0 ر.س</span>
            <span className="text-xs text-emerald-100 mt-2 font-bold">شحن وتوصيل مجاني بالكامل</span>
          </div>
        </div>

      </div>
    </section>
  );
}
