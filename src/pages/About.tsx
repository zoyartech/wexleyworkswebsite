import { TEAM } from "@/data/shared";

const container = "mx-auto max-w-[1200px] px-5 md:px-10";

const VALUES = [
  { title: "Clarity over complexity", desc: "Enterprise AI is already hard. We don't make it harder. Every recommendation we make is defensible, documented and achievable." },
  { title: "Strategy before tooling", desc: "We ask why before we ask how. The right model for the wrong problem is still the wrong model." },
  { title: "Accountable at every stage", desc: "We don't disappear after discovery. We stay engaged through deployment and into production." },
];

export default function About() {
  return (
    <>
      <section aria-labelledby="about-h" className={`${container} pt-[clamp(64px,8vw,104px)] pb-[clamp(64px,7vw,96px)]`}>
        <p className="wx-eyebrow mb-6">About us</p>
        <h1 id="about-h" className="wx-h1 max-w-[14em]">
          A studio that thinks <em>before</em> it builds.
        </h1>
        <p className="mt-8 max-w-[36em] text-[clamp(18px,1.6vw,21px)] text-body">
          Founded in 2018, Wexley is an independent AI advisory and engineering studio. We work with enterprise leaders who believe that getting AI right is worth taking the time to do it properly. We stay lean on purpose: a small team means the people who design your governance are the people who build it, which is why our work is thorough, compliant and documented from day one.
        </p>
      </section>

      <section aria-labelledby="values-h" className="border-y border-rule bg-band">
        <div className={`${container} py-[clamp(64px,7vw,96px)]`}>
          <h2 id="values-h" className="wx-eyebrow mb-10">How we work</h2>
          <div className="flex flex-wrap gap-x-10 gap-y-12">
            {VALUES.map((v, i) => (
              <div key={v.title} className="min-w-0 flex-[1_1_280px] border-t-2 border-ink pt-[22px]">
                <p className="m-0 font-mono text-[13px] text-accent">0{i + 1}</p>
                <h3 className="mt-2 mb-3 font-display text-[27px] font-normal leading-[1.15] tracking-[-0.015em]">{v.title}</h3>
                <p className="m-0 text-[16.5px] text-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="team-h" className={`${container} py-[clamp(80px,9vw,128px)]`}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="min-w-0 flex-[1_1_480px]">
            <p className="wx-eyebrow mb-[18px]">The team</p>
            <h2 id="team-h" className="wx-h2">
              People who've <em>done this before.</em>
            </h2>
          </div>
          <p className="m-0 max-w-[28em] flex-[1_1_320px] text-body">
            Every Wexley practitioner has worked inside enterprise environments, not just alongside them.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-12 p-0 md:grid-cols-3">
          {TEAM.map((person) => (
            <li key={person.name}>
              <div className="mb-5 aspect-square overflow-hidden rounded-md bg-band">
                <img src={person.img} alt={person.name} loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
              <h3 className="m-0 font-display text-[22px] font-normal leading-tight">{person.name}</h3>
              <p className="mt-1 mb-0 text-[15px] text-muted">{person.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="join-h" className="bg-graphite text-paper">
        <div className={`${container} py-[clamp(72px,8vw,112px)] text-center`}>
          <h2 id="join-h" className="wx-h2">
            Want to work with <em className="text-sage">this team?</em>
          </h2>
          <p className="mx-auto mt-6 mb-10 max-w-[32em] text-[18px] text-graphite-body">
            We take on a limited number of engagements each quarter. If you're working on something that matters, let's talk.
          </p>
          <a href="mailto:enterprise@wexley.ai" className="wx-btn wx-btn-light">
            Start a conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
