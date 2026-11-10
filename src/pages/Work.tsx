import { Link } from "react-router";
import { CASE_STUDIES } from "@/data/shared";

const container = "mx-auto max-w-[1200px] px-5 md:px-10";

export default function Work() {
  return (
    <>
      <section aria-labelledby="work-h" className={`${container} pt-[clamp(64px,8vw,104px)] pb-14`}>
        <p className="wx-eyebrow mb-6">Our work</p>
        <h1 id="work-h" className="wx-h1">
          Case <em>studies.</em>
        </h1>
        <p className="mt-8 max-w-[34em] text-[clamp(18px,1.6vw,21px)] text-body">
          Real engagements and measurable outcomes. Every project starts with a hard problem and ends in production.
        </p>
      </section>

      <section aria-label="All case studies" className={`${container} pb-[clamp(80px,9vw,128px)]`}>
        <div className="grid gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.slug} to={`/work/${cs.slug}`} className="wx-card">
              <span className="wx-muted font-mono text-[12.5px] uppercase tracking-[0.12em] text-muted">
                {cs.industry} · {cs.client}
              </span>
              <span className="mt-6 font-display text-[clamp(26px,2.6vw,34px)] leading-[1.15] tracking-[-0.02em]">{cs.headline}</span>
              <span className="wx-muted mt-4 text-[16px] text-muted">{cs.summary}</span>
              <span className="mt-7 border-t border-rule pt-5 font-display text-[22px] text-accent">{cs.result}</span>
              <span className="mt-4 flex flex-wrap gap-2">
                {cs.services.map((s) => (
                  <span key={s} className="rounded-full border border-rule bg-paper px-3 py-1 text-[13px] text-body">
                    {s}
                  </span>
                ))}
              </span>
              <span className="mt-auto pt-7 text-[15.5px] font-semibold">
                Read the case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="next-h" className="bg-sage">
        <div className={`${container} flex flex-wrap items-center justify-between gap-8 py-[clamp(64px,7vw,96px)]`}>
          <div className="min-w-0 flex-[1_1_480px]">
            <h2 id="next-h" className="wx-h2">
              Ready to be our <em>next case study?</em>
            </h2>
            <p className="mt-5 max-w-[30em] text-[18px] text-body">Tell us about your AI challenge. We'll tell you plainly whether we can help.</p>
          </div>
          <a href="mailto:enterprise@wexley.ai" className="wx-btn flex-none">
            Start a conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
