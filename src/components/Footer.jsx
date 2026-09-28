import { ArrowUp, Heart, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-white/[0.06] px-5 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
                <Sparkles size={13} />
              </div>

              Yours Truly
            </div>

            <p className="mt-3 max-w-xs text-xs leading-5 text-white/25">
              A small collection of useful things built to help people do
              something a little easier.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <a
              href="#"
              className="group flex items-center gap-2 text-xs text-white/25 transition hover:text-white"
            >
              Back to top

              <ArrowUp
                size={13}
                className="transition-transform group-hover:-translate-y-1"
              />
            </a>

            <div className="flex items-center gap-2 text-[10px] text-white/20">
              Made with
              <Heart size={11} className="fill-current" />
              for people who need it.
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.05] pt-5 text-[10px] text-white/15">
          © {new Date().getFullYear()} Yours Truly
        </div>
      </div>
    </footer>
  );
}

export default Footer;