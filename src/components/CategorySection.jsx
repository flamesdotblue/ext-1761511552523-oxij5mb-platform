import { ShoppingCart } from 'lucide-react';

export default function CategorySection({ id, title, subtitle, Icon, products = [] }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-start justify-between gap-6 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-3">
              {Icon ? (
                <span className="inline-flex items-center justify-center size-10 rounded-xl bg-amber-100 text-amber-700">
                  <Icon size={22} />
                </span>
              ) : null}
              <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
            </div>
            <p className="mt-2 text-neutral-600 max-w-2xl">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <article key={i} className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold leading-snug">{p.name}</h3>
                <div className="mt-1 text-amber-700 font-semibold">{p.price}</div>
                {Array.isArray(p.tags) && p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm font-medium">
                    <ShoppingCart size={16} />
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
