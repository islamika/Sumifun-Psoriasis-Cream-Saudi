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
          <span className="text-xs font-extrabold text-[#064e3b] bg-[#064e3b]/5 border-2 border-[#064e3b]/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>🛒 نموذج الحجز السريع والمجاني</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#064e3b] mb-6 tracking-tight leading-tight">
            ابدأ رحلة نضارة وتعافي بشرتك: <span className="font-serif italic text-brand-gold">اطلب الآن</span>
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            توصيل مجاني وسريع لكافة مدن المملكة - الدفع نقداً أو بالبطاقة عند الاستلام بعد معاينة المنتج بنفسك والتأكد منه.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 lg:p-12 border-2 border-[#064e3b]/10 shadow-premium-2xl">
          
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
                  <h3 className="text-lg font-black text-[#064e3b] mb-2 flex items-center gap-2">
                    <span>1. اختر باقة العلاج المناسبة لك:</span>
                  </h3>

                  <div className="flex flex-col gap-4">
                    {packs.map((pack) => {
                      const isSelected = selectedPack === pack.id;
                      
                      return (
                        <div
                          key={pack.id}
                          onClick={() => setSelectedPack(pack.id)}
                          className={`rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer text-right flex flex-col gap-3 relative overflow-hidden ${
                            isSelected
                              ? "bg-white border-[#064e3b] shadow-premium-lg scale-[1.01]"
                              : "bg-slate-50/50 border-[#064e3b]/5 hover:bg-white hover:border-slate-300"
                          }`}
                        >
                          {/* Left decorative glow if selected */}
                          {isSelected && (
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#064e3b]" />
                          )}

                          {/* Selected circle */}
                          <div className={`absolute top-5 left-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? "border-[#064e3b] bg-[#064e3b]" : "border-slate-300"
                          }`}>
                            {isSelected && <div className="w-2 h-2 bg-brand-gold rounded-full" />}
                          </div>

                          {/* Pack badge */}
                          {pack.badge && (
                            <span className={`inline-block self-start text-[10px] font-black px-3.5 py-1 rounded-full ${
                              isSelected ? "bg-brand-gold/20 text-amber-900 border border-brand-gold/35" : "bg-slate-100 text-slate-500"
                            }`}>
                              {pack.badge}
                            </span>
                          )}

                          <div className="flex flex-col gap-1 pr-1">
                            <h4 className="font-black text-[#064e3b] text-sm sm:text-base leading-tight">
                              {pack.title}
                            </h4>
                            <p className="text-slate-600 text-[11px] sm:text-xs font-bold">
                              {pack.desc}
                            </p>
                          </div>

                          <div className="flex items-baseline gap-2 pt-2 border-t border-slate-50">
                            <span className="text-2xl font-black text-[#064e3b]">{pack.price} ر.س</span>
                            <span className="text-xs text-slate-400 line-through font-bold">{pack.oldPrice} ر.س</span>
                            <span className="text-xs text-emerald-800 font-black bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
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
                  <h3 className="text-lg font-black text-[#064e3b] mb-2 flex items-center gap-2">
                    <span>2. سجل بيانات التوصيل المجاني:</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1.5" htmlFor="name">
                        <User className="w-4 h-4 text-[#064e3b] stroke-[2.5]" />
                        <span>الاسم الثلاثي بالكامل *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#064e3b]">
                          <User className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="مثال: محمد بن فهد الحربي"
                          className={`w-full pr-12 pl-4 py-4 rounded-xl bg-slate-50/50 border-2 text-xs sm:text-sm font-bold focus:outline-none focus:bg-white transition-all ${
                            errors.name
                              ? "border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-[#064e3b]/10 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[11px] text-red-600 font-extrabold pr-1">⚠️ {errors.name}</span>
                      )}
                    </div>

                    {/* Phone input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1.5" htmlFor="phone">
                        <Phone className="w-4 h-4 text-[#064e3b] stroke-[2.5]" />
                        <span>رقم جوال للتواصل واستلام الشحنة *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#064e3b]">
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
                          className={`w-full pr-12 pl-4 py-4 rounded-xl bg-slate-50/50 border-2 text-xs sm:text-sm font-bold focus:outline-none focus:bg-white transition-all text-right ${
                            errors.phone
                              ? "border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-[#064e3b]/10 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-red-600 font-extrabold pr-1">⚠️ {errors.phone}</span>
                      )}
                    </div>

                    {/* City input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1.5" htmlFor="city">
                        <MapPin className="w-4 h-4 text-[#064e3b] stroke-[2.5]" />
                        <span>المدينة *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#064e3b]">
                          <MapPin className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full pr-12 pl-10 py-4 rounded-xl bg-slate-50/50 border-2 border-[#064e3b]/10 text-xs sm:text-sm font-bold focus:outline-none focus:bg-white focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10 transition-all cursor-pointer appearance-none"
                        >
                          {saudiCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#064e3b]">
                          <svg className="w-4 h-4 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Address input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-700 flex items-center gap-1.5" htmlFor="address">
                        <Home className="w-4 h-4 text-[#064e3b] stroke-[2.5]" />
                        <span>العنوان بالكامل (الحي والشارع ورقم البناية إن أمكن) *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#064e3b]">
                          <Home className="w-5 h-5 text-[#064e3b] stroke-[2.5]" />
                        </div>
                        <input
                          id="address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="مثال: حي الياسمين، شارع الملقا، فيلا رقم 4"
                          className={`w-full pr-12 pl-4 py-4 rounded-xl bg-slate-50/50 border-2 text-xs sm:text-sm font-bold focus:outline-none focus:bg-white transition-all ${
                            errors.address
                              ? "border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-[#064e3b]/10 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                          }`}
                        />
                      </div>
                      {errors.address && (
                        <span className="text-[11px] text-red-600 font-extrabold pr-1">⚠️ {errors.address}</span>
                      )}
                    </div>

                    {/* Order Total panel */}
                    <div className="bg-[#064e3b]/5 p-5 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-black text-slate-800 border-2 border-[#064e3b]/10 mt-2 shadow-sm">
                      <span className="text-[#064e3b]">المبلغ الإجمالي المستحق عند الاستلام:</span>
                      <span className="text-xl sm:text-3xl text-[#064e3b] font-black tracking-tight">{activePackObj.price} ر.س</span>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-order-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#064e3b] hover:bg-[#022c22] text-white py-4.5 rounded-2xl font-black text-base md:text-lg tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-[#064e3b]/10 hover:shadow-xl transition-all duration-300 animate-pulse-gold select-none cursor-pointer border border-[#064e3b]/20 hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>جاري تسجيل طلبك المضمون...</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5.5 h-5.5 text-brand-gold stroke-[2.5]" />
                          <span>تأكيد الحجز المجاني الآن</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust footer under form */}
                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600 font-extrabold mt-2">
                    <span className="flex items-center gap-1 text-[#064e3b]">🛡️ ضمان الخصوصية والتشفير الآمن</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#064e3b]">🇸🇦 توصيل رسمي لباب البيت</span>
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
                <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-premium">
                  <CheckCircle className="w-12 h-12 stroke-[2.5]" />
                </div>

                <div>
                  <span className="text-[10px] font-black text-[#064e3b] bg-[#064e3b]/10 px-4 py-1.5 rounded-full border-2 border-[#064e3b]/25 inline-block mb-3">
                    تم تأكيد وحجز باقتك بنجاح 🇸🇦
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#064e3b] mb-3">
                    نشكركِ على ثقتكِ الكريمة، يا {formData.name.split(" ")[0]}!
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed">
                    لقد تلقينا طلبك الخاص بـ <span className="text-[#064e3b] font-black">{activePackObj.title}</span>. يتم الآن تجهيز الشحنة الفاخرة لتوصيلها مجاناً وسريعاً إلى منزلك.
                  </p>
                </div>

                {/* Simulated Invoice Card */}
                <div className="bg-slate-50/50 rounded-3xl p-6 md:p-8 border-2 border-[#064e3b]/10 shadow-premium w-full text-right flex flex-col gap-4 text-xs sm:text-sm font-bold">
                  <div className="flex justify-between pb-3 border-b border-[#064e3b]/10">
                    <span className="text-slate-500">رقم الفاتورة والطلب:</span>
                    <span className="font-mono font-black text-[#064e3b]">{invoiceNumber}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#064e3b]/10">
                    <span className="text-slate-500">العميل المستلم:</span>
                    <span className="font-black text-slate-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#064e3b]/10">
                    <span className="text-slate-500">رقم جوال المتابعة:</span>
                    <span className="font-mono font-black text-slate-800" dir="ltr">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#064e3b]/10">
                    <span className="text-slate-500">عنوان وموقع التوصيل:</span>
                    <span className="font-black text-slate-800">{formData.city} - {formData.address}</span>
                  </div>
                  <div className="flex justify-between pt-1 text-sm sm:text-base font-black text-slate-900">
                    <span className="text-[#064e3b]">قيمة الدفع عند الاستلام:</span>
                    <span className="text-lg sm:text-xl text-[#064e3b] font-black">{activePackObj.price} ر.س</span>
                  </div>
                </div>

                <div className="bg-[#064e3b]/5 border-2 border-[#064e3b]/15 p-5 rounded-2xl w-full text-right flex items-start gap-3">
                  <span className="text-lg">📞</span>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed">
                    <span className="font-black text-[#064e3b] block mb-1">تنويه هام للشحن السريع بالمملكة:</span>
                    سيتصل بك مندوب التوصيل وتأكيد الشحنات لدينا هاتفياً خلال ساعتين لتنسيق موعد خروج الشحنة لباب منزلك. يرجى إبقاء هاتفك متاحاً للرد لضمان التوصيل السريع خلال 24 ساعة.
                  </p>
                </div>

                <button
                  onClick={() => setOrderSuccess(false)}
                  className="mt-4 text-xs text-slate-400 font-bold hover:text-[#064e3b] transition-colors underline cursor-pointer"
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
