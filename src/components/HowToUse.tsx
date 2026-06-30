/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, CheckCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { howToUseSteps } from "../data";

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            دليل التطبيق والعلاج
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            خطوات بسيطة للحصول على بشرة ناعمة وخالية <span className="font-serif italic text-brand-gold">من القشور</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            للحصول على أقصى فاعلية علاجية ومنع عودة بقع الصدفية والأكزيما، ننصح بشدة باتباع هذه الخطوات الأربع البسيطة والمنتظمة يومياً.
          </p>
        </div>

        {/* Timeline Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[40px] inset-x-12 h-0.5 bg-gradient-to-r from-emerald-900/5 via-emerald-900/20 to-emerald-900/5 -z-10" />

          {howToUseSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/80 rounded-2xl p-8 border border-emerald-900/10 shadow-premium hover:shadow-premium-lg hover:border-brand-emerald/20 transition-all duration-300 relative text-right flex flex-col items-start"
            >
              {/* Step Number Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#064e3b] text-brand-gold font-serif italic text-xl flex items-center justify-center shadow-sm mb-6 border border-brand-gold/15">
                {step.step}
              </div>

              <h3 className="text-xl font-bold text-brand-dark tracking-tight mb-3">
                {step.title}
              </h3>

              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Medical Recommendations & Advice Grid */}
        <div className="mt-16 bg-white/80 rounded-2xl p-8 md:p-12 border border-emerald-900/10 shadow-premium grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-emerald-50 shrink-0 flex items-center justify-center text-brand-emerald">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-brand-dark mb-2">الاستمرارية المنتظمة</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                لا تتوقف بمجرد زوال الحكة. استمر في استخدام الكريم لمدة لا تقل عن 10 أيام بعد تراجع القشور لتضمن استعادة الخلايا الداخلية عافيتها الكاملة.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-emerald-50 shrink-0 flex items-center justify-center text-brand-emerald">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-brand-dark mb-2">تجنب الماء شديد السخونة</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                الاستحمام بالماء المغلي يسلب الجلد رطوبته وزيوته الطبيعية ويفاقم الحكة. استبدله بالماء الدافئ اللطيف لحماية بقع الصدفية من التهيج الشديد.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-emerald-50 shrink-0 flex items-center justify-center text-brand-emerald">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-brand-dark mb-2">تغذية وشرب المياه الكافي</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                جفاف الجسم الداخلي ينعكس مباشرة على صحة وجودة الجلد. حافظ على شرب ما لا يقل عن 8 إلى 10 أكواب من الماء يومياً للمساعدة في مرونة الخلايا.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
