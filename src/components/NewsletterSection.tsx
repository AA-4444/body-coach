import { Instagram, Mail, MapPin, MessageCircle, Monitor, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const NewsletterSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="bg-[#ffd6e7] py-12 lg:py-20 px-4 text-center">
        <Reveal
          as="h2"
          className="heading-hero text-3xl sm:text-4xl lg:text-6xl text-foreground mb-5"
        >
          Начните с персональной
          <br />
          консультации
        </Reveal>

        <Reveal
          as="p"
          delay={120}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base lg:text-lg leading-relaxed"
        >
          Разбираем цели, оцениваем состояние тела, намечаем стратегию - без
          обязательств.
        </Reveal>

        <Reveal delay={220} className="max-w-xl mx-auto mb-10">
          <button className="w-full h-[52px] rounded-full bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            Записаться
          </button>
        </Reveal>

        <Reveal delay={320}>
          <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-foreground/10 bg-white/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/50"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Instagram className="h-6 w-6" />
              </div>

              <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-1">
                Instagram
              </p>

              <p className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                @victoria
              </p>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-foreground/10 bg-white/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/50"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-lime text-brand-blue-dark">
                <MessageCircle className="h-6 w-6" />
              </div>

              <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-1">
                WhatsApp
              </p>

              <p className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                Написать
              </p>
            </a>

            <a
              href="mailto:hello@example.com"
              className="group rounded-3xl border border-foreground/10 bg-white/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/50"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>

              <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-1">
                Email
              </p>

              <p className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                hello@example.com
              </p>
            </a>

            <div className="rounded-3xl border border-foreground/10 bg-white/35 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-lime text-brand-blue-dark">
                <MapPin className="h-6 w-6" />
              </div>

              <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-1">
                Локация
              </p>

              <p className="font-heading text-lg text-foreground">
                Милан, Италия
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mx-auto mt-6 flex max-w-4xl flex-col sm:flex-row gap-4">
            <div className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-white/35 px-5 py-4 text-primary">
              <Monitor className="h-6 w-6" />
              <span className="font-heading font-bold uppercase tracking-wider text-sm">
                Онлайн
              </span>
            </div>

            <div className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-brand-lime/70 px-5 py-4 text-brand-blue-dark">
              <Send className="h-6 w-6" />
              <span className="font-heading font-bold uppercase tracking-wider text-sm">
                Офлайн
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Pink to navy wave */}
      <div className="-mb-px bg-[#ffd6e7]">
        <svg
          viewBox="0 0 1440 120"
          className="block h-[82px] w-full translate-y-px lg:h-[112px]"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0,0
              C180,40 320,95 520,95
              C720,95 860,25 1040,25
              C1220,25 1320,70 1440,110
              L1440,120
              L0,120
              Z
            "
            fill="hsl(220 80% 12%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default NewsletterSection;
