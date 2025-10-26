export default function Header({ onNav }) {
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">ا</div>
          <div>
            <p className="font-bold leading-tight">هایپر کارای ساختمانی اکبری</p>
            <p className="text-xs text-gray-500">رنگ، ابزار و کالای برق</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => onNav('paint-tools')} className="px-3 py-1.5 rounded-md hover:bg-gray-100">رنگ و ابزار</button>
          <button onClick={() => onNav('electricity')} className="px-3 py-1.5 rounded-md hover:bg-gray-100">کالای برق</button>
          <a href="#products" className="px-3 py-1.5 rounded-md hover:bg-gray-100">محصولات</a>
        </nav>

        <a href="tel:+989120000000" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md">تماس</a>
      </div>
    </header>
  )
}
