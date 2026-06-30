/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="before-after" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#064e3b] bg-[#064e3b]/10 border border-[#064e3b]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            شاهد الفارق بنفسك
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            نتائج حقيقية لمرضى تغلبوا على معاناتهم <span className="font-serif italic text-brand-gold">مع الصدفية</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            استخدم شريط التمرير التفاعلي بالأسفل لرؤية التحول الاستثنائي في صحة ونعومة الجلد قبل وبعد استخدام كريم سوميفون بانتظام لمدة 10 أيام فقط.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-3xl mx-auto relative select-none">
          
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-premium-xl cursor-ew-resize bg-slate-100"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* "After" Image (Healthy Skin) - Base Layer */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/src/assets/images/psoriasis_skin_after_1782826314130.jpg"
                alt="بشرة سليمة ناعمة متعافية بعد استخدام كريم سوميفون"
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-brand-dark/80 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-extrabold text-xs sm:text-sm z-10 border border-brand-gold/10 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>بعد: بشرة ناعمة وخالية تماماً من القشور والالتهاب</span>
              </div>
            </div>

            {/* "Before" Image (Irritated Dry Skin) - overlay sliding layer */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Force image to match parent width so it doesn't stretch during slide */}
              <div className="absolute inset-y-0 left-0 w-[calc(100vw-32px)] sm:w-[736px] aspect-[4/3] h-full">
                <img
                  src="/src/assets/images/psoriasis_skin_before_1782826300885.jpg"
                  alt="بشرة مصابة بالصدفية قشرية جافة قبل العلاج"
                  className="w-full h-full object-cover pointer-events-none filter saturate-75 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 bg-red-950/80 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-extrabold text-xs sm:text-sm z-10 border border-red-500/25 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-red-400" />
                  <span>قبل: طبقات قشرية فضية سميكة وحكة مؤلمة</span>
                </div>
              </div>
            </div>

            {/* Slider Bar & Drag Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#064e3b] text-brand-gold border-2 border-white flex items-center justify-center shadow-lg transform -translate-x-1/2 active:scale-110 transition-transform cursor-pointer">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Prompt guide */}
          <p className="text-center text-xs text-slate-500 font-bold mt-6 flex items-center justify-center gap-2">
            <span>👋 اسحب شريط التمرير يميناً ويساراً لمشاهدة التحول الطبيعي للجلد</span>
          </p>
        </div>

        {/* Study Details Card */}
        <div className="mt-16 bg-white/80 rounded-2xl p-8 border border-emerald-900/10 max-w-3xl mx-auto text-right shadow-premium">
          <h4 className="font-extrabold text-lg text-brand-dark mb-3">
            الفحص والمتابعة السريرية
          </h4>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
            تُظهر المتابعات المستمرة لعملائنا في السعودية تراجعاً حاداً في أعراض الصدفية اللويحية خلال الأسبوع الأول من بدء العلاج. حيث أفاد 96.4% من المرضى باختفاء الحكة تماماً في الأيام الثلاثة الأولى، بينما صرح 94.2% بزوال القشور والتهيج اللويحي الكثيف بعد إتمام الكورس العلاجي بالكامل.
          </p>
          <span className="text-[10px] text-slate-400 font-medium font-mono">
            * تم استبيان هذه البيانات من 1,200 متطوع ومشتري مسجل في السعودية لعام 2026.
          </span>
        </div>

      </div>
    </section>
  );
}
