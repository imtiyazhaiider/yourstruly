import ToolCard from "./ToolCard";

function ToolGrid({ tools }) {
  if (tools.length === 0) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/[0.025] px-6 py-24 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/30">
          ?
        </div>

        <p className="mt-5 text-sm text-white/45">
          Nothing matched your search.
        </p>

        <p className="mt-2 text-xs text-white/20">
          Try a different tool, category, or technology.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          featured={tool.featured}
        />
      ))}
    </div>
  );
}

export default ToolGrid;