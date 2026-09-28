import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import SearchBar from "./SearchBar";

function Hero({ search, setSearch }) {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute left-1/2 top-[-180px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[120px]" />

        <div className="animate-float absolute left-[8%] top-[38%] h-32 w-32 rounded-full bg-indigo-500/[0.025] blur-[80px]" />

        <div className="absolute right-[5%] top-[28%] h-40 w-40 rounded-full bg-purple-500/[0.02] blur-[90px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] text-white/50 shadow-lg shadow-black/10 backdrop-blur-xl">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>

          <span>Tools built with purpose</span>

          <Sparkles size={12} className="text-white/30" />
        </div>

        <h1 className="mx-auto max-w-5xl text-[clamp(3.6rem,9vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
          Useful things.
          <br />

          <span className="bg-gradient-to-b from-white/70 to-white/20 bg-clip-text text-transparent">
            Made for everyone.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
          A growing collection of simple tools, experiments, and ideas built
          to solve real problems and make everyday life a little easier.
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#tools"
            className="group flex items-center gap-2 text-xs text-white/45 transition hover:text-white"
          >
            Explore the collection

            <ArrowDown
              size={13}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>

          <span className="hidden text-white/10 sm:block">•</span>

          <a
            href="#about"
            className="group flex items-center gap-1 text-xs text-white/25 transition hover:text-white/60"
          >
            Why Yours Truly?

            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;