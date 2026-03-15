import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";

const navLinks = [
  { label: "MISSION", to: "/mission" },
  { label: "WORK", to: "/work" },
  { label: "BLOG", to: "/blog" },
  { label: "SUPPORT", to: "/support" },
];



const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-heading font-bold text-primary-foreground text-[1.05rem] xl:text-[1.12rem] tracking-[0.14em] whitespace-nowrap transition-colors border-b-[3px] pb-1 ${
      isActive
        ? "border-brand-lime text-white"
        : "border-transparent hover:text-brand-lime"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-heading font-bold text-[1.05rem] tracking-[0.14em] transition ${
      isActive ? "text-brand-lime" : "text-[#1368de]"
    }`;

  return (
    <>
      <header className="sticky lg:fixed top-0 left-0 w-full z-50 section-blue">
        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10 xl:px-14">
          <div className="flex items-center justify-between py-3 lg:h-[92px]">
            <Link to="/" className="relative z-[80] flex items-center shrink-0">
              <div className="w-11 h-11 lg:w-[74px] lg:h-[74px] rounded-full border-2 border-brand-cyan flex items-center justify-center">
                <span className="font-heading font-black text-[10px] lg:text-[15px] leading-[0.9] text-brand-lime text-center">
                  the
                  <br />
                  body
                  <br />
                  coach
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center ml-auto">
              <div className="flex items-center gap-10 xl:gap-12 mr-8 xl:mr-10">
                {navLinks.map((link) => (
                  <NavLink key={link.label} to={link.to} className={desktopLinkClass}>
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <Link
                to="/work"
                className="btn-lime text-[0.98rem] xl:text-[1.02rem] px-8 py-4 whitespace-nowrap inline-flex items-center justify-center"
              >
                PROGRAMS
              </Link>
            </nav>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden relative z-[90] w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 0, backgroundColor: "#1368de" }
                      : { rotate: 0, y: -7, backgroundColor: "#ffffff" }
                  }
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="absolute left-0 top-1/2 block h-[2.5px] w-6 rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0, backgroundColor: "#1368de" }
                      : { opacity: 1, scaleX: 1, backgroundColor: "#ffffff" }
                  }
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 block h-[2.5px] w-6 rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: 0, backgroundColor: "#1368de" }
                      : { rotate: 0, y: 7, backgroundColor: "#ffffff" }
                  }
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="absolute left-0 top-1/2 block h-[2.5px] w-6 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className="hidden lg:block h-[92px]" />

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-4 right-4 top-4 z-[70] lg:hidden"
            >
              <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl">
                <div className="flex items-start justify-between px-6 pt-5 pb-3">
                  <Link to="/" className="flex items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-[#1368de] flex items-center justify-center">
                      <span className="font-heading font-black text-[10px] leading-tight text-[#1368de] text-center">
                        the
                        <br />
                        body
                        <br />
                        coach
                      </span>
                    </div>
                  </Link>

                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                    className="relative z-[95] w-10 h-10 flex items-center justify-center"
                  >
                    <div className="relative w-6 h-6">
                      <motion.span
                        initial={{ rotate: 0, y: -7 }}
                        animate={{ rotate: 45, y: 0 }}
                        exit={{ rotate: 0, y: -7 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-1/2 block h-[2.5px] w-6 rounded-full bg-[#1368de]"
                      />
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.12 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 block h-[2.5px] w-6 rounded-full bg-[#1368de]"
                      />
                      <motion.span
                        initial={{ rotate: 0, y: 7 }}
                        animate={{ rotate: -45, y: 0 }}
                        exit={{ rotate: 0, y: 7 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-1/2 block h-[2.5px] w-6 rounded-full bg-[#1368de]"
                      />
                    </div>
                  </button>
                </div>

                <div className="px-8 pb-0 pt-2">
                  <nav className="flex flex-col items-start gap-8">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ delay: 0.03 * index, duration: 0.18 }}
                      >
                        <NavLink to={link.to} className={mobileLinkClass}>
                          {link.label}
                        </NavLink>
                      </motion.div>
                    ))}
                  </nav>

                  

                  {/* Social icons */}
                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <div className="flex items-center gap-5">
                      <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        className="text-[#1368de] hover:text-brand-lime transition-colors"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>

                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="YouTube"
                        className="text-[#1368de] hover:text-brand-lime transition-colors"
                      >
                        <Youtube className="w-6 h-6" />
                      </a>

                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="text-[#1368de] hover:text-brand-lime transition-colors"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>

                      <a
                        href="https://t.me/your_support_username"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Telegram"
                        className="text-[#1368de] hover:text-brand-lime transition-colors"
                      >
                        <Send className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 h-[170px] overflow-hidden bg-[#1c5ed8]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c5ed8] via-[#1c5ed8]/85 to-[#1c5ed8]/55" />

                  <svg
                    viewBox="0 0 1440 140"
                    className="absolute bottom-0 left-0 w-full h-[56px]"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,110 C260,20 520,10 720,60 C920,110 1160,100 1440,40 L1440,140 L0,140 Z"
                      fill="#ffffff"
                      opacity="0.18"
                    />
                  </svg>

                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                    <p className="max-w-[280px] text-white/75 text-[15px] leading-snug mb-5">
                      Start your journey to a fitter,
                      <br />
                      healthier, happier you
                    </p>

                    <Link
                      to="/work"
                      onClick={() => setMobileOpen(false)}
                      className="btn-lime mt-1 inline-flex items-center justify-center"
                    >
                      TRY IT FOR FREE
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;