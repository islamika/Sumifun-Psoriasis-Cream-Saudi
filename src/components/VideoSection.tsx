/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, ShieldCheck, Activity, Eye, Sparkles, HeartPulse, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const steps = [
  {
    time: 2,
    title: "مرحلة التهدئة الفورية (ثانية 1 - 3)",
    desc: "يبدأ المنثول الطبيعي بتبريد الجلد المتهيج وتسكين الأعصاب الجلدية، مما يوقف الرغبة الملحة في الحك فوراً.",
    metric: "مستوى الحكة والحرقة",
    value: "انخفاض بنسبة 95%",
    color: "from-blue-500 to-cyan-500",
    icon: HeartPulse
  },
  {
    time: 7,
    title: "مرحلة تفتيت قشور الجلد الجافة (ثانية 4 - 8)",
    desc: "يتغلغل هلام الألوفيرا وجذور السوفورا لتليين وتفكيك الخلايا القشرية الفضية المتراكمة، تمهيداً لتساقطها الطبيعي والناعم.",
    metric: "سمك وتراكم القشور",
    value: "انخفاض بنسبة 80%",
    color: "from-amber-500 to-yellow-500",
    icon: RefreshCw
  },
  {
    time: 12,
    title: "مرحلة البناء وإعادة الالتئام (ثانية 9 - 15)",
    desc: "تعمل خلاصة السنيديوم على تنشيط تجديد الخلايا الميكروبية للجلد، لتبني حاجزاً دهنياً وقائياً يمنع عودة الصدفية مجدداً.",
    metric: "رطوبة وتماسك الحاجز الجلدي",
    value: "ارتفاع بنسبة 180%",
    color: "from-emerald-500 to-teal-500",
    icon: Activity
  }
];

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [currentTime, setCurrentTime] = useState(0); // 0 to 15 seconds
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const nextTime = prevTime + 0.1;
          if (nextTime >= 15) {
            setIsPlaying(false);
            setProgress(100);
            return 15;
          }
          setProgress((nextTime / 15) * 100);
          return nextTime;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Determine current active step based on current elapsed seconds
  useEffect(() => {
    if (currentTime < 4) {
      setActiveStepIdx(0);
    } else if (currentTime < 9) {
      setActiveStepIdx(1);
    } else {
      setActiveStepIdx(2);
    }
  }, [currentTime]);

  const handlePlayToggle = () => {
    if (currentTime >= 15) {
      setCurrentTime(0);
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setActiveStepIdx(0);
  };

  const ActiveIcon = steps[activeStepIdx].icon;

  return (
    <section id="video-clinical" className="py-24 bg-[#111c16] text-white relative overflow-hidden">
      {/* Background radial luxury glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
            <Activity className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span>العلم والابتكار الطبي</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            شاهد بالفيديو: كيف يقضي كريم <span className="font-serif italic text-brand-gold">سوميفون</span> على الصدفية؟
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            استعرض المحاكاة المجهرية التفاعلية بالأسفل لرؤية المفعول العلاجي للتركيبة العشبية الذكية أثناء تغلغلها العميق في خلايا الأدمة لإصلاح وتجديد الجلد المتهيج خطوة بخطوة.
          </p>
        </div>

        {/* Video Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Interactive Player Console (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-black/40 rounded-3xl p-6 md:p-8 border-2 border-emerald-900/20 shadow-premium-xl backdrop-blur-md relative overflow-hidden">
            
            {/* Ambient luxury watermark */}
            <div className="absolute top-4 left-6 text-slate-500 text-[10px] tracking-widest uppercase font-mono font-bold flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-brand-gold" />
              <span>clinical simulator v2.6</span>
            </div>

            {/* Video Main Visual Screen with animations */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0b1611] to-[#12221a] border border-[#064e3b]/30 flex items-center justify-center my-6 group shadow-inner">
              
              {/* Abstract luxury backdrop graphic representing skin layer */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              
              {/* Dynamic healing grid visualization lines when playing */}
              {isPlaying && (
                <motion.div 
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.6)] pointer-events-none z-10"
                />
              )}

              {/* Dynamic visual representation based on current playing step */}
              <div className="text-center p-6 max-w-md relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStepIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-black/60 border-2 border-brand-gold flex items-center justify-center text-brand-gold shadow-lg shadow-brand-gold/5">
                      <ActiveIcon className="w-8 h-8 animate-pulse" />
                    </div>
                    <span className="text-[10px] text-brand-gold uppercase tracking-widest font-extrabold bg-[#064e3b]/40 px-3 py-1 rounded-full border border-brand-gold/10">
                      جاري محاكاة: {steps[activeStepIdx].title}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                      {steps[activeStepIdx].metric}: <span className="text-brand-gold-light">{steps[activeStepIdx].value}</span>
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Centered Large Play Button Overlay if paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                  <button
                    onClick={handlePlayToggle}
                    className="w-20 h-20 rounded-full bg-brand-gold hover:bg-white text-brand-dark flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border-4 border-white/20"
                    aria-label="تشغيل المحاكاة"
                  >
                    <Play className="w-8 h-8 fill-brand-dark ml-1 group-hover:text-[#064e3b]" />
                  </button>
                  <span className="absolute bottom-6 text-xs text-slate-300 font-bold bg-[#064e3b]/30 px-3 py-1.5 rounded-full">
                    اضغط زر التشغيل لبدء فحص الجلد ثلاثي الأبعاد 🔬
                  </span>
                </div>
              )}
            </div>

            {/* Video Controls Panel */}
            <div className="flex flex-col gap-4 text-right">
              {/* Timeline Progress Bar */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-slate-400">0:{currentTime.toFixed(1).padStart(4, "0")}</span>
                <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-gold via-emerald-400 to-emerald-600 rounded-full transition-all duration-100 shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                    style={{ width: `${progress}%` }}
                  />
                  {/* Step markers */}
                  <div className="absolute left-[26%] top-0 w-1 h-full bg-white/20" />
                  <div className="absolute left-[60%] top-0 w-1 h-full bg-white/20" />
                </div>
                <span className="text-xs font-mono text-slate-400">0:15.0</span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePlayToggle}
                    className="bg-[#064e3b] hover:bg-brand-gold text-white hover:text-brand-dark px-5 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow transition-all cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>إيقاف مؤقت</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>{currentTime >= 15 ? "إعادة التشغيل" : "تشغيل المحاكاة"}</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="إعادة تعيين"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <div className="hidden md:flex items-center gap-2.5 text-xs text-brand-gold font-extrabold">
                  <ShieldCheck className="w-4 h-4 text-brand-gold stroke-[2.5]" />
                  <span>معتمد من المركز الألماني المتقدم لأبحاث الميكروبيوم الجلدي</span>
                </div>
              </div>
            </div>

          </div>

          {/* Educational Sidebar (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-5 text-right justify-center">
            <h3 className="text-xl font-bold text-brand-gold mb-2">مراحل شفاء الجلد التراكمي:</h3>
            
            <div className="flex flex-col gap-4">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStepIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    animate={{ 
                      scale: isActive ? 1.02 : 1,
                      backgroundColor: isActive ? "rgba(6, 78, 59, 0.25)" : "rgba(255, 255, 255, 0.02)",
                      borderColor: isActive ? "rgba(212, 175, 55, 0.3)" : "rgba(255, 255, 255, 0.05)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-5 rounded-2xl border flex items-start gap-4 transition-all shadow-sm"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? "bg-brand-gold text-brand-dark" : "bg-white/5 text-slate-400"
                    }`}>
                      <StepIcon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-extrabold text-sm ${isActive ? "text-brand-gold" : "text-white"}`}>
                          {step.title}
                        </h4>
                        {isActive && (
                          <span className="text-[10px] text-emerald-400 font-extrabold bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                            نشط الآن ⚡
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick checkout CTA under the sidebar */}
            <div className="mt-4 p-4 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-brand-gold-light font-extrabold">استعد بشرتك النقية الخالية من القشور الآن!</span>
              <button
                onClick={() => {
                  const element = document.getElementById("order-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-brand-gold hover:bg-white text-brand-dark font-black px-5 py-2.5 rounded-xl text-xs shadow hover:scale-[1.03] transition-all cursor-pointer"
              >
                شراء سريع الآن 🛒
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
