import { Search, SlidersHorizontal, X } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="group relative flex items-center rounded-2xl border border-white/10 bg-white/[0.045] p-1.5 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-300 focus-within:border-white/20 focus-within:bg-white/[0.065] focus-within:shadow-white/[0.03]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white/25 transition-colors group-focus-within:text-white/60">
        <Search size={19} strokeWidth={1.8} />
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tools, categories, technologies..."
        className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20 sm:text-[15px]"
      />

      {search ? (
        <button
          onClick={() => setSearch("")}
          className="mr-2 flex h-9 w-9 items-center justify-center rounded-lg text-white/30 transition hover:bg-white/10 hover:text-white"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      ) : (
        <div className="mr-2 hidden h-9 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 text-[10px] text-white/20 sm:flex">
          <SlidersHorizontal size={12} />
          Search
        </div>
      )}
    </div>
  );
}

export default SearchBar;