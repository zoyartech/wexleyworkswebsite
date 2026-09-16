import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ARTICLES } from "@/data/shared";

import img_eu_ai_act from "@/imports/4.png";
import img_pilot_production from "@/imports/5.png";
import img_prompt_injection from "@/imports/9.png";
import img_llm_cost from "@/imports/1.png";
import img_nist_rmf from "@/imports/10.png";
import img_human_loop from "@/imports/11.png";

const ARTICLE_IMAGES: Record<string, string> = {
  "eu-ai-act-enterprise-guide": img_eu_ai_act,
  "poc-to-production-failure": img_pilot_production,
  "prompt-injection-enterprise": img_prompt_injection,
  "llm-cost-optimization-2026": img_llm_cost,
  "nist-ai-rmf-implementation": img_nist_rmf,
  "human-in-the-loop-design": img_human_loop,
};

const CATEGORIES = ["All", "AI Governance", "AI Enablement", "Model Security", "Infrastructure", "Applied AI"];

const fraunces = { fontFamily: "'Fraunces', serif" };
const inter = { fontFamily: "'Inter', sans-serif", fontWeight: 300 };

export default function Articles() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-white text-[#141414]">

      {/* Page header */}
      <div className="pt-32 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pb-10 border-b border-[#141414]"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#9b9b9b] mb-6">
            Wexley Perspectives
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-7xl md:text-[96px] font-bold leading-none tracking-tight" style={fraunces}>
              Articles
            </h1>
            <p className="text-[15px] text-[#6b6b6b] max-w-xs leading-relaxed md:pb-1" style={inter}>
              Practical intelligence for enterprise leaders navigating AI governance, security, and deployment at scale.
            </p>
          </div>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex items-stretch overflow-x-auto scrollbar-hide border-b border-[#e0ddd8]"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative flex-shrink-0 px-5 py-[18px] text-[13px] font-medium transition-colors duration-200 whitespace-nowrap ${
                active === cat ? "text-[#141414] font-semibold" : "text-[#9b9b9b] hover:text-[#141414]"
              }`}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="filter-bar"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#141414]"
                  transition={{ type: "spring", stiffness: 480, damping: 38 }}
                />
              )}
            </button>
          ))}
          <span className="ml-auto flex-shrink-0 flex items-center px-5 text-[13px] text-[#9b9b9b]">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </span>
        </motion.div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[#9b9b9b] text-center py-28 text-base"
            >
              No articles in this category yet.
            </motion.p>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32 }}
            >

              {/* Featured article */}
              {featured && (
                <Link to={`/articles/${featured.slug}`} className="block group mb-16 md:mb-20">
                  <div className="grid md:grid-cols-[3fr_2fr] border border-[#e8e5e0]">
                    {/* Image */}
                    <div className="overflow-hidden bg-[#0a0a14]" style={{ aspectRatio: "16/10" }}>
                      <img
                        src={ARTICLE_IMAGES[featured.slug] ?? featured.img}
                        alt={featured.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* Text panel */}
                    <div className="flex flex-col justify-between p-8 md:p-12 bg-white border-t md:border-t-0 md:border-l border-[#e8e5e0]">
                      <div>
                        <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#3dafc9] mb-5">
                          {featured.category} · Featured
                        </span>
                        <h2
                          className="text-[26px] md:text-[32px] font-bold leading-tight mb-5 transition-colors duration-200 group-hover:text-[#4a4a4a]"
                          style={fraunces}
                        >
                          {featured.title}
                        </h2>
                        <p className="text-[#6b6b6b] leading-relaxed text-[14px]" style={inter}>
                          {featured.excerpt}
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t border-[#e8e5e0] flex items-center justify-between">
                        <span className="text-[13px] font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                          Read more <span aria-hidden>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Article grid */}
              {rest.length > 0 && (
                <>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#9b9b9b]">More articles</span>
                    <span className="flex-1 h-px bg-[#e8e5e0]" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
                    {rest.map((article, i) => (
                      <Link to={`/articles/${article.slug}`} key={article.slug} className="group block">
                        <motion.div
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Image */}
                          <div
                            className="overflow-hidden mb-5 bg-[#0a0a14]"
                            style={{ aspectRatio: "3/2" }}
                          >
                            <img
                              src={ARTICLE_IMAGES[article.slug] ?? article.img}
                              alt={article.title}
                              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
                            />
                          </div>

                          {/* Category */}
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3dafc9] block mb-3">
                            {article.category}
                          </span>

                          {/* Title */}
                          <h3
                            className="text-[18px] font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-[#4a4a4a]"
                            style={fraunces}
                          >
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p
                            className="text-[13px] text-[#6b6b6b] leading-relaxed mb-5"
                            style={{ ...inter, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
                          >
                            {article.excerpt}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-[#e8e5e0]">
                            <span className="text-[12px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                              Read more <span aria-hidden>→</span>
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-[#e8e5e0] mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b9b9b] mb-3">Work with Wexley</p>
            <p className="text-2xl font-bold max-w-sm leading-tight" style={fraunces}>
              Ready to put strategy into practice?
            </p>
          </div>
          <motion.a
            href="/#contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 font-semibold text-[14px] bg-[#141414] text-white px-8 py-4 rounded-[10px]"
            whileHover={{ backgroundColor: "#333" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Book a Strategy Session <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
