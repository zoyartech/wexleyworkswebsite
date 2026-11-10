import { Link } from "react-router";
import { CASE_STUDIES, ARTICLES } from "@/data/shared";
import wexMark from "@/imports/wexley-mark.png";

// Names only for now; swap in official logo files (with written permission) when they arrive.
const CLIENTS: { name: string; wide?: boolean }[] = [
  { name: "Morgan Stanley" },
  { name: "McKinsey & Company" },
  { name: "Deloitte" },
  { name: "Salesforce" },
  { name: "Principal Financial Group", wide: true },
  { name: "Blue Cross Blue Shield" },
  { name: "Exelon" },
  { name: "Grammarly" },
  { name: "B6 Mental Health" },
  { name: "Rockefeller Capital Management", wide: true },
];

const FRAMEWORKS = ["EU AI Act", "NIST AI RMF", "ISO 27001", "SOC 2", "HIPAA", "GDPR"];

const PILLARS = [
  {
    number: "01",
    title: "Governance & Safeguards",
    items: [
      { label: "Zero-trust guardrails", desc: "Real-time PII redaction, IP protection and prompt-injection defense at the network edge." },
      { label: "Automated compliance", desc: "EU AI Act, NIST AI RMF, HIPAA and SOC 2, turned into continuous audit trails you can export." },
      { label: "Shadow AI control", desc: "Full visibility into internal data flows, vendor models and unsanctioned API use." },
    ],
  },
  {
    number: "02",
    title: "Enablement & architecture",
    items: [
      { label: "Pilot to production", desc: "Pipelines built to scale and to connect with the legacy systems you already run." },
      { label: "Cost optimization", desc: "Right-sized GPU compute, vector databases and model routing, so cloud spend stays predictable." },
      { label: "Workflow change", desc: "Process redesign and change management, so teams actually use what gets built." },
    ],
  },
  {
    number: "03",
    title: "Applied AI & model security",
    items: [
      { label: "Reliability", desc: "Deterministic fallbacks, continuous evaluation and human review for high-stakes decisions." },
      { label: "Adversarial security", desc: "Protection against prompt injection, data poisoning and model extraction." },
      { label: "Lifecycle MLOps", desc: "Live monitoring of latency, drift and output quality after launch." },
    ],
  },
];

const WORK = [
  { slug: "global-bank-ai-governance", figure: "90 days", caption: "to SOC 2 Type II certification", headline: "Zero-trust AI guardrails across 14 business units" },
  { slug: "healthtech-mlops", figure: "60%", caption: "lower inference latency", headline: "From pilot to production in eight weeks" },
  { slug: "logistics-cost-optimization", figure: "$2.3M", caption: "saved a year on cloud spend", headline: "Cutting AI infrastructure spend by 47%" },
];

const COMPARISON = [
  { area: "Data governance", alone: "Months lost to manual legal and security reviews.", wexley: "Policy enforced automatically, with full data lineage." },
  { area: "AI enablement", alone: "Demos break the moment they meet real legacy data.", wexley: "Architecture built for enterprise scale and throughput." },
  { area: "Applied AI", alone: "Unpredictable outputs hold up every launch.", wexley: "Models that ship with agreed accuracy thresholds." },
];

function shortDate(date: string) {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const container = "mx-auto max-w-[1200px] px-5 md:px-10";
const sectionPad = "py-[clamp(80px,9vw,128px)]";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-h" className={`${container} flex flex-wrap items-center gap-14 pt-[clamp(64px,8vw,112px)] pb-[clamp(64px,8vw,104px)]`}>
        <div className="min-w-0 flex-[999_1_560px]">
          <p className="wx-eyebrow mb-7 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            Enterprise AI advisory
          </p>
          <h1 id="hero-h" className="wx-h1">
            AI ambition, made <em>audit-ready.</em>
          </h1>
          <p className="mt-8 max-w-[33em] text-[clamp(18px,1.6vw,21px)] leading-[1.55] text-body">
            We help enterprise teams build, secure and scale AI, from data governance to production MLOps, without trading speed for compliance.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link to="/#contact" className="wx-btn">
              Book a strategy call <span aria-hidden="true">→</span>
            </Link>
            <Link to="/#services" className="wx-link text-[16.5px]">
              See what we do
            </Link>
          </div>
        </div>

        <figure className="m-0 flex min-w-0 flex-[1_1_360px] flex-col gap-3.5">
          <svg viewBox="0 0 560 400" role="img" aria-label="A single hand-drawn line that starts low, loops into a W, and rises to the top right" className="block h-auto w-full overflow-visible">
            <path
              className="wx-line"
              pathLength={1}
              d="M28 318 C 74 318, 94 236, 118 150 C 126 120, 134 92, 142 96 C 148 150, 154 300, 182 330 C 196 344, 210 330, 220 290 C 232 240, 240 168, 258 160 C 272 156, 280 250, 296 312 C 304 340, 326 344, 336 316 C 350 276, 360 192, 382 150 C 410 102, 458 78, 528 72"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={28} cy={318} r={6.5} fill="var(--color-paper)" stroke="var(--color-accent)" strokeWidth={3} />
            <circle className="wx-ring" cx={528} cy={72} r={7} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
            <circle className="wx-end" cx={528} cy={72} r={7} fill="var(--color-accent)" />
            <text x={28} y={356} fontFamily="IBM Plex Mono, monospace" fontSize={13} letterSpacing={1.5} fill="var(--color-muted)">PILOT</text>
            <text className="wx-end-label" x={528} y={44} textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize={13} letterSpacing={1.5} fill="var(--color-muted)">PRODUCTION</text>
          </svg>
          <figcaption className="border-t border-rule pt-3.5 font-mono text-[13px] leading-normal text-muted">
            Fig. 1&nbsp; From pilot to production, with governance built in from the first step.
          </figcaption>
        </figure>
      </section>

      {/* LOGO WALL */}
      <section aria-labelledby="clients-h" className={`${container} pb-[clamp(56px,6vw,80px)]`}>
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h2 id="clients-h" className="wx-eyebrow">Trusted by enterprise teams</h2>
          <p className="m-0 text-[15px] text-muted">Financial services, insurance, healthcare, energy, consulting and technology</p>
        </div>
        <ul
          className="m-0 grid list-none gap-px overflow-hidden rounded-md border border-rule bg-rule p-0"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(max(150px, calc((100% - 3px) / 4)), 1fr))" }}
        >
          {CLIENTS.map((c) => (
            <li
              key={c.name}
              className={`wx-tile flex min-h-28 items-center justify-center p-6 text-center text-lg font-semibold tracking-[-0.01em] ${c.wide ? "col-span-2" : ""}`}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </section>

      {/* FRAMEWORKS MARQUEE */}
      <section aria-label="Frameworks we work to" className="border-y border-rule">
        <div className={`${container} flex items-center gap-7 py-5`}>
          <p className="wx-eyebrow flex-none text-[12.5px]">We work to</p>
          <div className="wx-marquee min-w-0 flex-1">
            <div className="wx-track">
              {[0, 1, 2].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy > 0 ? true : undefined}
                  className="m-0 flex list-none whitespace-nowrap p-0 font-display text-xl leading-[1.4] text-body"
                >
                  {FRAMEWORKS.map((f) => (
                    <li key={f} className="flex items-center gap-8 pr-8">
                      {f}
                      <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-accent" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-h" className={`${container} ${sectionPad}`}>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="min-w-0 flex-[1_1_480px]">
            <p className="wx-eyebrow mb-[18px]">What we do</p>
            <h2 id="services-h" className="wx-h2">Three disciplines, one practice.</h2>
          </div>
          <p className="m-0 max-w-[30em] flex-[1_1_360px] text-body">
            Most firms cover one piece. We bring governance, architecture and model security together, so nothing falls between teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-12">
          {PILLARS.map((p) => (
            <div key={p.number} className="min-w-0 flex-[1_1_300px] border-t-2 border-ink pt-[22px]">
              <p className="m-0 font-mono text-[13px] text-accent">{p.number}</p>
              <h3 className="mt-2 mb-2 font-display text-[27px] font-normal leading-[1.15] tracking-[-0.015em]">{p.title}</h3>
              <dl className="m-0">
                {p.items.map((item, i) => (
                  <div key={item.label} className={`py-[18px] ${i < p.items.length - 1 ? "border-b border-rule" : ""}`}>
                    <dt className="font-semibold">{item.label}</dt>
                    <dd className="m-0 mt-1 text-[15.5px] text-muted">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" aria-labelledby="work-h" className="bg-sage">
        <div className={`${container} ${sectionPad}`}>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <div>
              <p className="wx-eyebrow mb-[18px] text-sage-ink">Selected work</p>
              <h2 id="work-h" className="wx-h2">Work that made it to production.</h2>
            </div>
            <Link to="/work" className="wx-link">
              All case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-5">
            {WORK.map((w) => {
              const cs = CASE_STUDIES.find((c) => c.slug === w.slug);
              if (!cs) return null;
              return (
                <Link key={w.slug} to={`/work/${w.slug}`} className="wx-card min-w-0 flex-[1_1_320px]">
                  <span className="wx-muted font-mono text-[12.5px] uppercase tracking-[0.12em] text-muted">{cs.industry}</span>
                  <span className="mt-9 font-display text-[68px] font-light leading-none tracking-[-0.03em] text-accent">{w.figure}</span>
                  <span className="wx-muted mt-2 text-[15.5px] text-muted">{w.caption}</span>
                  <span className="mt-9 border-t border-rule pt-5 text-[19px] font-semibold leading-[1.35]">{w.headline}</span>
                  <span className="wx-muted mt-1.5 text-[15.5px] text-muted">{cs.client}</span>
                  <span className="mt-auto pt-7 text-[15.5px] font-semibold">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY WEXLEY */}
      <section id="why-us" aria-labelledby="why-h" className="bg-graphite text-paper">
        <div className={`${container} ${sectionPad}`}>
          <p className="wx-eyebrow mb-[18px] text-sage">Why Wexley</p>
          <h2 id="why-h" className="wx-h2 mb-12 max-w-[18em] text-[clamp(34px,3.9vw,54px)] leading-[1.1]">
            Most AI programs stall between the demo and the launch. <em className="text-sage">That gap is our job.</em>
          </h2>
          <div className="mb-14 flex flex-wrap gap-x-16 gap-y-4 border-t border-graphite-rule pt-8">
            <p className="m-0 flex-[1_1_220px] font-display text-[30px] leading-[1.15]">Small by design.</p>
            <p className="m-0 max-w-[36em] flex-[2_1_480px] text-[18.5px] leading-[1.6] text-graphite-body">
              Wexley is a lean team, not a consulting army. The people who scope your governance are the people who build it, so nothing gets lost in a handoff. That is why our work is thorough, documented and audit-ready from day one, and why we can move quickly without cutting corners.
            </p>
          </div>
          <div className="border-t border-graphite-rule">
            {COMPARISON.map((row) => (
              <div key={row.area} className="flex flex-wrap gap-x-10 gap-y-4 border-b border-graphite-rule py-8">
                <h3 className="m-0 flex-[1_1_220px] font-display text-[26px] font-normal leading-[1.2]">{row.area}</h3>
                <p className="m-0 flex-[1_1_280px] text-graphite-muted">
                  <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.12em]">Doing it alone</span>
                  {row.alone}
                </p>
                <p className="m-0 flex-[1_1_280px]">
                  <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.12em] text-sage">With Wexley</span>
                  {row.wexley}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" aria-labelledby="insights-h" className={`${container} ${sectionPad}`}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
          <div>
            <p className="wx-eyebrow mb-[18px]">Insights</p>
            <h2 id="insights-h" className="wx-h2">Notes from the field.</h2>
          </div>
          <Link to="/articles" className="wx-link">
            All articles <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="m-0 list-none border-t border-ink p-0">
          {ARTICLES.slice(0, 3).map((a) => (
            <li key={a.slug} className="border-b border-rule">
              <Link to={`/articles/${a.slug}`} className="wx-row">
                <span className="wx-muted flex-[0_1_240px] font-mono text-[12.5px] uppercase tracking-[0.1em] text-muted">
                  {a.category} · {shortDate(a.date)}
                </span>
                <span className="min-w-0 flex-[999_1_420px] font-display text-[26px] leading-[1.25] tracking-[-0.01em]">{a.title}</span>
                <span className="wx-muted flex-none text-[15px] text-muted">
                  {a.readTime} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="cta-h" className="bg-sage">
        <div className={`${container} ${sectionPad} flex flex-wrap items-center justify-between gap-12`}>
          <div className="min-w-0 flex-[999_1_560px]">
            <p className="wx-eyebrow mb-[18px] text-sage-ink">Compliance and speed, together</p>
            <h2 id="cta-h" className="wx-h2 text-[clamp(44px,5.6vw,80px)] leading-[1.02]">
              Build it right <em>the first time.</em>
            </h2>
            <p className="mt-7 max-w-[32em] text-[19px] text-body">
              Talk to specialists in enterprise data, security and applied AI. We'll tell you plainly what it takes to get to production.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a href="mailto:enterprise@wexley.ai?subject=Strategy%20call" className="wx-btn">
                Book a strategy call <span aria-hidden="true">→</span>
              </a>
              <a href="mailto:enterprise@wexley.ai" className="wx-link text-[16.5px]">
                enterprise@wexley.ai
              </a>
            </div>
          </div>
          <img src={wexMark} alt="" className="block h-auto w-[clamp(140px,16vw,220px)] flex-none" />
        </div>
      </section>
    </>
  );
}
