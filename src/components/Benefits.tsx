/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ComponentType } from "react";
import { Layers, Zap, ShieldAlert, Droplets, RefreshCw, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { benefitsData } from "../data";

// Map string icon names to Lucide Icon components
const iconMap: Record<string, ComponentType<any>> = {
  Layers: Layers,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
  Droplets: Droplets,
  RefreshCw: RefreshCw,
  ShieldCheck: ShieldCheck,
  Heart: Heart,
  Sparkles: Sparkles,
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#064e3b] bg-[#064e3b]/10 border border-[#064e3b]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            العناية المتكاملة والفعالة للبشرة
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            8 فوائد حقيقية يمنحها لك <span className="font-serif italic text-brand-gold">كريم سوميفون الأصلي</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            بفضل تركيبته الغنية وخبرته الطويلة، يستهدف هذا الكريم المتطور بؤر الصدفية ليعيد ملمس وصحة جلدك دون تسبب بأي أضرار مستقبلية للبشرة.
          </p>
        </div>

        {/* Benefits Bento-style / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || Sparkles;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/80 rounded-2xl p-8 border border-emerald-900/10 shadow-premium hover:shadow-premium-lg hover:border-brand-emerald/20 transition-all duration-300 flex flex-col gap-5 text-right relative overflow-hidden group"
              >
                {/* Background decorative gradient hover effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-emerald/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container with individual colors */}
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-300 self-start border border-emerald-900/5">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-dark tracking-tight mb-2 group-hover:text-brand-emerald transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big visual banner inside benefits section */}
        <div className="mt-16 bg-brand-dark text-white rounded-[2.5rem] p-8 md:p-12 border border-brand-gold/20 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden shadow-premium-xl">
          {/* Subtle gold mesh-glow in background */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl" />

          {/* Texture mockup reference */}
          <div className="w-full lg:w-1/3 aspect-square rounded-3xl overflow-hidden relative border border-white/10 group">
            <img
              src="/src/assets/images/cream_texture_natural_1782822295843.jpg"
              alt="ملمس كريم سوميفون الطبيعي الراقي"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-5 flex items-end">
              <span className="text-xs font-bold text-brand-gold-light">ملمس حريري سريع الامتصاص والترطيب</span>
            </div>
          </div>

          <div className="w-full lg:w-2/3 text-right flex flex-col items-start">
            <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-4">تركيبة غنية فائقة السرعة</span>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
              لماذا يعتبر قوام كريم سوميفون فريداً ومفضلاً؟
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
              على عكس باقي كريمات الأكزيما والصدفية الدهنية الثقيلة التي تُغلق المسام وتترك آثار بقع دهنية على الملابس، يتميز كريم سوميفون بمستحلب دقيق مخملي فائق النعومة. يتغلغل بعمق في الجلد خلال ثوانٍ معدودة، مما يتيح لخلايا الجلد شرب المستخلصات المغذية مباشرة، ليوفر راحة فورية تدوم طوال اليوم دون لزوجة.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-brand-gold-light">
              <span className="flex items-center gap-1.5">✓ تم اختباره على البشرة الحساسة</span>
              <span className="flex items-center gap-1.5">✓ مناسب لجميع الأعمار</span>
              <span className="flex items-center gap-1.5">✓ مفعول ترطيب وتلطيف طويل الأمد</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
