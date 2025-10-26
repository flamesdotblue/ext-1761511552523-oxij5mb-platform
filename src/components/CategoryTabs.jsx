const tabs = [
  { key: 'paint-tools', label: 'رنگ و ابزار' },
  { key: 'electricity', label: 'کالای برق' },
]

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="flex gap-2" role="tablist" aria-label="دسته‌بندی محصولات">
      {tabs.map(t => (
        <button
          key={t.key}
          role="tab"
          aria-selected={active === t.key}
          onClick={() => onChange(t.key)}
          className={`flex-1 md:flex-none px-4 py-2 rounded-lg border transition text-sm ${
            active === t.key ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white hover:bg-gray-50'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
