import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  return (
    <>
      
      {/* Hero */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Athletic training outdoors"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30" />

        {/* Decorative strokes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path
            d="M300 700 Q400 200 500 400 Q600 600 700 300"
            stroke="hsl(72 100% 50%)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 500 }}
          />
          <path
            d="M800 200 Q900 500 1000 300 Q1100 100 1200 400"
            stroke="hsl(180 100% 45%)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 500, animationDelay: "0.3s" }}
          />
        </svg>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="heading-hero text-5xl sm:text-7xl lg:text-9xl text-primary-foreground text-shadow-hero mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SAY HELLO TO A REAL<br />GAME CHANGER
          </motion.h1>
          <motion.p
            className="text-primary-foreground text-lg sm:text-xl lg:text-2xl font-body mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Start your journey to a fitter,<br />healthier, happier you
          </motion.p>
          <motion.button
            className="btn-lime-large"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            TRY IT FOR FREE
          </motion.button>
        </div>

     <div className="absolute bottom-0 left-0 right-0">
  <svg
    viewBox="0 0 1440 120"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full block"
    preserveAspectRatio="none"
  >
    <path
      d="M0,120 L0,85 C180,70 320,55 480,58 C700,62 860,92 1040,88 C1180,85 1300,68 1440,78 L1440,120 Z"
      fill="#1368de"
    />
  </svg>
</div>
      </section>
    </>
  );
};

export default HeroSection;
