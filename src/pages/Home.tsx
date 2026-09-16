import { useState, useEffect } from "react";
import heroBg from "@/imports/8.png";
import caseImg0 from "@/imports/11-1.png";
import caseImg1 from "@/imports/13.png";
import articleImg0 from "@/imports/15.png";
import articleImg1 from "@/imports/16.png";
import articleImg2 from "@/imports/1-1.png";

const HOME_CASE_IMGS: Record<number, string> = { 0: caseImg0, 1: caseImg1 };
const HOME_ARTICLE_IMGS: Record<number, string> = { 0: articleImg0, 1: articleImg1, 2: articleImg2 };
import { Link } from "react-router";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "motion/react";
import { CASE_STUDIES, ARTICLES } from "@/data/shared";

const CLIENTS = [
  "EU AI Act", "NIST AI RMF", "HIPAA", "ISO 27001", "GDPR",
  "Zero-Trust", "MLOps", "LLM Security", "Data Lineage", "RAG Architecture", "FinReg",
  "EU AI Act", "NIST AI RMF", "HIPAA", "ISO 27001", "GDPR",
  "Zero-Trust", "MLOps", "LLM Security", "Data Lineage", "RAG Architecture", "FinReg",
];

const PILLARS = [
  {
    number: "01",
    title: "AI Governance & Data Safeguards",
    items: [
      { label: "Zero-Trust AI Guardrails", desc: "Deploy real-time PII redaction, IP protection, and prompt-injection defense at the network edge." },
      { label: "Automated Compliance", desc: "Turn complex regulatory frameworks (EU AI Act, NIST AI RMF, HIPAA, SOC 2) into continuous, exportable audit trails." },
      { label: "Shadow AI Control", desc: "Gain total visibility into internal data flows, vendor LLMs, and unauthorized API usage across your tech stack." },
    ],
  },
  {
    number: "02",
    title: "AI Enablement & Architecture",
    items: [
      { label: "POC-to-Production Engineering", desc: "Break out of pilot purgatory with scalable backend pipelines integrated directly into legacy enterprise IT." },
      { label: "Infrastructure & Cost Optimization", desc: "Right-size GPU compute, vector databases, and LLM routing to prevent unexpected cloud spend." },
      { label: "Workflow Transformation", desc: "Align business process redesign and change management so business teams actually adopt new AI capabilities." },
    ],
  },
  {
    number: "03",
    title: "Applied AI & Model Security",
    items: [
      { label: "Reliability & Hallucination Defense", desc: "Implement deterministic fallbacks, continuous evaluations, and human-in-the-loop workflows for high-stakes decisions." },
      { label: "Adversarial Security", desc: "Protect models against prompt injection, data poisoning, and unauthorized model extraction." },
      { label: "Lifecycle MLOps", desc: "Monitor latency, data drift, and output quality in real time post-deployment." },
    ],
  },
];

const COMPARISON = [
  { area: "Data Governance", trap: "Months lost in manual legal & security reviews", impact: "Instant, automated policy enforcement & full data lineage" },
  { area: "AI Enablement", trap: "Demos fail when connected to real legacy data", impact: "Scalable enterprise architecture built for high throughput" },
  { area: "Applied AI", trap: "Unpredictable outputs halt production launches", impact: "Production-ready models with guaranteed accuracy thresholds" },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

function DecorativeW({ spin = false, size = 120 }: { spin?: boolean; size?: number }) {
  return (
    <motion.svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: size, height: size }}
      animate={spin ? { rotate: 360 } : undefined}
      transition={spin ? { duration: 22, ease: "linear", repeat: Infinity } : undefined}
    >
      <circle cx="60" cy="60" r="60" fill="#3dafc9" />
      <path d="M28 38 L44 82 L60 52 L76 82 L92 38" stroke="#0d0d0d" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </motion.svg>
  );
}

function CountUp({ count, suffix }: { count: MotionValue<number>; suffix: string }) {
  const display = useTransform(count, (v) => Math.round(v) + suffix);
  return <motion.span>{display}</motion.span>;
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const count = useMotionValue(0);
  const numericMatch = value.match(/\d+/);
  const numeric = numericMatch ? parseInt(numericMatch[0]) : null;
  const suffix = value.replace(/\d+/, "");
  useEffect(() => {
    if (numeric === null) return;
    const controls = animate(count, numeric, { duration: 1.6, ease: "easeOut", delay: 0.4 });
    return controls.stop;
  }, []);
  return (
    <motion.div variants={fadeUp}>
      <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
        {numeric !== null ? <CountUp count={count} suffix={suffix} /> : value}
      </div>
      <div className="text-sm text-[#6b6b6b] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</div>
    </motion.div>
  );
}

export default function Home() {
  const [activePillar, setActivePillar] = useState(0);
  const shouldReduce = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Soft overlay so text stays crisp */}
        <div className="absolute inset-0 bg-[#f8f7f4]/50" />
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full flex flex-col justify-center">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-8">
              Enterprise AI Advisory&nbsp;&nbsp;
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.97] tracking-tight">
              Turn AI Ambition<br />into <em className="not-italic text-[#3dafc9]">Audit-Ready</em><br />Enterprise Value.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-10 text-lg max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgb(0, 0, 0)" }}>
              From real-time data governance to production-grade MLOps, we help enterprise leaders build, secure, and scale custom AI applications&nbsp;&nbsp;without sacrificing velocity or compliance.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-10 flex flex-wrap gap-4">
              <motion.a href="#contact" className="inline-flex items-center gap-2 text-base font-semibold bg-[#0d0d0d] text-[#f8f7f4] px-7 py-4 rounded-[10px]"
                whileHover={shouldReduce ? {} : { scale: 1.04, backgroundColor: "#333" }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }} transition={{ duration: 0.18 }}>
                Let's Talk <span aria-hidden="true">→</span>
              </motion.a>
              <motion.a href="#services" className="inline-flex items-center gap-2 text-base font-semibold border border-[#0d0d0d] text-[#0d0d0d] px-7 py-4 rounded-[10px]"
                whileHover={shouldReduce ? {} : { scale: 1.04, backgroundColor: "#0d0d0d", color: "#f8f7f4" }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }} transition={{ duration: 0.18 }}>
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="hidden md:block flex-shrink-0 mb-4"
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
          </motion.div>
        </div>
        <motion.div className="mt-24 grid grid-cols-3 gap-8 border-t border-[#e0ddd8] pt-10" variants={stagger} initial="hidden" animate="visible">
          {[["93%", "Compliance audit pass rate"], ["60%", "Faster POC-to-prod"], ["$0", "Surprise cloud overruns"]].map(([num, label]) => (
            <AnimatedStat key={label} value={num} label={label} />
          ))}
        </motion.div>
      </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-[#e0ddd8] py-5" style={{ backgroundColor: "#7eff49" }}>
        <div className="ticker-track select-none">
          {CLIENTS.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0d0d0d] whitespace-nowrap">{name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3dafc9] flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="px-6 py-32 max-w-7xl mx-auto">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-4">Core Service Pillars</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Three disciplines. One integrated practice.</h2>
        </motion.div>
        <div className="flex gap-2 mb-12 flex-wrap">
          {PILLARS.map((p, i) => {
            const labels = ["AI Governance", "AI Enablement", "Applied AI"];
            return (
              <motion.button key={p.number} onClick={() => setActivePillar(i)}
                className={`px-5 py-2.5 text-sm font-semibold border transition-colors duration-200 ${activePillar === i ? "border-[#0d0d0d]" : "bg-transparent text-[#6b6b6b] border-[#e0ddd8] hover:border-[#0d0d0d] hover:text-[#0d0d0d]"}`}
                style={activePillar === i ? { borderRadius: 10, backgroundColor: "rgb(126, 255, 73)", color: "rgb(0, 0, 0)" } : { borderRadius: 15 }}
                whileTap={shouldReduce ? {} : { scale: 0.96 }}>
                {labels[i]}
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activePillar} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: "easeOut" }} className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <span className="text-xs font-mono text-[#6b6b6b]">{PILLARS[activePillar].number}</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-6 leading-tight">{PILLARS[activePillar].title}</h3>
            </div>
            <div className="divide-y divide-[#e0ddd8]">
              {PILLARS[activePillar].items.map((item, i) => (
                <motion.div key={item.label} className="py-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <h4 className="text-lg font-bold mb-2">{item.label}</h4>
                  <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* FEATURED WORK */}
      <section className="px-6 pb-32 max-w-7xl mx-auto" style={{ backgroundColor: "var(--tw-ring-offset-color)" }}>
        <motion.div className="flex items-end justify-between mb-12 border-t border-[#e0ddd8] pt-12"
          style={{ color: "rgb(0, 0, 0)" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "rgb(0, 0, 0)" }}>Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Case Studies</h2>
          </div>
          <Link to="/work" className="hidden md:inline-flex text-sm font-medium underline underline-offset-4 hover:text-[#0d0d0d] transition-colors" style={{ color: "rgb(0, 0, 0)" }}>
            View all work →
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {CASE_STUDIES.slice(0, 2).map((cs, i) => (
            <Link to={`/work/${cs.slug}`} key={cs.slug}>
              <motion.div className="group relative overflow-hidden rounded-none bg-[#e0ddd8] cursor-pointer"
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={shouldReduce ? {} : { y: -4 }}>
                <div className="overflow-hidden h-72 md:h-80">
                  <motion.img src={HOME_CASE_IMGS[i] ?? cs.img} alt={cs.client} className="w-full h-full object-cover rounded-none"
                    whileHover={shouldReduce ? {} : { scale: 1.06 }} transition={{ duration: 0.65 }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0d0d0d]/70 to-transparent">
                  <h3 className="text-xl font-bold text-white">{cs.headline}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="text-[#f8f7f4]" style={{ backgroundColor: "#373737" }}>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div className="mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
            style={{ boxShadow: "none" }}>
            <p className="text-sm font-medium tracking-widest uppercase text-[#3dafc9] mb-4">Why Enterprise Leaders Partner With Us</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">The gap between demo and done is where most AI programs fail.</h2>
          </motion.div>
          <motion.div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-[#ffffff14]"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="text-xs font-semibold tracking-widest uppercase text-white">Challenge Area</div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white">Internal DIY Trap</div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white">Our Done-With-You Impact</div>
          </motion.div>
          <div className="divide-y divide-[#ffffff0f]">
            {COMPARISON.map((row, i) => (
              <motion.div key={row.area} className="grid grid-cols-3 gap-4 py-8"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="font-bold text-lg">{row.area}</div>
                <div className="text-[#a0a0a0] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{row.trap}</div>
                <div className="text-[#f8f7f4] leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{row.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="px-6 py-32 max-w-7xl mx-auto" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <motion.div className="flex items-end justify-between mb-12"
          style={{ color: "rgb(0, 0, 0)" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "rgb(0, 0, 0)" }}>Latest Thinking</p>
            <h2 className="text-4xl md:text-5xl font-bold">Articles</h2>
          </div>
          <Link to="/articles" className="hidden md:inline-flex text-sm font-medium underline underline-offset-4 text-[#6b6b6b] hover:text-[#0d0d0d] transition-colors">
            View all articles →
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((article, i) => (
            <Link to={`/articles/${article.slug}`} key={article.slug}>
              <motion.div className="group cursor-pointer" style={i === 0 ? { color: "rgb(0, 0, 0)" } : {}} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="overflow-hidden rounded-none bg-[#e0ddd8] h-48 mb-4">
                  <motion.img src={HOME_ARTICLE_IMGS[i] ?? article.img} alt={article.title} className="w-full h-full object-cover"
                    whileHover={shouldReduce ? {} : { scale: 1.05 }} transition={{ duration: 0.55 }} />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#3dafc9] mb-2">{article.category}</p>
                <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-[#6b6b6b] transition-colors duration-200">{article.title}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-32 max-w-7xl mx-auto text-center" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <motion.p className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Stop choosing between compliance and execution
        </motion.p>
        <motion.h2 className="text-[clamp(2.2rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          Accelerate Your&nbsp;&nbsp;Advantage<br />
          <em className="not-italic text-[#3dafc9]">Without the&nbsp;&nbsp;Risk.</em>
        </motion.h2>
        <motion.p className="max-w-xl mx-auto mb-12 text-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "rgb(0, 0, 0)" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          Partner with specialists who understand complex data infrastructure, security, and applied AI at enterprise scale.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.a href="mailto:enterprise@wexley.ai" className="inline-flex items-center justify-center gap-2 text-base font-semibold bg-[#0d0d0d] text-[#f8f7f4] rounded-[10px]"
            style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, height: "100%" }}
            whileHover={shouldReduce ? {} : { scale: 1.04, backgroundColor: "#333" }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
            Lets Talk <span aria-hidden="true">↗</span>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
