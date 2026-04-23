import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/BrandLockup";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/story", label: "Story" },
  { to: "/visit", label: "Visit" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onDark = pathname === "/" && !scrolled;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-out-expo ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="group flex items-center" aria-label="The Coffee Bar Collective — Home">
          <BrandLockup variant={onDark ? "light" : "dark"} />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono-label transition-colors duration-300 hover:opacity-100 ${
                  onDark ? "text-cream/80 hover:text-cream" : "text-foreground/70 hover:text-foreground"
                } ${isActive ? (onDark ? "!text-cream" : "!text-foreground") : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://www.google.com/maps/place/The+Coffee+Bar+Collective"
            target="_blank"
            rel="noreferrer"
            className={`font-mono-label px-5 py-2.5 border transition-all duration-500 ease-out-expo ${
              onDark
                ? "border-cream/40 text-cream hover:bg-cream hover:text-ink"
                : "border-foreground/30 text-foreground hover:bg-foreground hover:text-cream"
            }`}
          >
            Find us
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${onDark ? "text-cream" : "text-foreground"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container-editorial py-8 flex flex-col gap-6">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className="font-display text-3xl">
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
