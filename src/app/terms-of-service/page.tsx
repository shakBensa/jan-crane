"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, FileText, Home } from "lucide-react";

export const dynamic = "force-static";

export default function TermsOfService() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] opacity-95" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


          {/* Title */}
          <div className="text-center text-white">
            <div className="mx-auto mb-4 w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              תקנון שירות – ג’אן הרמות ומנופים
            </h1>
            <p className="mt-3 text-blue-100 text-base sm:text-lg">
              תנאי שימוש והתקשרות לשירותי הרמה והנפה
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
        <article className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 leading-relaxed text-gray-800">
          {/* 1 */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">1. כללי</h2>
          <ol className="list-decimal pr-5 space-y-1">
            <li>תקנון זה נועד להסדיר את תנאי מתן השירות על ידי ג’אן הרמות ומנופים.</li>
            <li>קבלת שירות מהחברה מהווה הסכמה מלאה לתנאי התקנון.</li>
            <li>נוסח התקנון מנוסח בלשון זכר מטעמי נוחות בלבד, אך מתייחס לכלל המינים.</li>
          </ol>

          {/* 2 */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-3">2. הזמנות ותשלומים</h2>
          <ol className="list-decimal pr-5 space-y-1">
            <li>הזמנה תיחשב סופית רק לאחר תיאום טלפוני ואישור מטעם החברה.</li>
            <li>החברה רשאית לבקש מקדמה טרם ביצוע העבודה.</li>
            <li>יתרת התשלום תשולם במעמד סיום העבודה, אלא אם הוסכם אחרת מראש ובכתב.</li>
            <li>אי־תשלום במועד יגרור חיוב בריבית והצמדה כחוק.</li>
            <li>ביטול עבודה פחות מ־24 שעות לפני המועד שנקבע יחויב בדמי ביטול (30% מסכום העסקה או 500 ₪ – הגבוה מביניהם).</li>
          </ol>

          {/* 3 */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-3">3. אחריות ובטיחות</h2>
          <ol className="list-decimal pr-5 space-y-1">
            <li>החברה מתחייבת לספק שירות מקצועי ובטיחותי בהתאם לסטנדרטים המקובלים.</li>
            <li>האחריות של החברה חלה על פעולת ההרמה וההנפה בלבד, ובמהלך העבודה עצמה.</li>
            <li>אם השירות ניתן באמצעות מנוף/מפעיל שאינו שייך ישירות לחברה – האחריות המלאה לנזק תחול על המפעיל שסיפק את השירות בפועל.</li>
            <li>מרגע שהפריט מורם ומונח במקום היעד (למשל במרפסת/חלון), האחריות עוברת ללקוח. אין אחריות לנזק כתוצאה ממשיכת הפריט פנימה או מטיפול לא תקין לאחר ההרמה.</li>
            <li>בעת הורדת פריטים/מסוע מהגובה – האחריות חלה על מי שנמצא בחלק העליון ומכין את הפריט להנפה; המפעיל אחראי על ההרמה והשליטה במנוף מלמטה.</li>
            <li>החברה אינה אחראית לנזק עקב תנאי שטח לא מתאימים, חוסר גישה, חפצים רופפים או אי־פינוי מוקדם של האזור.</li>
          </ol>

          {/* 4 */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-3">4. אחריות הלקוח</h2>
          <ol className="list-decimal pr-5 space-y-1">
            <li>הלקוח מתחייב למסור מידע מדויק על מיקום, גובה ותנאי השטח.</li>
            <li>הלקוח אחראי להכין שטח פנוי, נגיש ובטיחותי לביצוע העבודה.</li>
            <li>הלקוח מתחייב לדאוג שהפריטים המונפים יהיו מוכנים להרמה באופן בטוח.</li>
          </ol>

          {/* 5 */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-3">5. סודיות ופרטיות</h2>
          <ol className="list-decimal pr-5 space-y-1">
            <li>החברה מתחייבת לשמור בסודיות כל מידע אישי או עסקי שנמסר לה, ולא להעבירו לצד ג’ אלא אם נדרש על פי דין.</li>
          </ol>

          {/* 6 */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-3">6. סמכות שיפוט</h2>
          <ol className="list-decimal pr-5 space-y-1">
            <li>בכל מחלוקת שתתגלע בין הצדדים, סמכות השיפוט הבלעדית תהיה לבית המשפט המוסמך בעיר אשדוד.</li>
          </ol>

          {/* Bottom controls */}
          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00AFFE] text-white px-5 py-3 font-medium hover:opacity-90 transition"
            >
              <ArrowRight className="w-5 h-5" />
              חזרה
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#011659] text-[#011659] px-5 py-3 font-medium hover:bg-[#011659] hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
              לדף הבית
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
