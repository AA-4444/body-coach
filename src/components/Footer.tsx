import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

const navLinks = [
  { label: "О тренере", to: "/mission" },
  { label: "Экспертиза", to: "/work" },
  { label: "Метод", to: "/work#method" },
  { label: "Результаты", to: "/work#results" },
  { label: "Контакт", to: "/support" },
];

const legalLinks = [
  { label: "Политика конфиденциальности", to: "/privacy-policy" },
  { label: "Условия использования", to: "/terms" },
  { label: "Политика cookie", to: "/cookie-policy" },
];

const Footer = () => {
  return (
    <footer className="section-navy py-16 px-4 overflow-hidden">
      <div className="container mx-auto grid gap-12 md:grid-cols-3 items-start">
        {/* Brand / logo */}
        <Reveal>
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-brand-cyan flex items-center justify-center">
                <span className="font-heading font-black text-[11px] leading-[0.9] text-brand-lime text-center">
                  body
                  <br />
                  coach
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Виктория Примасюк — эксперт по трансформации тела,
              функциональному движению и системной работе с телом. Частная
              практика в Милане, онлайн и офлайн.
            </p>
          </div>
        </Reveal>

        {/* Site navigation */}
        <Reveal delay={120}>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm tracking-wider mb-5 uppercase">
              Навигация
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
        </Reveal>

        {/* Contacts + legal */}
        <Reveal delay={240}>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm tracking-wider mb-5 uppercase">
              Контакты
            </h4>

            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="min-w-11 min-h-11 flex items-center justify-center text-primary-foreground/70 hover:text-brand-lime transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="min-w-11 min-h-11 flex items-center justify-center text-primary-foreground/70 hover:text-brand-lime transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>

              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="min-w-11 min-h-11 flex items-center justify-center text-primary-foreground/70 hover:text-brand-lime transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>

              <a
                href="https://t.me/your_support_username"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="min-w-11 min-h-11 flex items-center justify-center text-primary-foreground/70 hover:text-brand-lime transition-colors"
              >
                <Send className="w-6 h-6" />
              </a>
            </div>

            <div className="mb-8 space-y-2 text-sm text-primary-foreground/60">
              <p>
                <span className="text-primary-foreground/80">Локация:</span>{" "}
                Милан, Италия
              </p>
              <p>
                <span className="text-primary-foreground/80">Формат:</span>{" "}
                Онлайн / Офлайн
              </p>
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
        </Reveal>
      </div>

      <Reveal delay={320}>
        <div className="container mx-auto mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">
            © 2026 Виктория Примасюк. Все права защищены.
          </p>

          <p className="text-primary-foreground/30 text-xs text-center md:text-right">
            Точность, глубина и результат, который остаётся.
          </p>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;