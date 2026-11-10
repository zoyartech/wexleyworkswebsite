import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, Outlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import wexMark from "@/imports/wexley-mark.png";

const NAV_LINKS = [
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/work" },
  { label: "Insights", to: "/articles" },
  { label: "About", to: "/about" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // On a new page, start at the top, or at the section named in the link (/#services, /#contact).
  useEffect(() => {
    setMenuOpen(false);
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
        <nav aria-label="Main" className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-5 py-3 md:px-10">
          <Link to="/" className="flex items-center gap-3 text-ink no-underline" aria-label="Wexley home">
            <img src={wexMark} alt="" className="block h-10 w-10" />
            <span className="font-display text-[25px] font-medium tracking-[-0.01em]">Wexley</span>
          </Link>

          <div className="hidden items-center gap-7 text-[15.5px] font-medium md:flex">
            {NAV_LINKS.map(({ label, to }) =>
              to.startsWith("/#") ? (
                <Link key={label} to={to} className="wx-pill">
                  {label}
                </Link>
              ) : (
                <NavLink key={label} to={to} className="wx-pill">
                  {label}
                </NavLink>
              ),
            )}
            <Link to="/#contact" className="wx-btn wx-btn-sm">
              Book a call
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span className="block h-0.5 w-6 bg-ink" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} transition={{ duration: 0.2 }} />
            <motion.span className="block h-0.5 w-6 bg-ink" animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} />
            <motion.span className="block h-0.5 w-6 bg-ink" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} transition={{ duration: 0.2 }} />
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="overflow-hidden border-t border-rule bg-paper md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-1 px-5 py-5">
                {NAV_LINKS.map(({ label, to }) => (
                  <Link key={label} to={to} className="wx-pill mx-0 font-display text-[22px] text-ink">
                    {label}
                  </Link>
                ))}
                <Link to="/#contact" className="wx-btn mt-3 justify-center">
                  Book a strategy call <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-rule bg-band">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-10 gap-y-5 px-5 py-9 text-[14.5px] text-muted md:px-10">
          <div className="flex items-center gap-3 text-ink">
            <img src={wexMark} alt="" className="block h-7 w-7" />
            <span className="font-display text-[19px] font-medium">Wexley</span>
          </div>
          <p className="m-0">© 2026 Wexley AI Advisory. Enterprise-grade, audit-ready.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {["LinkedIn", "Privacy", "Terms"].map((s) => (
              <a key={s} href="#" className="wx-pill">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
