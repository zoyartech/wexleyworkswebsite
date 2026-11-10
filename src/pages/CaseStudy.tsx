import { useParams, Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { CASE_STUDIES } from "@/data/shared";

const container = "mx-auto max-w-[1200px] px-5 md:px-10";
const BEFORE = "#c9c9c9";

export default function CaseStudy() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className={`${container} py-40 text-center`}>
        <h1 className="wx-h2 mb-6">Case study not found</h1>
        <Link to="/work" className="wx-link">
          <span aria-hidden="true">←</span> All case studies
        </Link>
      </div>
    );
  }

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2);
  const grow = (delay = 0) => (reduce ? {} : { initial: { scaleX: 0 }, whileInView: { scaleX: 1 }, viewport: { once: true }, transition: { duration: 0.8, ease: "easeOut" as const, delay } });
  const rise = (delay = 0) => (reduce ? {} : { initial: { scaleY: 0 }, whileInView: { scaleY: 1 }, viewport: { once: true }, transition: { duration: 0.6, ease: "easeOut" as const, delay } });

  return (
    <article>
      {/* Header */}
      <header className={`${container} pt-12 pb-14`}>
        <Link to="/work" className="wx-link text-[15px]">
          <span aria-hidden="true">←</span> All case studies
        </Link>
        <p className="wx-eyebrow mt-12 mb-6">
          {cs.industry} · {cs.tags}
        </p>
        <h1 className="wx-h1 max-w-[16em] text-[clamp(40px,5.4vw,76px)] leading-[1.03]">{cs.headline}</h1>
        <p className="mt-8 max-w-[34em] text-[clamp(18px,1.6vw,21px)] text-body">{cs.summary}</p>
      </header>

      {/* Facts */}
      <section aria-label="Engagement facts" className="border-y border-rule">
        <dl className={`${container} m-0 grid grid-cols-2 gap-x-8 gap-y-6 py-8 md:grid-cols-4`}>
          <div>
            <dt className="wx-eyebrow mb-1.5 text-xs">Client</dt>
            <dd className="m-0 font-semibold">{cs.client}</dd>
          </div>
          <div>
            <dt className="wx-eyebrow mb-1.5 text-xs">Industry</dt>
            <dd className="m-0 font-semibold">{cs.industry}</dd>
          </div>
          <div>
            <dt className="wx-eyebrow mb-1.5 text-xs">Key result</dt>
            <dd className="m-0 font-display text-[22px] leading-tight text-accent">{cs.result}</dd>
          </div>
          <div>
            <dt className="wx-eyebrow mb-1.5 text-xs">Services</dt>
            <dd className="m-0 flex flex-wrap gap-1.5">
              {cs.services.map((s) => (
                <span key={s} className="rounded-full border border-rule bg-white px-2.5 py-0.5 text-[13px] text-body">
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <div className="mx-auto max-w-[880px] px-5 py-[clamp(64px,7vw,96px)] md:px-10">
        {/* Results in numbers, healthtech engagement only */}
        {slug === "healthtech-mlops" && (
          <section aria-label="Results in numbers" className="mb-20 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "60%", label: "Latency reduction", sub: "inference pipeline" },
                { value: "78%", label: "Clinical adoption", sub: "up from 12%" },
                { value: "2M+", label: "Diagnostic assists", sub: "per month" },
                { value: "<0.3%", label: "Hallucination rate", sub: "measured in production" },
              ].map((kpi) => (
                <div key={kpi.label} className="flex flex-col gap-1 rounded-md bg-graphite p-6 text-paper">
                  <span className="font-display text-[36px] leading-none text-sage">{kpi.value}</span>
                  <span className="mt-2 text-sm font-semibold">{kpi.label}</span>
                  <span className="text-xs text-graphite-muted">{kpi.sub}</span>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-rule bg-white p-8">
              <p className="wx-eyebrow mb-6 text-xs">Clinical adoption over time</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Pre-engagement", pct: 12, color: BEFORE },
                  { label: "Week 4", pct: 34, color: "var(--color-accent)" },
                  { label: "Week 8 (launch)", pct: 61, color: "var(--color-accent)" },
                  { label: "End of Q1", pct: 78, color: "var(--color-accent)" },
                ].map((row, i) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="w-32 shrink-0 text-[13px] text-muted">{row.label}</span>
                    <div className="h-6 flex-1 overflow-hidden rounded-sm bg-band">
                      <motion.div className="h-full origin-left" style={{ width: `${row.pct}%`, backgroundColor: row.color }} {...grow(i * 0.08)} />
                    </div>
                    <span className="w-10 text-right text-sm font-semibold">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-md border border-rule bg-white p-8">
                <p className="wx-eyebrow mb-6 text-xs">Inference latency (ms)</p>
                <div className="flex h-32 items-end gap-6">
                  {[
                    { label: "Before", ms: 820, color: BEFORE },
                    { label: "After", ms: 328, color: "var(--color-accent)" },
                  ].map((bar, i) => (
                    <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                      <span className="text-sm font-semibold">{bar.ms}ms</span>
                      <div className="flex h-24 w-full items-end">
                        <motion.div className="w-full origin-bottom rounded-t-sm" style={{ height: `${(bar.ms / 820) * 100}%`, backgroundColor: bar.color }} {...rise(i * 0.1)} />
                      </div>
                      <span className="text-xs text-muted">{bar.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted">60% reduction in p95 inference latency</p>
              </div>

              <div className="rounded-md bg-graphite p-8 text-paper">
                <p className="wx-eyebrow mb-6 text-xs text-graphite-muted">Monthly diagnostic assists</p>
                <div className="flex h-24 items-end gap-2">
                  {[180, 420, 780, 1100, 1540, 2000].map((v, i) => (
                    <motion.div
                      key={v}
                      className="flex-1 origin-bottom rounded-t-sm"
                      style={{ height: `${(v / 2000) * 100}%`, backgroundColor: i === 5 ? "var(--color-sage)" : `rgba(204, 221, 205, ${0.3 + i * 0.1})` }}
                      {...rise(i * 0.08)}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-xs text-graphite-muted">
                  <span>Month 1</span>
                  <span>Month 6</span>
                </div>
                <p className="mt-3 text-xs text-graphite-muted">Thousands of assists a month, a steady ramp to 2M+</p>
              </div>
            </div>

            <div className="rounded-md bg-graphite p-8 text-paper">
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <p className="wx-eyebrow mb-1 text-xs text-graphite-muted">Hallucination rate</p>
                  <p className="m-0 font-display text-[30px] text-sage">
                    &lt;0.3% <span className="font-sans text-sm text-graphite-muted">current</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="m-0 text-xs text-graphite-muted">Started at</p>
                  <p className="m-0 font-display text-[30px]">11.4%</p>
                </div>
              </div>
              <div className="flex h-20 items-end gap-1">
                {[11.4, 8.2, 5.7, 3.1, 1.4, 0.8, 0.5, 0.3].map((rate, i) => (
                  <div key={rate} className="flex flex-1 flex-col items-center gap-1">
                    <motion.div
                      className="w-full origin-bottom"
                      style={{ height: `${Math.max((rate / 11.4) * 64, 4)}px`, backgroundColor: rate < 1 ? "var(--color-sage)" : "rgba(204, 221, 205, 0.4)" }}
                      {...rise(i * 0.07)}
                    />
                    <span className="text-[10px] text-graphite-muted">{rate}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="text-graphite-muted">Baseline</span>
                <span className="font-semibold text-sage">Week 8, in production</span>
              </div>
            </div>

            <div className="rounded-md border border-rule bg-white p-8">
              <p className="wx-eyebrow mb-6 text-xs">System reliability scorecard</p>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  { attr: "Model accuracy", before: 61, after: 94, unit: "%" },
                  { attr: "Uptime SLA", before: 91, after: 99.7, unit: "%" },
                  { attr: "Clinical trust score", before: 28, after: 87, unit: "/100" },
                  { attr: "Audit coverage", before: 12, after: 100, unit: "%" },
                ].map((row) => (
                  <div key={row.attr}>
                    <div className="mb-2 flex justify-between gap-4">
                      <span className="text-sm font-semibold">{row.attr}</span>
                      <span className="text-xs text-muted">
                        {row.before}
                        {row.unit} → <span className="font-semibold text-ink">{row.after}{row.unit}</span>
                      </span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-sm bg-band">
                      <motion.div className="absolute inset-y-0 left-0 origin-left bg-accent" style={{ width: `${Math.min(row.after, 100)}%` }} {...grow(0.1)} />
                      <div className="absolute inset-y-0 left-0" style={{ width: `${row.before}%`, backgroundColor: BEFORE }} />
                    </div>
                    <div className="mt-1 flex justify-between text-[11px]">
                      <span className="text-muted">Before</span>
                      <span className="text-accent">After</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-rule bg-white p-8">
              <p className="wx-eyebrow mb-8 text-xs">Eight-week delivery timeline</p>
              <ol className="m-0 grid list-none grid-cols-2 gap-6 p-0 md:grid-cols-4">
                {[
                  { week: "Weeks 1 to 2", label: "Audit and diagnosis", desc: "Pipeline teardown and root-cause mapping of hallucinations" },
                  { week: "Weeks 3 to 4", label: "Guardrail build", desc: "Deterministic fallbacks and an evaluation harness deployed" },
                  { week: "Weeks 5 to 6", label: "Infrastructure move", desc: "From one GPU cluster to an auto-scaling inference fleet" },
                  { week: "Weeks 7 to 8", label: "Go-live", desc: "Production launch, clinical onboarding and live monitoring" },
                ].map((step, i) => (
                  <li key={step.week} className="border-t-2 border-ink pt-4">
                    <span className="font-mono text-[13px] text-accent">0{i + 1}</span>
                    <p className="wx-eyebrow mt-2 text-[11px]">{step.week}</p>
                    <p className="mt-1 mb-1 font-semibold">{step.label}</p>
                    <p className="m-0 text-[13px] leading-relaxed text-muted">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* The story */}
        <div className="flex flex-col gap-14">
          {cs.body.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 font-display text-[30px] font-normal leading-tight tracking-[-0.015em]">{section.heading}</h2>
              <p className="m-0 text-[18.5px] leading-[1.7] text-body">{section.text}</p>
            </section>
          ))}
        </div>
      </div>

      {/* More case studies */}
      {others.length > 0 && (
        <section aria-labelledby="more-h" className="bg-sage">
          <div className={`${container} py-[clamp(64px,7vw,96px)]`}>
            <h2 id="more-h" className="wx-h2 mb-10 text-[clamp(30px,3.4vw,44px)]">More case studies</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {others.map((o) => (
                <Link key={o.slug} to={`/work/${o.slug}`} className="wx-card">
                  <span className="wx-muted font-mono text-[12.5px] uppercase tracking-[0.12em] text-muted">{o.industry}</span>
                  <span className="mt-5 font-display text-[26px] leading-[1.2] tracking-[-0.015em]">{o.headline}</span>
                  <span className="mt-5 font-display text-[20px] text-accent">{o.result}</span>
                  <span className="mt-auto pt-6 text-[15.5px] font-semibold">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
