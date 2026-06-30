/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ShieldCheck, Mail, Phone, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  // Define legal texts to avoid lorem ipsum and look highly professional
  const modalContent: Record<string, { title: string; text: string }> = {
    privacy: {
      title: "سياسة الخصوصية وسرية البيانات",
      text: "خصوصية زوارنا وعملائنا الكرام في المملكة العربية السعودية هي أهمية قصوى بالنسبة لنا. نحن ملتزمون التزاماً تاماً بحماية وسرية بياناتك الشخصية (الاسم، رقم الهاتف، والمدينة والعنوان الكامل) التي تقدمها عبر نموذج الطلب السريع. نستخدم هذه البيانات حصرياً لتجهيز شحنتك، والتنسيق معك هاتفياً عبر مناديب الشحن والتوصيل الخاصين بنا لضمان وصول كريم سوميفون الأصلي إليك. نحن لا نقوم ببيع، أو تأجير، أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة أو جهات إعلانية خارجية إطلاقاً. يتم تخزين وتشفير كافة المدخلات في خوادم آمنة لضمان أقصى مستويات الأمان والخصوصية لك."
    },
    shipping: {
      title: "سياسة الشحن والتوصيل السريع",
      text: "نحن نفخر بتقديم خدمة شحن مجانية بالكامل وسريعة 100% لجميع عملائنا الكرام في كافة مناطق ومدن المملكة العربية السعودية (الرياض، جدة، الدمام، مكة، المدينة، عسير، تبوك، القصيم، جازان، نجران...). بمجرد ملء نموذج الطلب وتأكيده هاتفياً مع فريق المتابعة، يتم تسليم شحنتك فوراً لأفضل مناديب الشحن والتوصيل الداخلي السريع لدينا. يستغرق التوصيل العادي من 24 إلى 48 ساعة كحد أقصى لتصل الشحنة مباشرةً لقبل باب بيتك. سيتصل بك المندوب مسبقاً في يوم التوصيل لتنسيق التوقيت واللحظة الأنسب لاستلام طلبك وتفحصه بنفسك."
    },
    refund: {
      title: "سياسة الاسترجاع والاستبدال الذهبية",
      text: "ثقتنا بتركيبة وفاعلية كريم سوميفون الأصلي مطلقة وبلا حدود. لذلك نوفر لعملائنا في السعودية 'الضمان الذهبي للاسترداد' لمدة 14 يوماً من تاريخ استلام الشحنة. إذا قمت باستخدام الكريم بانتظام وبحسب الدليل المرفق مرتين يومياً لمدة 14 يوماً متواصلة ولم تلاحظ أي تحسن أو تراجع ملموس في القشور والحكة في البقع المصابة بالصدفية، يحق لك التواصل مباشرة مع خدمة العملاء لدينا عبر الواتساب وطلب استرجاع القيمة المدفوعة. سنقوم بإرجاع أموالك بالكامل فوراً ودون أي تعقيدات أو أسئلة مجحفة، لأن أمانتك ورضاك هي رأس مالنا الحقيقي."
    },
    terms: {
      title: "الشروط والأحكام العامة للاستخدام",
      text: "باستخدامك وتصفحك لهذا المتجر وشراء كريم سوميفون الأصلي، فإنك توافق بالكامل على الشروط والأحكام التالية: أولاً، هذا الموقع مخصص لتقديم وبيع الكريم الطبيعي لعلاج أعراض الصدفية والأكزيما في المملكة العربية السعودية. ثانياً، الأسعار المعلنة (199 ريال للعلبة) هي الأسعار الرسمية والوحيدة، وهي تشمل الشحن المجاني والتوصيل والدفع عند الاستلام. ثالثاً، يلتزم العميل بتقديم بيانات دقيقة وصحيحة (الاسم الثلاثي، رقم الجوال الفعال، الحي والعنوان) لضمان دقة وسرعة الشحن. رابعاً، المكونات عشبية طبيعية وآمنة، لكن يُنصح بتجربتها على رقعة صغيرة قبل الاستخدام الشامل لمستبعدي التحسس العشبي."
    }
  };

  return (
    <footer className="bg-brand-deep text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden">
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-right mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center font-bold text-lg">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
                  سوميفون <span className="text-brand-gold font-semibold text-xs">الأصلي</span>
                </h3>
                <p className="text-[10px] text-slate-400 font-mono tracking-widest">
                  SUMIFUN KSA PSORIASIS
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-2">
              الوجهة الفاخرة والموزع الحصري لكريم سوميفون الأصلي المطور لعلاج الصدفية والأكزيما في المملكة العربية السعودية. جودة فاخرة، وتركيبات عشبية طبيعية 100% بدون كورتيزون لضمان تعافي بشرتك وسلامتها.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full border border-brand-gold/20 mt-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>موزع معتمد ومصرح بالمملكة العربية السعودية 🇸🇦</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-white font-extrabold text-sm border-b border-brand-gold pb-1">السياسات القانونية</h4>
            <div className="flex flex-col items-start gap-2.5 text-xs text-slate-400">
              <button
                onClick={() => openModal("privacy")}
                className="hover:text-brand-gold transition-colors text-right cursor-pointer"
              >
                سياسة الخصوصية
              </button>
              <button
                onClick={() => openModal("shipping")}
                className="hover:text-brand-gold transition-colors text-right cursor-pointer"
              >
                سياسة الشحن والتوصيل
              </button>
              <button
                onClick={() => openModal("refund")}
                className="hover:text-brand-gold transition-colors text-right cursor-pointer"
              >
                سياسة الاسترجاع والضمان
              </button>
              <button
                onClick={() => openModal("terms")}
                className="hover:text-brand-gold transition-colors text-right cursor-pointer"
              >
                الشروط والأحكام العامة
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-white font-extrabold text-sm border-b border-brand-gold pb-1">اتصل بنا ومبيعاتنا</h4>
            <div className="flex flex-col items-start gap-3.5 text-xs text-slate-400">
              <a
                href="tel:+966500000000"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-right"
              >
                <Phone className="w-4 h-4 text-brand-emerald" />
                <span dir="ltr">+966 50 000 0000</span>
              </a>
              <div className="flex items-center gap-2.5 text-right">
                <Mail className="w-4 h-4 text-brand-emerald" />
                <span>support@sumifun-saudi.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-right">
                <MapPin className="w-4 h-4 text-brand-emerald" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright info */}
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-[10px] md:text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="leading-relaxed text-right max-w-2xl">
            إخلاء المسؤولية: كريم سوميفون هو مستحضر عشبي طبيعي خارجي مخصص للعناية المكثفة بالجلد وتلطيف بقع الصدفية والأكزيما الجافة وقشورها. النتائج الفردية قد تختلف من شخص لآخر حسب طبيعة البشرة والاستجابة الفردية ومدى الالتزام بتعليمات الاستخدام المرفقة.
          </p>
          <p className="font-medium shrink-0">
            &copy; 2026 سوميفون السعودية. جميع الحقوق محفوظة لعملائنا الكرام.
          </p>
        </div>
      </div>

      {/* Reusable Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-[2rem] w-full max-w-xl p-8 text-right relative border border-slate-100 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 left-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-extrabold text-brand-dark mb-4 border-b border-slate-100 pb-3">
                {modalContent[activeModal]?.title}
              </h3>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                {modalContent[activeModal]?.text}
              </p>

              <button
                onClick={closeModal}
                className="mt-6 w-full bg-brand-dark hover:bg-brand-emerald text-white font-extrabold py-3 rounded-xl transition-colors cursor-pointer text-xs md:text-sm"
              >
                أغلقت، فهمت الشروط
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}
