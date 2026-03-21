import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const STRATEGY_EMAIL = "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "FAQ", path: "/faq" },
];

const storiesLinks = [
  { label: "Blog", subtitle: "Event growth articles & tips", path: "/blog" },
  { label: "Case Study", subtitle: "Real results from real events", path: "/case-study" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [mobileStoriesOpen, setMobileStoriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileStoriesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-navbar" : "glass-navbar-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-20">
          <Logo variant="light" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-ef-lime after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                  location.pathname === link.path
                    ? "text-white after:scale-x-100 after:origin-left"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Stories dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setStoriesOpen(true)}
              onMouseLeave={() => setStoriesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  ["/blog", "/case-study"].includes(location.pathname)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Stories
                <motion.span
                  animate={{ rotate: storiesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {storiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-[rgba(1,5,202,0.2)] border-t-2 border-t-[#0105ca] overflow-hidden"
                    style={{
                      background: "rgba(9,0,29,0.92)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    {storiesLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 transition-all duration-200 hover:bg-[rgba(1,5,202,0.1)] group border-l-2 border-transparent hover:border-[#9ee106]"
                      >
                        <span className="text-sm font-medium text-white/90 group-hover:text-white block">
                          {item.label}
                        </span>
                        <span className="text-xs text-white/40 group-hover:text-white/60">
                          {item.subtitle}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={STRATEGY_EMAIL}
              className="bg-ef-red text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.03] glow-red hover:shadow-[0_0_30px_rgba(223,0,0,0.4)]"
            >
              Book a Strategy Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-navbar px-6 pb-6 pt-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.path ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Stories accordion */}
            <button
              onClick={() => setMobileStoriesOpen(!mobileStoriesOpen)}
              className="text-base font-medium py-2 text-white/70 flex items-center justify-between w-full"
            >
              Stories
              <motion.span
                animate={{ rotate: mobileStoriesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence>
              {mobileStoriesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {storiesLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block pl-4 py-2 text-sm transition-colors ${
                        location.pathname === item.path ? "text-white" : "text-white/50"
                      }`}
                    >
                      {item.label}
                      <span className="block text-xs text-white/30">{item.subtitle}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={STRATEGY_EMAIL}
              onClick={() => setMobileOpen(false)}
              className="bg-ef-red text-white font-semibold px-5 py-3 rounded-full mt-2 transition-all duration-300 hover:scale-[1.03] glow-red text-center"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
