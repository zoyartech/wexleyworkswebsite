import { Link } from "react-router";
import { motion } from "motion/react";
import { CASE_STUDIES } from "@/data/shared";

// Per-card style overrides from visual editor
const BADGE_BG: Record<number, string> = {
  0: "rgb(170, 255, 255)",
  1: "rgb(170, 255, 255)",
  2: "rgb(187, 255, 255)",
  3: "rgb(170, 255, 255)",
};

// Cards whose industry label should be black (index 3 = Logistics)
const BLACK_INDUSTRY = new Set([3]);

// Cards whose summary text should be black (index 2 = Retail, index 3 = Logistics)
const BLACK_SUMMARY = new Set([2, 3]);

export default function Work() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <motion.div
        className="mb-16"
        style={{ color: "rgb(0, 0, 0)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-4">Our Work</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Case Studies
        </h1>
        <p className="mt-6 text-lg text-[#6b6b6b] max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Real engagements. Measurable outcomes. Every project starts with a hard problem and ends with enterprise-grade results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {CASE_STUDIES.map((cs, i) => (
          <Link to={`/work/${cs.slug}`} key={cs.slug}>
            <motion.div
              className="group relative overflow-hidden rounded-none cursor-pointer"
              style={{ backgroundColor: "white" }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden h-72 md:h-80">
                <motion.img
                  src={cs.img}
                  alt={cs.client}
                  className="w-full h-full object-cover rounded-none"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.65 }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: BLACK_INDUSTRY.has(i) ? "rgb(0, 0, 0)" : "#3dafc9" }}
                  >
                    {cs.industry}
                  </p>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-none"
                    style={{ backgroundColor: BADGE_BG[i], color: "rgb(0, 0, 0)" }}
                  >
                    {cs.result}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-[#6b6b6b] transition-colors duration-200">{cs.headline}</h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: BLACK_SUMMARY.has(i) ? "rgb(0, 0, 0)" : "#6b6b6b" }}
                >
                  {cs.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <span key={s} className="text-xs font-medium border border-[#e0ddd8] text-[#6b6b6b] px-3 py-1 rounded-none">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* CTA strip */}
      <motion.div
        className="mt-24 bg-[#0d0d0d] text-[#f8f7f4] rounded-none p-12 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to be our next case study?</h2>
        <p className="text-[#a0a0a0] mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Tell us about your AI challenge. We'll tell you if we can help.
        </p>
        <motion.a
          href="mailto:enterprise@wexley.ai"
          className="inline-flex items-center gap-2 font-semibold bg-[#3dafc9] text-[#0d0d0d] px-8 py-4 rounded-none"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Start a conversation →
        </motion.a>
      </motion.div>
    </div>
  );
}
