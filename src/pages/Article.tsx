import { useParams, Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ARTICLES } from "@/data/shared";

const container = "mx-auto max-w-[1200px] px-5 md:px-10";

export default function Article() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className={`${container} py-40 text-center`}>
        <h1 className="wx-h2 mb-6">Article not found</h1>
        <Link to="/articles" className="wx-link">
          <span aria-hidden="true">←</span> All insights
        </Link>
      </div>
    );
  }

  const sameTopic = ARTICLES.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);
  const related = sameTopic.length > 0 ? sameTopic : ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);
  const grow = (delay = 0) => (reduce ? {} : { initial: { scaleX: 0 }, whileInView: { scaleX: 1 }, viewport: { once: true }, transition: { duration: 0.8, ease: "easeOut" as const, delay } });
  const rise = (delay = 0) => (reduce ? {} : { initial: { scaleY: 0 }, whileInView: { scaleY: 1 }, viewport: { once: true }, transition: { duration: 0.65, ease: "easeOut" as const, delay } });

  return (
    <article>
      <header className="mx-auto max-w-[880px] px-5 pt-12 pb-12 md:px-10">
        <Link to="/articles" className="wx-link text-[15px]">
          <span aria-hidden="true">←</span> All insights
        </Link>
        <p className="wx-eyebrow mt-12 mb-6">
          {article.category} · {article.date} · {article.readTime}
        </p>
        <h1 className="wx-h1 text-[clamp(36px,4.8vw,64px)] leading-[1.06]">{article.title}</h1>
        <p className="mt-8 font-display text-[clamp(20px,2vw,25px)] font-light leading-[1.45] text-body">{article.excerpt}</p>
      </header>

      <div className="mx-auto max-w-[880px] border-t border-rule px-5 pt-12 pb-[clamp(64px,7vw,96px)] md:px-10">
        <div className="flex flex-col gap-14">
          {article.body.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 font-display text-[30px] font-normal leading-tight tracking-[-0.015em]">{section.heading}</h2>
              {section.text.split("\n\n").map((para, j) => (
                <p key={j} className="mt-0 mb-5 text-[18.5px] leading-[1.7] text-body">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Data visuals, EU AI Act article only */}
        {slug === "eu-ai-act-enterprise-guide" && (
          <section aria-label="The EU AI Act in numbers" className="mt-20 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "€35M", label: "Maximum fine", sub: "prohibited AI violations" },
                { value: "87%", label: "Enterprise AI systems", sub: "unclassified as of 2025" },
                { value: "Aug 2026", label: "Full enforcement", sub: "all high-risk systems" },
                { value: "8", label: "High-risk categories", sub: "under Annex III" },
              ].map((kpi) => (
                <div key={kpi.label} className="flex flex-col gap-1 rounded-md bg-graphite p-6 text-paper">
                  <span className="font-display text-[30px] leading-none text-sage">{kpi.value}</span>
                  <span className="mt-2 text-sm font-semibold">{kpi.label}</span>
                  <span className="text-xs text-graphite-muted">{kpi.sub}</span>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-rule bg-white p-8">
              <p className="wx-eyebrow mb-6 text-xs">Penalties by type of violation</p>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Prohibited AI (biometric surveillance, social scoring)", fine: "€35M or 7% of turnover", pct: 100, color: "var(--color-ink)" },
                  { label: "High-risk system obligations", fine: "€15M or 3% of turnover", pct: 60, color: "var(--color-accent)" },
                  { label: "Inaccurate information to regulators", fine: "€7.5M or 1.5% of turnover", pct: 30, color: "#9fbfc2" },
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="mb-2 flex justify-between gap-4">
                      <span className="text-sm">{row.label}</span>
                      <span className="shrink-0 text-sm font-semibold">{row.fine}</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-sm bg-band">
                      <motion.div className="h-full origin-left" style={{ width: `${row.pct}%`, backgroundColor: row.color }} {...grow(i * 0.1)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md bg-graphite p-8 text-paper">
              <p className="wx-eyebrow mb-2 text-xs text-graphite-muted">Enterprise readiness gap</p>
              <p className="mt-0 mb-8 text-sm text-graphite-muted">Share of large enterprises with each compliance element in place (pre-enforcement survey, 2026)</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "AI system inventory complete", pct: 31 },
                  { label: "High-risk classification done", pct: 18 },
                  { label: "Technical documentation maintained", pct: 12 },
                  { label: "Human oversight workflows in place", pct: 22 },
                  { label: "Data governance audit completed", pct: 9 },
                  { label: "Registered in EU AI database", pct: 4 },
                ].map((row, i) => (
                  <div key={row.label} className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="w-full text-xs text-graphite-muted sm:w-52 sm:shrink-0">{row.label}</span>
                    <div className="h-4 flex-1 overflow-hidden rounded-sm bg-[#2c2c2c]">
                      <motion.div
                        className="h-full origin-left"
                        style={{ width: `${row.pct}%`, backgroundColor: row.pct < 15 ? "#e08a6a" : row.pct < 25 ? "#e3c47a" : "var(--color-sage)" }}
                        {...grow(i * 0.08)}
                      />
                    </div>
                    <span className="w-9 text-right text-sm font-semibold">{row.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 mb-0 text-xs text-graphite-muted">
                Source: Wexley AI Advisory Enterprise Survey, Q1 2026. n=340 large enterprises (over 1,000 employees) across EU member states.
              </p>
            </div>

            <div className="rounded-md border border-rule bg-white p-8">
              <p className="wx-eyebrow mb-2 text-xs">A typical enterprise AI portfolio</p>
              <p className="mt-0 mb-8 text-sm text-muted">After a thorough inventory, most large enterprises find their systems spread across risk tiers like this</p>
              <div className="mb-4 flex h-40 items-end gap-3">
                {[
                  { label: "Prohibited", pct: 3, color: "#b4532a" },
                  { label: "High risk", pct: 34, color: "var(--color-ink)" },
                  { label: "Limited risk", pct: 28, color: "var(--color-accent)" },
                  { label: "Minimal risk", pct: 35, color: "#c9c9c9" },
                ].map((bar, i) => (
                  <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-sm font-semibold">{bar.pct}%</span>
                    <div className="flex h-[120px] w-full items-end bg-band">
                      <motion.div className="w-full origin-bottom" style={{ height: `${(bar.pct / 35) * 100}%`, backgroundColor: bar.color }} {...rise(i * 0.1)} />
                    </div>
                    <span className="text-center text-xs leading-tight text-muted">{bar.label}</span>
                  </div>
                ))}
              </div>
              <p className="m-0 text-xs text-muted">
                Based on Wexley advisory engagements across 60+ enterprise AI portfolios in 2025 and 2026. The prohibited tier includes real-time biometric surveillance and social scoring systems found during audits.
              </p>
            </div>
          </section>
        )}
      </div>

      {related.length > 0 && (
        <section aria-labelledby="more-h" className="border-t border-rule">
          <div className={`${container} py-[clamp(56px,6vw,88px)]`}>
            <h2 id="more-h" className="wx-h2 mb-8 text-[clamp(28px,3vw,40px)]">More insights</h2>
            <ul className="m-0 list-none border-t border-ink p-0">
              {related.map((a) => (
                <li key={a.slug} className="border-b border-rule">
                  <Link to={`/articles/${a.slug}`} className="wx-row">
                    <span className="wx-muted flex-[0_1_240px] font-mono text-[12.5px] uppercase tracking-[0.1em] text-muted">{a.category}</span>
                    <span className="min-w-0 flex-[999_1_420px] font-display text-[24px] leading-[1.25]">{a.title}</span>
                    <span className="wx-muted flex-none text-[15px] text-muted">
                      {a.readTime} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
