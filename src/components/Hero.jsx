export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.15]">
              هرآنچه برای&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-amber-600 to-rose-600">ساخت و نوسازی</span>
              &nbsp;نیاز دارید، یک‌جا
            </h1>
            <p className="mt-4 text-neutral-600 md:text-lg">
              از رنگ و ابزار نقاشی تا تجهیزات برق خانگی؛ با تضمین کیفیت و مشاوره تخصصی.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => go('paint-tools')} className="px-4 py-2.5 rounded-md bg-amber-600 text-white hover:bg-amber-700 text-sm font-semibold">
                مشاهده رنگ و ابزار
              </button>
              <button onClick={() => go('electrical')} className="px-4 py-2.5 rounded-md border border-neutral-300 hover:border-neutral-400 text-sm font-semibold">
                مشاهده کالای برق
              </button>
            </div>
            <ul className="mt-6 text-xs text-neutral-500 space-y-1 list-disc pr-5">
              <li>ارسال سریع درون‌شهری</li>
              <li>قیمت به‌روز و رقابتی</li>
              <li>گارانتی اصالت کالا</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                alt="ابزار و مصالح ساختمانی"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden md:block w-40 h-40 bg-amber-200/50 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
