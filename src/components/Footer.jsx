export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <p className="font-bold mb-2">هایپر کارای ساختمانی اکبری</p>
          <p className="text-sm text-gray-300">هر آنچه برای ساخت و نوسازی نیاز دارید در یک جا</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold mb-2">دسته‌بندی‌ها</p>
          <ul className="space-y-1 text-gray-300">
            <li>رنگ و ابزار</li>
            <li>کالای برق</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold mb-2">راه‌های ارتباطی</p>
          <ul className="space-y-1 text-gray-300">
            <li>تلفن: 0912 000 0000</li>
            <li>آدرس: تهران، خیابان نمونه، پلاک 12</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-xs text-gray-400">© {new Date().getFullYear()} تمامی حقوق محفوظ است.</div>
    </footer>
  )
}
