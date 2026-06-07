import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fitness.jpg";
import mobileHeroImage from "@/assets/mobile-hero.jpg";

const HeroSection = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Desktop image */}
        <img
          src={heroImage}
          alt="Виктория Примасюк — эксперт по трансформации тела"
          className="absolute inset-0 z-0 w-full h-full object-cover hidden sm:block"
        />

        {/* Mobile image */}
        <img
          src={mobileHeroImage}
          alt="Виктория Примасюк — эксперт по трансформации тела"
          className="absolute inset-0 z-0 w-full h-full object-cover block sm:hidden"
        />

        {/* Light dark overlay for better text readability */}
        <div className="absolute inset-0 z-[1] bg-black/35" />

        {/* Decorative strokes — under the text */}
        <svg
          className="absolute inset-0 z-[2] h-full w-full pointer-events-none opacity-45 sm:opacity-70"
          viewBox="0 0 1400 800"
          preserveAspectRatio="none"
        >
          <path
            d="M120 720 Q220 520 340 620 Q450 720 560 560"
            stroke="hsl(322 100% 70%)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 500 }}
          />
          <path
            d="M1040 650 Q1130 760 1220 660 Q1300 570 1370 720"
            stroke="hsl(180 100% 45%)"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 500, animationDelay: "0.3s" }}
          />
        </svg>

        <div className="relative z-10 w-full px-4 text-center">
          <motion.h1
            className="heading-hero text-6xl sm:text-7xl lg:text-9xl text-primary-foreground text-shadow-hero mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Виктория Примасюк
          </motion.h1>

          <motion.p
            className="mx-auto max-w-[320px] sm:max-w-none text-primary-foreground text-base sm:text-xl lg:text-2xl font-body mb-8 opacity-90 leading-snug sm:leading-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Это не тренировки.
            <br /> Это возвращение к себе.
          </motion.p>

          <motion.div
            className="mx-auto flex max-w-[360px] justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#pricing"
              className="inline-flex h-[56px] w-full items-center justify-center rounded-full bg-[#ffd6e7] px-6 text-center font-heading text-base font-bold uppercase tracking-wider text-[#1368de] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Выбрать формат
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-[3]">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 L0,85 C180,70 320,55 480,58 C700,62 860,92 1040,88 C1180,85 1300,68 1440,78 L1440,120 Z"
              fill="#ffd6e7"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
