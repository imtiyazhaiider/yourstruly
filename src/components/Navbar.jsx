import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/[0.09] bg-black/60 px-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white text-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
              <Sparkles size={17} strokeWidth={2.5} />

              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/[0.03] to-black/10" />
            </div>

            <div>
              <div className="text-sm font-semibold tracking-tight text-white">
                Yours Truly
              </div>

              <div className="text-[10px] text-white/35">
                useful things, made for everyone
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-xs text-white/40 sm:flex">
            <a
              href="#tools"
              className="transition-colors hover:text-white"
            >
              Tools
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-white"
            >
              About
            </a>
          </div>

          <a
            href="#tools"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <Heart size={12} />

            <span className="hidden sm:block">Explore</span>

            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;