import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import wexLogo from "@/imports/wex-.png";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/work" },
  { label: "Articles", href: "/articles" },
  { label: "About Us", href: "/about" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif" }} className="bg-[#f8f7f4] text-[#0d0d0d]">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f8f7f4]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={wexLogo}
              alt="Wexley logo"
              className="w-18 h-18 object-contain rounded-none"
              whileHover={shouldReduce ? {} : { rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
            />
            <span className="text-xl font-bold tracking-tight">Wexley</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              const isExternal = href.startsWith("/#");
              return isExternal ? (
                <a
                  key={label}
                  href={href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${active ? "text-[#0d0d0d]" : "text-[#6b6b6b] hover:text-[#0d0d0d]"}`}
                >
                  {label}
                  {active && (
                    <motion.span layoutId="nav-underline" className="absolute -bottom-0.5 left-0 w-full h-px bg-[#0d0d0d]" />
                  )}
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${active ? "text-[#0d0d0d]" : "text-[#6b6b6b] hover:text-[#0d0d0d]"}`}
                >
                  {label}
                  {active && (
                    <motion.span layoutId="nav-underline" className="absolute -bottom-0.5 left-0 w-full h-px bg-[#0d0d0d]" />
                  )}
                </Link>
              );
            })}
            <motion.a
              href="/#contact"
              className="text-sm font-semibold bg-[#0d0d0d] text-[#f8f7f4] py-2.5 rounded-[10px]"
              style={{ paddingLeft: 20, paddingRight: 20, boxShadow: "rgba(0,0,0,0.25) 0px 4px 4px 0px" }}
              whileHover={shouldReduce ? {} : { scale: 1.04, backgroundColor: "#333" }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              Contact Us
            </motion.a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span className="block w-6 h-0.5 bg-[#0d0d0d] origin-center" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} transition={{ duration: 0.22 }} />
            <motion.span className="block w-6 h-0.5 bg-[#0d0d0d]" animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} />
            <motion.span className="block w-6 h-0.5 bg-[#0d0d0d] origin-center" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} transition={{ duration: 0.22 }} />
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-[#f8f7f4] border-t border-[#e0ddd8] px-6 py-6 flex flex-col gap-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {NAV_LINKS.map(({ label, href }) =>
                href.startsWith("/#") ? (
                  <a key={label} href={href} className="text-lg font-medium">{label}</a>
                ) : (
                  <Link key={label} to={href} className="text-lg font-medium">{label}</Link>
                )
              )}
              <a href="/#contact" className="text-lg font-semibold text-[#3dafc9]">
                Book a Strategy Session →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[#e0ddd8] px-6 py-10 bg-[#7eff49]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={wexLogo} alt="Wexley" className="w-7 h-7 object-contain rounded-none" />
            <span className="font-bold text-sm">Wexley</span>
          </div>
          <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 Wexley AI Advisory. Enterprise-grade. Audit-ready.
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "Privacy Policy", "Terms"].map((s) => (
              <a key={s} href="#" className="text-xs font-medium text-[#6b6b6b] hover:text-[#0d0d0d] transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
