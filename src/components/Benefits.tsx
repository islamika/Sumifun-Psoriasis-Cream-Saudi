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
    <section id="benefits" className="py-24 bg-gradient-to-b from-[#fbfbfa] to-[#fafaf8] relative overflow-hidden border-t border-emerald-900/5">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>✨ فاعلية طبية وعناية متكاملة</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            8 مزايا علاجية متكاملة <span className="font-serif italic text-brand-gold">لكريم سوميفون الأصلي</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            بفضل تركيبته الغنية بالخلاصات العشبية، يستهدف كريم سوميفون بؤر التهيج بعمق ليرمم خلايا الجلد برفق ويمنع عودتها.
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
                className="bg-white rounded-3xl p-8 border-2 border-[#064e3b]/5 hover:border-brand-gold/30 shadow-premium hover:shadow-premium-xl transition-all duration-300 flex flex-col gap-5 text-right relative overflow-hidden group"
              >
                {/* Background decorative gradient hover effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#064e3b]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container with individual colors */}
                <div className="w-12 h-12 rounded-2xl bg-[#064e3b]/5 flex items-center justify-center text-[#064e3b] group-hover:bg-[#064e3b] group-hover:text-brand-gold transition-colors duration-300 self-start border border-[#064e3b]/10">
                  <IconComponent className="w-6 h-6 stroke-[2.3]" />
                </div>
                
                <div>
                  <h3 className="text-lg font-black text-[#064e3b] tracking-tight mb-2 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs md:text-sm font-bold leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big visual banner inside benefits section */}
        <div className="mt-16 bg-[#064e3b] text-white rounded-[2.5rem] p-8 md:p-12 border-2 border-brand-gold/25 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden shadow-premium-2xl group">
          {/* Subtle gold mesh-glow in background */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />

          {/* Texture mockup reference */}
          <div className="w-full lg:w-1/3 aspect-square rounded-3xl overflow-hidden relative border-2 border-brand-gold/20 shadow-lg">
            <img
              src="/src/assets/images/cream_texture_natural_1782822295843.jpg"
              alt="ملمس كريم سوميفون الطبيعي الراقي"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/95 via-transparent to-transparent p-5 flex items-end">
              <span className="text-xs font-black text-brand-gold">قوام مستحلب ناعم فائق التغلغل والامتصاص</span>
            </div>
          </div>

          <div className="w-full lg:w-2/3 text-right flex flex-col items-start z-10">
            <span className="text-xs font-black text-[#064e3b] bg-brand-gold px-4 py-1.5 rounded-full mb-4 border border-brand-gold/30">تركيبة خفيفة وسريعة الامتصاص</span>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
              لماذا يعتبر قوام كريم سوميفون فريداً ومفضلاً؟
            </h3>
            <p className="text-slate-200 text-xs md:text-sm font-bold leading-relaxed mb-6">
              على عكس الكريمات الكيميائية الثقيلة التي تسد مسام البشرة وتترك طبقة دهنية مزعجة على الملابس، يتميز كريم سوميفون بتركيبته العشبية فائقة التغلغل. يتغلغل بلطف في طبقات الجلد العميقة خلال ثوانٍ معدودة، ليوفر راحة فورية وحماية ممتدة تدوم طوال اليوم دون لزوجة.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-black text-brand-gold">
              <span className="flex items-center gap-1.5">✓ خاضع لرقابة واختبار الجودة المخبرية</span>
              <span className="flex items-center gap-1.5">✓ خالٍ تماماً من الكورتيزون والبارابين</span>
              <span className="flex items-center gap-1.5">✓ ترطيب ممتد المفعول حتى 24 ساعة كاملة</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
