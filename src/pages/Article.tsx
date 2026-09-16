import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ARTICLES } from "@/data/shared";

export default function Article() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Article not found</h1>
          <Link to="/articles" className="text-[#6b6b6b] underline underline-offset-4">← Back to Articles</Link>
        </div>
      </div>
    );
  }

  const related = ARTICLES.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);
  const fallback = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);
  const relatedArticles = related.length > 0 ? related : fallback;

  return (
    <article>
      {/* Hero */}
      <motion.div
        className="relative h-[45vh] min-h-72 overflow-hidden bg-[#0d0d0d]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
      >
        <img src={article.img} alt={article.title} className="w-full h-full object-cover opacity-50 rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-10">
          <motion.p className="text-xs font-semibold tracking-widest uppercase text-[#3dafc9] mb-3"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {article.category}
          </motion.p>
          <motion.h1 className="text-2xl md:text-4xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}>
            {article.title}
          </motion.h1>
        </div>
      </motion.div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#0d0d0d] transition-colors mb-12">
          ← Back to Articles
        </Link>

        {/* Excerpt */}
        <motion.p
          className="text-xl text-[#6b6b6b] leading-relaxed mb-12 border-l-4 border-[#3dafc9] pl-6"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
        >
          {article.excerpt}
        </motion.p>

        <div className="space-y-14">
          {article.body.map((section, i) => (
            <motion.div key={section.heading}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              {section.text.split("\n\n").map((para, j) => (
                <p key={j} className="text-[#6b6b6b] leading-relaxed text-lg mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Data visuals — EU AI Act article only */}
        {slug === "eu-ai-act-enterprise-guide" && (
          <div className="mt-20 space-y-6">

            {/* KPI row */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
            >
              {[
                { value: "€35M", label: "Max Fine", sub: "prohibited AI violations" },
                { value: "87%", label: "Enterprise AI Systems", sub: "unclassified as of 2025" },
                { value: "Aug 2026", label: "Full Enforcement", sub: "all high-risk systems" },
                { value: "8", label: "High-Risk Categories", sub: "under Annex III" },
              ].map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="bg-[#0d0d0d] text-[#f8f7f4] p-6 flex flex-col gap-1"
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#3dafc9]">{kpi.value}</span>
                  <span className="text-sm font-semibold">{kpi.label}</span>
                  <span className="text-xs text-[#a0a0a0]">{kpi.sub}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Viz 1: Fine structure — horizontal penalty scale */}
            <motion.div
              className="bg-[#f8f7f4] border border-[#e0ddd8] p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-6">Penalty Structure by Violation Type</p>
              <div className="space-y-5">
                {[
                  { label: "Prohibited AI (biometric surveillance, social scoring)", fine: "€35M / 7% turnover", pct: 100, color: "#0d0d0d" },
                  { label: "High-risk system obligations", fine: "€15M / 3% turnover", pct: 60, color: "#3dafc9" },
                  { label: "Inaccurate information to regulators", fine: "€7.5M / 1.5% turnover", pct: 30, color: "#a0c4d8" },
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{row.label}</span>
                      <span className="text-sm font-bold shrink-0 ml-4">{row.fine}</span>
                    </div>
                    <div className="h-3 bg-[#e0ddd8] w-full">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: row.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Viz 2: Enterprise readiness gap */}
            <motion.div
              className="bg-[#0d0d0d] text-[#f8f7f4] p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#a0a0a0] mb-2">Enterprise Readiness Gap</p>
              <p className="text-sm text-[#6b6b6b] mb-8">% of large enterprises with each compliance element in place (pre-enforcement survey, 2026)</p>
              <div className="space-y-4">
                {[
                  { label: "AI system inventory complete", pct: 31 },
                  { label: "High-risk classification done", pct: 18 },
                  { label: "Technical documentation maintained", pct: 12 },
                  { label: "Human oversight workflows in place", pct: 22 },
                  { label: "Data governance audit completed", pct: 9 },
                  { label: "Registered in EU AI database", pct: 4 },
                ].map((row, i) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="text-xs text-[#a0a0a0] w-52 shrink-0">{row.label}</span>
                    <div className="flex-1 h-5 bg-[#1a1a1a]">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: row.pct < 15 ? "#e05555" : row.pct < 25 ? "#e0a455" : "#3dafc9" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-sm font-bold w-8 text-right text-[#3dafc9]">{row.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6b6b6b] mt-6">Source: Wexley AI Advisory Enterprise Survey, Q1 2026 · n=340 large enterprises (&gt;1,000 employees) across EU member states</p>
            </motion.div>

            {/* Viz 3: Risk classification breakdown */}
            <motion.div
              className="border border-[#e0ddd8] p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-2">Typical Enterprise AI Portfolio Breakdown</p>
              <p className="text-sm text-[#6b6b6b] mb-8">After a thorough inventory, most large enterprises find their systems distributed across risk tiers as follows</p>
              <div className="flex items-end gap-3 h-40 mb-4">
                {[
                  { label: "Prohibited", pct: 3, color: "#c0392b" },
                  { label: "High-Risk", pct: 34, color: "#0d0d0d" },
                  { label: "Limited Risk", pct: 28, color: "#3dafc9" },
                  { label: "Minimal Risk", pct: 35, color: "#d0cdc8" },
                ].map((bar, i) => (
                  <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
                    <span className="text-sm font-bold">{bar.pct}%</span>
                    <div className="w-full bg-[#f0ede8]" style={{ height: 120 }}>
                      <motion.div
                        className="w-full"
                        style={{
                          backgroundColor: bar.color,
                          height: `${(bar.pct / 35) * 100}%`,
                          marginTop: `${(1 - bar.pct / 35) * 120}px`,
                        }}
                        initial={{ scaleY: 0, originY: 1 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-xs text-[#6b6b6b] text-center leading-tight">{bar.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#a0a0a0]">Based on Wexley advisory engagements across 60+ enterprise AI portfolios in 2025–2026. Prohibited category includes real-time biometric surveillance and social scoring systems identified during audit.</p>
            </motion.div>

          </div>
        )}

      </div>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-[#e0ddd8] px-6 py-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((a) => (
              <Link to={`/articles/${a.slug}`} key={a.slug}>
                <motion.div className="group flex gap-5 items-start cursor-pointer" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-none bg-[#e0ddd8]">
                    <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#3dafc9] mb-1">{a.category}</p>
                    <h3 className="font-bold leading-snug text-sm group-hover:text-[#6b6b6b] transition-colors duration-200">{a.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
