/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, AlertTriangle, EyeOff, Activity } from "lucide-react";
import { motion } from "motion/react";
import { psoriasisProblems } from "../data";

export default function ProblemSection() {
  // Mapping icons manually based on the problems
  const getIcon = (id: string) => {
    switch (id) {
      case "p1":
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
      case "p2":
        return <EyeOff className="w-6 h-6 text-amber-500" />;
      case "p3":
        return <ShieldAlert className="w-6 h-6 text-red-600" />;
      case "p4":
        return <Activity className="w-6 h-6 text-orange-500" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-brand-emerald" />;
    }
  };

  return (
    <section id="problem" className="py-20 bg-[#fdfdfb] border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            لماذا الصدفية والأكزيما مؤلمة جداً؟
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            هل تعيش في عذاب يومي مع <span className="font-serif italic text-brand-gold">أعراض الصدفية؟</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            الصدفية ليست مجرد مشكلة تجميلية عابرة؛ إنها معركة يومية قاسية تؤثر على سلامتك النفسية، وعلى علاقاتك الاجتماعية، وتدمر راحتك وتمنعك من ممارسة أبسط أنشطتك اليومية بثقة.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {psoriasisProblems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/50 hover:bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-premium hover:shadow-premium-lg transition-all duration-300 flex flex-col gap-4 text-right"
            >
              {/* Icon Frame */}
              <div className="w-12 h-12 rounded-2xl bg-[#fdfdfb] border border-emerald-900/10 flex items-center justify-center">
                {getIcon(problem.id)}
              </div>
              
              <h3 className="text-lg font-bold text-brand-dark tracking-tight">
                {problem.title}
              </h3>
              
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Narrative Block */}
        <div className="mt-16 bg-[#064e3b]/5 p-6 md:p-8 rounded-2xl border border-emerald-900/10 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="text-right max-w-2xl">
            <h4 className="text-base md:text-lg font-bold text-[#064e3b] mb-2">
              توقف عن استخدام كريمات الكورتيزون التي تضعف وتضر جلدك بشكل دائم!
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              علاجات الصدفية التقليدية تعتمد على الكورتيزونات القوية التي تعطي حلاً مؤقتاً سريعاً، ولكنها تتسبب على المدى البعيد في ترقق الجلد، والضمور الجلدي، وظهور الأوردة العنكبوتية، ومع توقفها تعود الصدفية بشراسة أكبر. أنت بحاجة لحل طبيعي وآمن يعالج جذور الالتهاب ويغذي البشرة.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("order-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="whitespace-nowrap bg-brand-dark hover:bg-[#064e3b] text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer"
          >
            نعم، أحتاج الحل الطبيعي المضمون
          </button>
        </div>

      </div>
    </section>
  );
}
