import { categories } from "../data/tools";

function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-medium transition-all duration-200 ${
              active
                ? "border-white bg-white text-black shadow-lg shadow-white/[0.08]"
                : "border-white/[0.08] bg-white/[0.025] text-white/35 hover:border-white/15 hover:bg-white/[0.05] hover:text-white/70"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;