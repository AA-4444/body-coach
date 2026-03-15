import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Mission", to: "/mission" },
  { label: "Work", to: "/work" },
  { label: "Blog", to: "/blog" },
  { label: "Support", to: "/support" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];

const Footer = () => {
  return (
    <footer className="section-navy py-16 px-4">
      <div className="container mx-auto grid gap-12 md:grid-cols-3 items-start">
        {/* Brand / logo */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-14 h-14 rounded-full border-2 border-brand-cyan flex items-center justify-center">
              <span className="font-heading font-black text-[11px] leading-[0.9] text-brand-lime text-center">
                the
                <br />
                body
                <br />
                coach
              </span>
            </div>
          </Link>

          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Helping women feel stronger, leaner and more confident with simple workouts,
            better habits and food that fits real life.
          </p>
        </div>

        {/* Site navigation */}
        <div>
          <h4 className="font-heading font-bold text-primary-foreground text-sm tracking-wider mb-5 uppercase">
            Navigate
          </h4>

          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/70 text-sm hover:text-brand-lime transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + legal */}
        <div>
          <h4 className="font-heading font-bold text-primary-foreground text-sm tracking-wider mb-5 uppercase">
            Follow & Info
          </h4>

          <div className="flex gap-4 mb-8">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-primary-foreground/70 hover:text-brand-lime transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-primary-foreground/70 hover:text-brand-lime transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-primary-foreground/70 hover:text-brand-lime transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <a
              href="https://t.me/your_support_username"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="text-primary-foreground/70 hover:text-brand-lime transition-colors"
            >
              <Send className="w-6 h-6" />
            </a>
          </div>

          <ul className="space-y-3">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/60 text-sm hover:text-brand-lime transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/40 text-xs">
          © 2026 The Body Coach. All rights reserved.
        </p>

        <p className="text-primary-foreground/30 text-xs text-center md:text-right">
          Built for healthier habits, stronger bodies and lasting confidence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;