import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="relative">
      <div className="bg-background py-12 lg:py-20 px-4 text-center">
        <motion.h2
          className="heading-hero text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to feel stronger,
          <br />
          leaner and more confident?
        </motion.h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base lg:text-lg leading-relaxed">
          Join a programme designed to help you lose weight, build healthy habits and stay consistent
          without extremes. Get the support, structure and guidance you need to finally make progress
          that lasts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-[220px] py-3 rounded-full bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 cursor-pointer">
            SUPPORT
          </button>

          <button className="w-[220px] py-3 rounded-full bg-brand-lime text-brand-blue-dark font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 cursor-pointer">
            PROGRAMS
          </button>
        </div>
      </div>

      {/* White to navy wave */}
      <div className="bg-background">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[80px] lg:h-[110px] block"
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