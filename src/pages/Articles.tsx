import { useState } from "react";
import { Link } from "react-router";
import { ARTICLES } from "@/data/shared";

const CATEGORIES = ["All", "AI Governance", "AI Enablement", "Model Security", "Infrastructure", "Applied AI"];
const container = "mx-auto max-w-[1200px] px-5 md:px-10";

function shortDate(date: string) {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function Articles() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <section aria-labelledby="insights-h" className={`${container} pt-[clamp(64px,8vw,104px)]`}>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-b border-ink pb-10">
          <div>
            <p className="wx-eyebrow mb-6">Wexley perspectives</p>
            <h1 id="insights-h" className="wx-h1">
              Insights<em>.</em>
            </h1>
          </div>
          <p className="m-0 max-w-[24em] text-[16.5px] text-body">
            Practical guidance for enterprise leaders on AI governance, security and deployment at scale.
          </p>
        </div>

        <div role="toolbar" aria-label="Filter by topic" className="flex items-stretch overflow-x-auto border-b border-rule">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`relative flex-shrink-0 whitespace-nowrap px-4 py-4 text-[14px] transition-colors hover:bg-hover ${
                active === cat ? "font-semibold text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {cat}
              {active === cat && <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-ink" />}
            </button>
          ))}
          <span className="ml-auto flex flex-shrink-0 items-center px-4 font-mono text-[12.5px] text-muted">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </span>
        </div>
      </section>

      <section aria-label="Articles" className={`${container} py-14`}>
        {!featured ? (
          <p className="py-28 text-center text-muted">No articles on this topic yet.</p>
        ) : (
          <>
            <Link to={`/articles/${featured.slug}`} className="wx-card mb-14 md:p-12">
              <span className="wx-muted font-mono text-[12.5px] uppercase tracking-[0.1em] text-muted">
                {featured.category} · {shortDate(featured.date)} · Featured
              </span>
              <span className="mt-6 max-w-[22em] font-display text-[clamp(30px,3.6vw,46px)] leading-[1.1] tracking-[-0.02em]">{featured.title}</span>
              <span className="wx-muted mt-5 max-w-[40em] text-[17px] text-muted">{featured.excerpt}</span>
              <span className="mt-8 text-[15.5px] font-semibold">
                Read the article <span aria-hidden="true">→</span>
              </span>
            </Link>

            {rest.length > 0 && (
              <ul className="m-0 list-none border-t border-ink p-0">
                {rest.map((a) => (
                  <li key={a.slug} className="border-b border-rule">
                    <Link to={`/articles/${a.slug}`} className="wx-row">
                      <span className="wx-muted flex-[0_1_290px] font-mono text-[12.5px] uppercase tracking-[0.1em] text-muted">
                        {a.category} · {shortDate(a.date)}
                      </span>
                      <span className="flex min-w-0 flex-[999_1_420px] flex-col gap-2">
                        <span className="font-display text-[26px] leading-[1.25] tracking-[-0.01em]">{a.title}</span>
                        <span className="wx-muted text-[15.5px] text-muted">{a.excerpt}</span>
                      </span>
                      <span className="wx-muted flex-none text-[15px] text-muted">
                        {a.readTime} <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </section>

      <section aria-labelledby="practice-h" className="bg-sage">
        <div className={`${container} flex flex-wrap items-center justify-between gap-8 py-[clamp(56px,6vw,88px)]`}>
          <div className="min-w-0 flex-[1_1_420px]">
            <p className="wx-eyebrow mb-4 text-sage-ink">Work with Wexley</p>
            <h2 id="practice-h" className="wx-h2 text-[clamp(30px,3.4vw,44px)]">
              Ready to put strategy <em>into practice?</em>
            </h2>
          </div>
          <Link to="/#contact" className="wx-btn flex-none">
            Book a strategy call <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
