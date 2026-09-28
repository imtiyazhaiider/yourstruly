import { ArrowUpRight, Github } from "lucide-react";

function ToolCard({ tool, featured = false }) {
  const Icon = tool.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.18] hover:bg-white/[0.045] ${
        featured ? "sm:p-7" : ""
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.025] blur-3xl transition-all duration-500 group-hover:bg-white/[0.07]" />

      {/* Top line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/65 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.08] group-hover:text-white ${
            featured ? "h-14 w-14" : "h-12 w-12"
          }`}
        >
          <Icon size={featured ? 21 : 19} strokeWidth={1.7} />
        </div>

        <div className="flex items-center gap-2">
          {tool.featured && (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-white/40">
              Featured
            </span>
          )}

          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            {tool.status}
          </span>
        </div>
      </div>

      <div className="relative mt-7">
        <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/20">
          {tool.category}
        </p>

        <h3
          className={`font-medium tracking-[-0.025em] text-white ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {tool.name}
        </h3>

        <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-white/35">
          {tool.description}
        </p>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {tool.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[9px] text-white/25 transition-colors group-hover:text-white/35"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex items-center gap-2 pt-7">
        {tool.url && tool.url !== "#" ? (
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium text-black transition-all duration-300 hover:bg-white/90"
          >
            Open tool

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </a>
        ) : (
          <button
            disabled
            className="flex flex-1 cursor-not-allowed items-center justify-center rounded-xl bg-white/[0.07] px-4 py-3 text-xs font-medium text-white/20"
          >
            Coming soon
          </button>
        )}

        {tool.github && tool.github !== "#" && (
          <a
            href={tool.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${tool.name} GitHub`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-white/30 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <Github size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

export default ToolCard;