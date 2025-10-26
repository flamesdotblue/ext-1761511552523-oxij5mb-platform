export default function ProductGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <article key={item.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold">{item.price.toLocaleString('fa-IR')} تومان</span>
              <button className="text-sm px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">افزودن به سبد</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
