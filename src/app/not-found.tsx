import Link from "next/link";
import Crane from "@/app/Crane";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full">
        <div className="bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl rounded-2xl p-8 sm:p-10 text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-[#E6F8FF] flex items-center justify-center shadow-inner">
            <Crane className="w-12 h-12" fill="#0a2b86cc" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">אופס! הדף לא נמצא</h1>
          <p className="text-gray-600 mb-8">
            ייתכן שהכתובת שגויה או שהדף הועבר למקום אחר.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              חזרה לדף הבית
            </Link>
            <a
              href="tel:0505477789"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              צרו קשר: 050-5477789
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">קוד שגיאה: 404</p>
        </div>
      </div>
    </main>
  );
}
