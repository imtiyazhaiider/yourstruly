import { useMemo, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ToolGrid from "../components/ToolGrid";
import ToolCard from "../components/ToolCard";
import Footer from "../components/Footer";

import { tools } from "../data/tools";

function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" ||
        tool.category === activeCategory;

      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        !searchTerm ||
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm) ||
        tool.technologies.some((technology) =>
          technology.toLowerCase().includes(searchTerm)
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const featuredTools = tools.filter((tool) => tool.featured);

  const showFeatured =
    !search.trim() && activeCategory === "All";

  return (
    <div className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <Navbar />

      <main>
        <Hero
          search={search}
          setSearch={setSearch}
        />

        {showFeatured && (
          <section className="px-5 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-7 flex items-end justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                    <Sparkles size={12} />
                    Start here
                  </div>

                  <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                    Featured tools
                  </h2>

                  <p className="mt-2 max-w-lg text-xs leading-6 text-white/30">
                    A few things we've built that might be useful to you.
                  </p>
                </div>

                <a
                  href="#tools"
                  className="group hidden items-center gap-2 text-xs text-white/30 transition hover:text-white sm:flex"
                >
                  View all
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {featuredTools.slice(0, 4).map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    featured
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          id="tools"
          className="scroll-mt-24 border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                  The collection
                </p>

                <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                  Explore everything
                </h2>
              </div>

              <div className="text-xs text-white/25">
                {filteredTools.length}{" "}
                {filteredTools.length === 1 ? "tool" : "tools"}
              </div>
            </div>

            <div className="mb-8">
              <CategoryFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>

            <ToolGrid tools={filteredTools} />
          </div>
        </section>

        <section className="border-t border-white/[0.06] px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/50">
              <Sparkles size={18} />
            </div>

            <h2 className="mt-7 text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
              More useful things
              <br />
              <span className="text-white/25">are on the way.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/30">
              Yours Truly is an evolving collection. Some tools are polished,
              some are experiments, and some are ideas becoming real products.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;