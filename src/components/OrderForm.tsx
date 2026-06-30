/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ShoppingCart, ShieldCheck, Truck, Coins, Star, HelpCircle, CheckCircle, User, Phone, MapPin, Home } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { saudiCities } from "../data";

interface OrderPack {
  id: string;
  title: string;
  badge?: string;
  price: number;
  oldPrice: number;
  qty: number;
  desc: string;
}

export default function OrderForm() {
  const packs: OrderPack[] = [
    {
      id: "pack1",
      title: "عبوة واحدة للتجربة والتعافي الخفيف",
      badge: "خصم 33% اليوم",
      price: 199,
      oldPrice: 299,
      qty: 1,
      desc: "تكفي لعلاج صدفية المناطق الصغيرة وتخفيف الحكة الفورية."
    },
    {
      id: "pack2",
      title: "عبوتان + واحدة مجاناً (3 عبوات إجمالاً)",
      badge: "الأكثر طلباً بالمملكة • ينصح به الأطباء",
      price: 349, // Ultra value pack
      oldPrice: 597,
      qty: 3,
      desc: "كافية للقضاء التام على القشور والصدفية المزمنة ومنع عودتها."
    },
    {
      id: "pack3",
      title: "3 عبوات + عبوتان مجاناً (5 عبوات إجمالاً)",
      badge: "عرض العائلة والتوفير الخارق",
      price: 499,
      oldPrice: 995,
      qty: 5,
      desc: "مثالي للصدفية الشديدة المنتشرة في الجسم أو كحصة علاج عائلية موفرة."
    }
  ];

  const [selectedPack, setSelectedPack] = useState<string>("pack2");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "الرياض",
    address: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const activePackObj = packs.find((p) => p.id === selectedPack) || packs[1];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "يرجى إدخال اسمك الكريم لتسجيل الشحنة.";
    } else if (formData.name.trim().length < 4) {
      newErrors.name = "يرجى كتابة اسمك الثلاثي لضمان دقة التوصيل.";
    }

    const saudiPhoneRegex = /^(05|5)([0-9]{8})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الجوال مطلوب للاتصال بك وتنسيق موعد التوصيل.";
    } else if (!saudiPhoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "يرجى كتابة رقم جوال سعودي صحيح (مثال: 05XXXXXXXX).";
    }

    if (!formData.address.trim()) {
      newErrors.address = "يرجى إدخال الحي أو اسم الشارع ليتسنى للمندوب الوصول إليك.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API endpoint and DB persistence
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSuccess(true);
      const randInv = "SMF-" + Math.floor(100000 + Math.random() * 900000);
      setInvoiceNumber(randInv);
    }, 1500);
  };

  return (
    <section id="order-form" className="py-20 bg-[#fdfdfb] relative overflow-hidden border-t border-emerald-900/5">
      {/* Dynamic Background Mesh */}
      <div className="absolute top-[-20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-emerald-700/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#064e3b] bg-[#064e3b]/10 border border-[#064e3b]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            🛒 نموذج الطلب السريع والدفع نقداً عند الاستلام
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark mb-6 tracking-tight leading-tight">
            سجل بياناتك الآن لتبدأ رحلة <span className="font-serif italic text-brand-gold">التعافي الفوري!</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            لا داعي للدفع المسبق ببطاقة الائتمان. املأ استمارة الشحن أدناه، وسيتواصل معك مندوبنا هاتفياً لتأكيد الشحنة وتوصيلها مجاناً إلى باب منزلك في أي مدينة بالمملكة.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-10 lg:p-12 border-2 border-[#064e3b]/15 shadow-premium-xl">
          
          <AnimatePresence mode="wait">
            {!orderSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              >
                {/* Pack Selector (Right Column) */}
                <div className="lg:col-span-7 text-right flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                    <span>1. اختر العرض المناسب لحالتك:</span>
                  </h3>

                  <div className="flex flex-col gap-4">
                    {packs.map((pack) => {
                      const isSelected = selectedPack === pack.id;
                      
                      return (
                        <div
                          key={pack.id}
                          onClick={() => setSelectedPack(pack.id)}
                          className={`rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer text-right flex flex-col gap-3 relative ${
                            isSelected
                              ? "bg-white border-brand-emerald shadow-premium-lg scale-[1.01]"
                              : "bg-white/60 border-emerald-900/10 hover:bg-white hover:border-slate-300"
                          }`}
                        >
                          {/* Selected circle */}
                          <div className={`absolute top-5 left-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? "border-brand-emerald bg-brand-emerald" : "border-slate-300"
                          }`}>
                            {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>

                          {/* Pack badge */}
                          {pack.badge && (
                            <span className={`inline-block self-start text-[10px] font-bold px-3 py-1 rounded-full ${
                              isSelected ? "bg-[#064e3b]/10 text-[#064e3b]" : "bg-slate-100 text-slate-500"
                            }`}>
                              {pack.badge}
                            </span>
                          )}

                          <div className="flex flex-col gap-1 pr-1">
                            <h4 className="font-bold text-brand-dark text-sm sm:text-base leading-tight">
                              {pack.title}
                            </h4>
                            <p className="text-slate-500 text-[11px] sm:text-xs">
                              {pack.desc}
                            </p>
                          </div>

                          <div className="flex items-baseline gap-2 pt-2 border-t border-slate-50">
                            <span className="text-2xl font-black text-brand-dark">{pack.price} ر.س</span>
                            <span className="text-xs text-slate-400 line-through">{pack.oldPrice} ر.س</span>
                            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                              وفر {pack.oldPrice - pack.price} ر.س
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Form Input Fields (Left Column) */}
                <div className="lg:col-span-5 text-right flex flex-col gap-6">
                  <h3 className="text-xl font-extrabold text-brand-dark mb-2 flex items-center gap-2">
                    <span>2. سجل بيانات الشحن والتوصيل:</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5" htmlFor="name">
                        <User className="w-4 h-4 text-[#064e3b]" />
                        <span>الاسم الثلاثي بالكامل *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                          <User className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="مثال: محمد بن فهد الحربي"
                          className={`w-full pr-12 pl-4 py-4 rounded-xl bg-white border-2 text-xs sm:text-sm font-bold focus:outline-none transition-all ${
                            errors.name
                              ? "border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-[#064e3b]/15 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[11px] text-red-600 font-extrabold pr-1">⚠️ {errors.name}</span>
                      )}
                    </div>

                    {/* Phone input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5" htmlFor="phone">
                        <Phone className="w-4 h-4 text-[#064e3b]" />
                        <span>رقم جوال للتواصل واستلام الشحنة *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="مثال: 0501234567"
                          dir="ltr"
                          className={`w-full pr-12 pl-4 py-4 rounded-xl bg-white border-2 text-xs sm:text-sm font-bold focus:outline-none transition-all text-right ${
                            errors.phone
                              ? "border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-[#064e3b]/15 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-red-600 font-extrabold pr-1">⚠️ {errors.phone}</span>
                      )}
                    </div>

                    {/* City input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5" htmlFor="city">
                        <MapPin className="w-4 h-4 text-[#064e3b]" />
                        <span>المدينة *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full pr-12 pl-10 py-4 rounded-xl bg-white border-2 border-[#064e3b]/15 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10 transition-all cursor-pointer appearance-none"
                        >
                          {saudiCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Address input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5" htmlFor="address">
                        <Home className="w-4 h-4 text-[#064e3b]" />
                        <span>العنوان بالكامل (الحي والشارع ورقم البناية إن أمكن) *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                          <Home className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <input
                          id="address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="مثال: حي الياسمين، شارع الملقا، فيلا رقم 4"
                          className={`w-full pr-12 pl-4 py-4 rounded-xl bg-white border-2 text-xs sm:text-sm font-bold focus:outline-none transition-all ${
                            errors.address
                              ? "border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-[#064e3b]/15 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                          }`}
                        />
                      </div>
                      {errors.address && (
                        <span className="text-[11px] text-red-600 font-extrabold pr-1">⚠️ {errors.address}</span>
                      )}
                    </div>

                    {/* Order Total panel */}
                    <div className="bg-[#064e3b]/5 p-5 rounded-xl flex items-center justify-between text-xs sm:text-sm font-extrabold text-slate-800 border-2 border-[#064e3b]/10 mt-2">
                      <span className="text-slate-700">إجمالي القيمة للدفع عند الاستلام:</span>
                      <span className="text-xl sm:text-2xl text-brand-dark font-black tracking-tight">{activePackObj.price} ر.س</span>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-order-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#064e3b] hover:bg-[#022c22] text-white py-4.5 rounded-xl font-extrabold text-base md:text-lg tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl transition-all duration-300 animate-pulse-gold select-none cursor-pointer border border-[#064e3b]/20"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>جاري تسجيل طلبك بالمملكة...</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5.5 h-5.5 text-brand-gold stroke-[2.5]" />
                          <span>تأكيد الطلب الآن بالدفع عند الاستلام</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust footer under form */}
                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600 font-extrabold mt-2">
                    <span className="flex items-center gap-1 text-[#064e3b]">🛡️ تشفير آمن لبياناتك</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#064e3b]">🇸🇦 شحن مجاني لكافة المدن</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4 flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto"
              >
                {/* Order Success Screen */}
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-brand-emerald shadow-inner border border-emerald-100">
                  <CheckCircle className="w-12 h-12" />
                </div>

                <div>
                  <span className="text-[10px] font-bold text-[#064e3b] bg-[#064e3b]/10 px-3.5 py-1 rounded-full border border-[#064e3b]/20 inline-block mb-3">
                    تم تأكيد وإرسال الشحنة بنجاح 🇸🇦
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-brand-dark mb-3">
                    نشكرك على ثقتك، يا {formData.name.split(" ")[0]}!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    لقد قمنا باستلام طلبك الخاص بـ <span className="text-brand-dark font-extrabold">{activePackObj.title}</span> بنجاح. سنبدأ فوراً في إعداد طلبك للشحن المجاني السريع.
                  </p>
                </div>

                {/* Simulated Invoice Card */}
                <div className="bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-md w-full text-right flex flex-col gap-4 text-xs sm:text-sm">
                  <div className="flex justify-between pb-3 border-b border-slate-50">
                    <span className="text-slate-500 font-bold">رقم الفاتورة والطلب:</span>
                    <span className="font-mono font-black text-brand-dark">{invoiceNumber}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-50">
                    <span className="text-slate-500 font-bold">العميل المستلم:</span>
                    <span className="font-extrabold text-slate-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-50">
                    <span className="text-slate-500 font-bold">رقم جوال المتابعة:</span>
                    <span className="font-mono font-extrabold text-slate-800" dir="ltr">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-50">
                    <span className="text-slate-500 font-bold">عنوان وموقع التوصيل:</span>
                    <span className="font-extrabold text-slate-800">{formData.city} - {formData.address}</span>
                  </div>
                  <div className="flex justify-between pt-1 text-sm font-black text-slate-900">
                    <span>قيمة الدفع عند الاستلام:</span>
                    <span className="text-base text-[#064e3b] font-bold">{activePackObj.price} ر.س</span>
                  </div>
                </div>

                <div className="bg-brand-light border border-brand-emerald/10 p-5 rounded-2xl w-full text-right flex items-start gap-3">
                  <span className="text-base">📞</span>
                  <p className="text-xs text-brand-dark leading-relaxed">
                    <span className="font-extrabold block mb-1">تنويه هام للشحن السريع:</span>
                    سيتصل بك مندوب التوصيل وتأكيد الشحنات لدينا هاتفياً خلال ساعتين لتنسيق موعد خروج الشحنة لباب منزلك. يرجى إبقاء هاتفك متاحاً للرد لضمان التوصيل السريع خلال 24 ساعة.
                  </p>
                </div>

                <button
                  onClick={() => setOrderSuccess(false)}
                  className="mt-4 text-xs text-slate-500 font-bold hover:text-brand-dark underline cursor-pointer"
                >
                  العودة لتعديل الطلب أو تغيير العرض
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
