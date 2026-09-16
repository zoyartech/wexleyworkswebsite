import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { CASE_STUDIES } from "@/data/shared";
import healthtechHero from "@/imports/7.png";

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Case study not found</h1>
          <Link to="/work" className="text-[#6b6b6b] underline underline-offset-4">← Back to Our Work</Link>
        </div>
      </div>
    );
  }

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <article>
      {/* Hero image */}
      <motion.div
        className="relative h-[55vh] min-h-80 overflow-hidden bg-[#0d0d0d]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={slug === "healthtech-mlops" ? healthtechHero : cs.img} alt={cs.headline} className="w-full h-full object-cover opacity-[0.14] rounded-none" />
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-12">
          <motion.p
            className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-white)" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            {cs.industry} · {cs.tags}
          </motion.p>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            {cs.headline}
          </motion.h1>
        </div>
      </motion.div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm hover:text-[#0d0d0d] transition-colors mb-12" style={{ color: "rgb(0,0,0)", fontWeight: 700 }}>
          ← Back to Our Work
        </Link>

        {/* Meta row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-none mb-16" style={{ backgroundColor: "var(--color-white)" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-1">Client</p>
            <p className="font-bold">{cs.client}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-1">Industry</p>
            <p className="font-bold">{cs.industry}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-1">Key Result</p>
            <p className="font-bold text-[#3dafc9]" style={{ color: "#0d0d0d" }}>{cs.result}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-1">Services</p>
            <div className="flex flex-wrap gap-1">
              {cs.services.map((s) => (
                <span key={s} className="text-xs font-medium bg-[#0d0d0d] text-[#f8f7f4] px-2 py-0.5 rounded-none">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.p
          className="text-xl leading-relaxed mb-16 border-l-4 border-[#3dafc9] pl-6"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "rgb(0,0,0)" }}
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
        >
          {cs.summary}
        </motion.p>

        {/* Metrics — healthtech-mlops only */}
        {slug === "healthtech-mlops" && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          >
            {/* KPI strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: "60%", label: "Latency Reduction", sub: "inference pipeline" },
                { value: "78%", label: "Clinical Adoption", sub: "up from 12%" },
                { value: "2M+", label: "Diagnostic Assists", sub: "per month" },
                { value: "<0.3%", label: "Hallucination Rate", sub: "measured in prod" },
              ].map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="bg-[#0d0d0d] text-[#f8f7f4] rounded-none p-6 flex flex-col gap-1"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <span className="text-3xl md:text-4xl font-bold text-[#3dafc9]">{kpi.value}</span>
                  <span className="text-sm font-semibold">{kpi.label}</span>
                  <span className="text-xs text-[#a0a0a0]">{kpi.sub}</span>
                </motion.div>
              ))}
            </div>

            {/* Adoption bar chart */}
            <motion.div
              className="rounded-none p-8 mb-6" style={{ backgroundColor: "var(--color-white)", color: "rgb(0,0,0)" }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-6">Clinical Adoption Over Time</p>
              <div className="space-y-4">
                {[
                  { label: "Pre-engagement", pct: 12, color: "#d0cdc8" },
                  { label: "Week 4", pct: 34, color: "#3dafc9" },
                  { label: "Week 8 (launch)", pct: 61, color: "#3dafc9" },
                  { label: "End of Q1", pct: 78, color: "rgb(53, 170, 210)" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="text-xs text-[#6b6b6b] w-32 shrink-0">{row.label}</span>
                    <div className="flex-1 h-6 bg-[#e0ddd8] rounded-none overflow-hidden">
                      <motion.div
                        className="h-full rounded-none"
                        style={{ backgroundColor: row.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-sm font-bold w-10 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Latency + volume side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Latency comparison */}
              <motion.div
                className="rounded-none p-8" style={{ backgroundColor: "var(--color-white)" }}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-6">Inference Latency (ms)</p>
                <div className="flex items-end gap-6 h-32">
                  {[
                    { label: "Before", ms: 820, max: 820 },
                    { label: "After", ms: 328, max: 820 },
                  ].map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
                      <span className="text-sm font-bold">{bar.ms}ms</span>
                      <div className="w-full bg-[#e0ddd8] rounded-t-lg overflow-hidden" style={{ height: 96 }}>
                        <motion.div
                          className="w-full rounded-none"
                          style={{
                            backgroundColor: bar.label === "Before" ? "#d0cdc8" : "#3dafc9",
                            height: `${(bar.ms / bar.max) * 100}%`,
                            marginTop: `${(1 - bar.ms / bar.max) * 96}px`,
                          }}
                          initial={{ scaleY: 0, originY: 1 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs text-[#6b6b6b]">{bar.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#6b6b6b] mt-4">60% reduction in p95 inference latency</p>
              </motion.div>

              {/* Monthly volume */}
              <motion.div
                className="bg-[#0d0d0d] rounded-none p-8 text-[#f8f7f4]"
                initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-[#a0a0a0] mb-6">Monthly Diagnostic Assists</p>
                <div className="flex items-end gap-2 h-24">
                  {[180, 420, 780, 1100, 1540, 2000].map((v, i) => (
                    <div key={i} className="flex-1 bg-[#1a1a1a] rounded-t-sm overflow-hidden" style={{ height: 96 }}>
                      <motion.div
                        className="w-full rounded-none"
                        style={{
                          backgroundColor: i === 5 ? "#3dafc9" : `rgba(61,175,201,${0.3 + i * 0.12})`,
                          height: `${(v / 2000) * 100}%`,
                          marginTop: `${(1 - v / 2000) * 96}px`,
                        }}
                        initial={{ scaleY: 0, originY: 1 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs" style={{ color: "var(--color-white)" }}>Month 1</span>
                  <span className="text-xs" style={{ color: "var(--color-white)" }}>Month 6</span>
                </div>
                <p className="text-xs text-[#a0a0a0] mt-3">Thousands of assists/month · steady ramp to 2M+</p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Additional visualizations — healthtech-mlops only */}
        {slug === "healthtech-mlops" && (
          <div className="mb-20 space-y-6">

            {/* Viz 1: Hallucination rate trend — segmented dot grid */}
            <motion.div
              className="bg-[#0d0d0d] p-8 text-[#f8f7f4]"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#a0a0a0] mb-1">Hallucination Rate Trend</p>
                  <p className="text-2xl font-bold text-[#3dafc9]">&lt;0.3% <span className="text-sm font-normal text-[#a0a0a0]">current</span></p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#a0a0a0]">Started at</p>
                  <p className="text-2xl font-bold">11.4%</p>
                </div>
              </div>
              <div className="flex items-end gap-1 h-20">
                {[11.4, 8.2, 5.7, 3.1, 1.4, 0.8, 0.5, 0.3].map((rate, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      className="w-full"
                      style={{
                        backgroundColor: rate < 1 ? "#3dafc9" : rate < 4 ? "rgba(61,175,201,0.55)" : "rgba(61,175,201,0.25)",
                        height: `${(rate / 11.4) * 72}px`,
                        minHeight: 4,
                      }}
                      initial={{ scaleY: 0, originY: 1 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                    />
                    <span className="text-[10px] text-[#a0a0a0]">{rate}%</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-xs text-[#6b6b6b]">Baseline</span>
                <span className="text-xs text-[#3dafc9] font-semibold">Week 8 production</span>
              </div>
            </motion.div>

            {/* Viz 2: System reliability scorecard — radar-style attribute grid */}
            <motion.div
              className="p-8 border border-[#e0ddd8]"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-6">System Reliability Scorecard</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { attr: "Model Accuracy", before: 61, after: 94, unit: "%" },
                  { attr: "Uptime SLA", before: 91, after: 99.7, unit: "%" },
                  { attr: "Clinical Trust Score", before: 28, after: 87, unit: "/100" },
                  { attr: "Audit Coverage", before: 12, after: 100, unit: "%" },
                ].map((row) => (
                  <div key={row.attr}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">{row.attr}</span>
                      <span className="text-xs text-[#6b6b6b]">{row.before}{row.unit} → <span className="font-bold text-[#0d0d0d]">{row.after}{row.unit}</span></span>
                    </div>
                    <div className="relative h-2 bg-[#e0ddd8]">
                      {/* Before bar */}
                      <div
                        className="absolute top-0 left-0 h-full bg-[#d0cdc8]"
                        style={{ width: `${(row.before / 100) * 100}%` }}
                      />
                      {/* After bar animated */}
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-[#3dafc9]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min((row.after / 100) * 100, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-[#d0cdc8]">Before</span>
                      <span className="text-[10px] text-[#3dafc9]">After</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Viz 3: 8-week delivery timeline */}
            <motion.div
              className="bg-[#f8f7f4] p-8 border border-[#e0ddd8]"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-8">8-Week Delivery Timeline</p>
              <div className="relative">
                {/* Track line */}
                <div className="absolute top-4 left-4 right-4 h-px bg-[#e0ddd8]" />
                <div className="grid grid-cols-4 gap-4 relative">
                  {[
                    { week: "Wk 1–2", label: "Audit & Diagnosis", desc: "Pipeline teardown, hallucination root-cause mapping", color: "#d0cdc8" },
                    { week: "Wk 3–4", label: "Guardrail Build", desc: "Deterministic fallbacks, evaluation harness deployed", color: "#3dafc9" },
                    { week: "Wk 5–6", label: "Infra Migration", desc: "GPU cluster → auto-scaling inference fleet", color: "#3dafc9" },
                    { week: "Wk 7–8", label: "Go-Live", desc: "Production launch, clinical onboarding, monitoring live", color: "#0d0d0d" },
                  ].map((step, i) => (
                    <motion.div
                      key={step.week}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center text-xs font-bold mb-3 z-10 relative"
                        style={{ backgroundColor: step.color, color: step.color === "#0d0d0d" ? "#f8f7f4" : step.color === "#d0cdc8" ? "#6b6b6b" : "#0d0d0d" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-[#6b6b6b] mb-1">{step.week}</p>
                      <p className="text-sm font-bold mb-1">{step.label}</p>
                      <p className="text-xs text-[#6b6b6b] leading-relaxed">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        )}

        {/* Sections */}
        <div className="space-y-16">
          {cs.body.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="text-[#6b6b6b] leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Related */}
      {others.length > 0 && (
        <div className="border-t border-[#e0ddd8] px-6 py-20 max-w-7xl mx-auto" style={{ color: "rgb(0,0,0)" }}>
          <h2 className="text-2xl font-bold mb-10">More Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((other) => (
              <Link to={`/work/${other.slug}`} key={other.slug}>
                <motion.div className="group relative overflow-hidden rounded-none bg-[#e0ddd8] cursor-pointer"
                  whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <div className="overflow-hidden h-56">
                    <motion.img src={other.img} alt={other.client} className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.65 }} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#3dafc9] mb-1">{other.industry}</p>
                    <h3 className="font-bold group-hover:text-[#6b6b6b] transition-colors duration-200">{other.headline}</h3>
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
