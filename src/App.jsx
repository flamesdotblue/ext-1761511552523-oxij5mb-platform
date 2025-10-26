import { useState } from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  const [active, setActive] = useState('paint-tools')

  const filtered = products.filter(p =>
    active === 'paint-tools' ? p.category === 'رنگ و ابزار' : p.category === 'کالای برق'
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header onNav={(key)=> setActive(key)} />

      <main className="flex-1">
        <section className="bg-gradient-to-l from-indigo-700 to-sky-600 text-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">هایپر کارای ساختمانی اکبری</h1>
            <p className="text-white/90 mb-6">فروش تخصصی رنگ، ابزار و کالای برق با ارسال سریع و قیمت مناسب</p>
            <div className="flex flex-wrap gap-3">
              <a href="#products" className="bg-white text-indigo-700 hover:bg-white/90 font-semibold px-4 py-2 rounded-md transition">مشاهده محصولات</a>
              <a href="tel:+989120000000" className="border border-white/70 hover:bg-white/10 px-4 py-2 rounded-md">تماس: 0912 000 0000</a>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 -mt-8">
          <div className="bg-white rounded-xl shadow p-2">
            <CategoryTabs active={active} onChange={setActive} />
          </div>
        </section>

        <section id="products" className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-6">نمونه محصولات {active === 'paint-tools' ? 'رنگ و ابزار' : 'کالای برق'}</h2>
          <ProductGrid items={filtered} />
        </section>

        <section className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
            <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop" alt="فروشگاه ابزار و رنگ" className="rounded-lg shadow" />
            <div>
              <h3 className="text-lg font-bold mb-3">چرا اکبری؟</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• تنوع گسترده محصولات معتبر</li>
                <li>• ضمانت اصالت و کیفیت</li>
                <li>• مشاوره تخصصی خرید</li>
                <li>• ارسال سریع به سراسر کشور</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
