import { motion } from "motion/react";
import { TEAM } from "@/data/shared";

const VALUES = [
  { title: "Clarity over complexity", desc: "Enterprise AI is already hard. We don't make it harder. Every recommendation we make is defensible, documented, and achievable." },
  { title: "Strategy before tooling", desc: "We ask why before we ask how. The right model for the wrong problem is still the wrong model." },
  { title: "Accountability at every stage", desc: "We don't disappear after the discovery phase. We stay engaged through deployment and into production." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
            We are a studio that thinks <em className="not-italic text-[#3dafc9]">before</em> it builds.
          </h1>
          <p className="mt-8 text-xl text-[#6b6b6b] max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Founded in 2018, Wexley is an independent AI advisory and engineering studio. We work with enterprise leaders who believe that getting AI right is worth taking the time to do it properly.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto">
          <motion.p className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            How we work
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: i * 0.1 }}>
                <div className="w-8 h-px bg-[#3dafc9] mb-6" />
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b6b6b] mb-4">The Team</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">People who've done this before.</h2>
          <p className="mt-4 text-lg text-[#6b6b6b] max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Every Wexley practitioner has worked inside enterprise environments — not just alongside them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14">
          {TEAM.map((person, i) => (
            <motion.div key={person.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group">
              <div className="overflow-hidden rounded-none bg-[#e0ddd8] aspect-square mb-5">
                <motion.img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.55 }}
                />
              </div>
              <h3 className="text-lg font-bold leading-tight">{person.name}</h3>
              <p className="text-sm text-[#6b6b6b] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{person.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#0d0d0d] text-[#f8f7f4] px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Want to work with this team?
          </motion.h2>
          <motion.p className="text-[#a0a0a0] text-lg max-w-lg mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            We take on a limited number of engagements each quarter. If you're working on something that matters, let's talk.
          </motion.p>
          <motion.a href="mailto:enterprise@wexley.ai"
            className="inline-flex items-center gap-2 font-semibold bg-[#3dafc9] text-[#0d0d0d] px-8 py-4 rounded-[10px]"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Start a conversation →
          </motion.a>
        </div>
      </section>
    </div>
  );
}
