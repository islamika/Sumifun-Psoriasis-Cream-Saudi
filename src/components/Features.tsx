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
    <section id="features" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            ثقتكم وراحتكم هي غايتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            لماذا تشتري بثقة مطلقة وأمان كامل <span className="font-serif italic text-brand-gold">من متجرنا؟</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            نحن نقدم منتجات أصلية ومجربة بالكامل، مع تيسير عمليات الشراء والتوصيل لضمان حصولك على أفضل تجربة علاج وتجاوب في المملكة.
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
                className="bg-white/80 rounded-2xl p-8 border border-emerald-900/10 shadow-premium hover:shadow-premium-lg transition-all duration-300 text-right flex flex-col gap-5 group"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-brand-light group-hover:bg-[#064e3b] transition-colors duration-300 flex items-center justify-center text-brand-emerald group-hover:text-brand-gold self-start border border-emerald-900/5">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-brand-dark tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Highlight Metrics Strip */}
        <div className="mt-16 bg-white/80 rounded-2xl p-6 md:p-8 border border-emerald-900/10 shadow-premium flex flex-wrap items-center justify-around gap-y-6 gap-x-12">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-light font-serif text-brand-dark">100%</span>
            <span className="text-xs text-slate-500 mt-1 font-bold">عشبي طبيعي وخالٍ من الكورتيزون</span>
          </div>
          <div className="w-px h-10 bg-emerald-900/10 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-light font-serif text-brand-dark">+1400</span>
            <span className="text-xs text-slate-500 mt-1 font-bold">عميل سعودي راضٍ ومثبت بالتجارب</span>
          </div>
          <div className="w-px h-10 bg-emerald-900/10 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-light font-serif text-brand-dark">24-48 ساعة</span>
            <span className="text-xs text-slate-500 mt-1 font-bold">سرعة التوصيل لكافة مدن المملكة</span>
          </div>
          <div className="w-px h-10 bg-emerald-900/10 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-light font-serif text-brand-dark">0 ر.س</span>
            <span className="text-xs text-slate-500 mt-1 font-bold">تكلفة الشحن لجميع الطلبات</span>
          </div>
        </div>

      </div>
    </section>
  );
}
