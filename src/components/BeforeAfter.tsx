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
    <section id="before-after" className="py-24 bg-[#fafaf8] relative overflow-hidden border-t border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>✨ فاعلية سريرية مثبتة</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            نتائج سريرية حقيقية: <span className="font-serif italic text-brand-gold">شاهد الفارق بنفسك</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            حرك الشريط التفاعلي لمشاهدة التحول الاستثنائي في جودة ونعومة الجلد قبل وبعد استخدام كريم سوميفون بانتظام لمدة 10 أيام متتالية.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-3xl mx-auto relative select-none">
          
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-[6px] border-white shadow-premium-2xl cursor-ew-resize bg-slate-100"
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
              <div className="absolute bottom-6 right-6 bg-emerald-950/90 backdrop-blur-md px-4 py-2.5 rounded-2xl text-white font-extrabold text-xs sm:text-sm z-10 border-2 border-brand-gold/30 flex items-center gap-2 shadow-lg">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-gold stroke-[2.5]" />
                <span>بعد 10 أيام: جلد صحي ناعم ومتعافي بالكامل</span>
              </div>
            </div>

            {/* "Before" Image (Irritated Dry Skin) - overlay sliding layer */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Force image to match parent width using relative container size of 100% of containerRef */}
              <div 
                className="absolute inset-y-0 left-0 aspect-[4/3] h-full"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "768px" }}
              >
                <img
                  src="/src/assets/images/psoriasis_skin_before_1782826300885.jpg"
                  alt="بشرة مصابة بالصدفية قشرية جافة قبل العلاج"
                  className="w-full h-full object-cover pointer-events-none filter saturate-75 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 bg-red-950/90 backdrop-blur-md px-4 py-2.5 rounded-2xl text-white font-extrabold text-xs sm:text-sm z-10 border-2 border-red-500/30 flex items-center gap-2 shadow-lg">
                  <HelpCircle className="w-4.5 h-4.5 text-red-400 stroke-[2.5]" />
                  <span>قبل الاستعمال: تراكم قشري حاد وحكة شديدة ومؤلمة</span>
                </div>
              </div>
            </div>

            {/* Slider Bar & Drag Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#064e3b] text-brand-gold border-4 border-white flex items-center justify-center shadow-premium-xl transform -translate-x-1/2 active:scale-110 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <ArrowLeftRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Prompt guide */}
          <p className="text-center text-xs md:text-sm text-slate-500 font-extrabold mt-6 flex items-center justify-center gap-2 bg-[#064e3b]/5 py-2.5 px-6 rounded-full max-w-md mx-auto border border-[#064e3b]/5 shadow-sm">
            <span>👋 اسحب شريط التمرير الدائري يميناً ويساراً لمشاهدة قوة العلاج</span>
          </p>
        </div>

        {/* Study Details Card */}
        <div className="mt-16 bg-white rounded-3xl p-6 md:p-10 border-2 border-[#064e3b]/10 max-w-3xl mx-auto text-right shadow-premium-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#064e3b]" />
          
          <h4 className="font-black text-lg md:text-xl text-brand-dark mb-3 flex items-center gap-2">
            <span>📊 الفحص والمتابعة السريرية لعام 2026</span>
          </h4>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-bold mb-4">
            تُظهر المتابعات المستمرة لعملائنا في السعودية تراجعاً حاداً في أعراض الصدفية اللويحية خلال الأسبوع الأول من بدء العلاج. حيث أفاد 96.4% من المرضى باختفاء الحكة تماماً في الأيام الثلاثة الأولى، بينما صرح 94.2% بزوال القشور والتهيج اللويحي الكثيف بعد إتمام الكورس العلاجي بالكامل.
          </p>
          <span className="text-[10.5px] text-[#064e3b] font-extrabold block">
            * تم استبيان هذه البيانات من 1,200 متطوع ومشتري مسجل في السعودية لعام 2026.
          </span>
        </div>

      </div>
    </section>
  );
}
