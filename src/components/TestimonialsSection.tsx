import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      'So excited to discover there was finally an app, I think it was what we were all waiting for and it doesn\'t disappoint! Everything in one place with some great design features and so easy to use. I love it!"',
    name: "Vanessa",
  },
  {
    quote:
      'This app has completely changed my routine. The workouts are amazing and the recipes are so easy to follow. Best investment I\'ve made for my health!"',
    name: "Sarah",
  },
  {
    quote:
      'I love how everything is organized. The meal plans, the workouts, the progress tracking - it\'s all there. Highly recommend to anyone looking to get fit!"',
    name: "James",
  },
  {
    quote:
      'The community aspect is what keeps me going. Everyone is so supportive and the coaches are incredible. Five stars all the way!"',
    name: "Emily",
  },
];

const swipeConfidenceThreshold = 80;

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveSlide((s) => (s + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveSlide((s) => (s - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (i === activeSlide) return;
      setDirection(i > activeSlide ? 1 : -1);
      setActiveSlide(i);
    },
    [activeSlide]
  );

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -swipeConfidenceThreshold) {
      goNext();
    } else if (info.offset.x > swipeConfidenceThreshold) {
      goPrev();
    }
  };

  return (
    <section className="w-full">
      <div className="relative overflow-hidden bg-testimonial-bg py-20 md:py-24 lg:py-32">
        {/* Decorative blue blob - left */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
            <ellipse
              cx="100"
              cy="200"
              rx="180"
              ry="200"
              fill="hsl(var(--blob-blue))"
              fillOpacity="0.08"
            />
            <circle
              cx="150"
              cy="320"
              r="80"
              fill="hsl(var(--blob-blue))"
              fillOpacity="0.06"
            />
          </svg>
        </div>

        {/* Decorative peach swirl - right */}
        <div className="absolute -right-16 top-1/4 pointer-events-none">
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
            <path
              d="M150 50 C250 50, 280 150, 200 200 C120 250, 250 300, 250 350"
              stroke="hsl(var(--blob-peach))"
              strokeWidth="40"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M180 80 C260 100, 270 180, 210 220 C140 270, 230 310, 240 370"
              stroke="hsl(var(--blob-peach))"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="relative z-10 heading-hero text-center text-testimonial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-12 md:mb-16 italic">
          What Body Coachers
          <br />
          are saying
        </h2>

        {/* Quote carousel */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 md:px-16 min-h-[320px] md:min-h-[280px] lg:min-h-[320px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.9}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="cursor-grab active:cursor-grabbing touch-pan-y"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-serif text-testimonial-dot/30 leading-none mb-4 md:mb-6">
                &ldquo;
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] leading-relaxed text-testimonial-quote font-medium mb-6 md:mb-8 max-w-3xl">
                {testimonials[activeSlide].quote}
              </p>

              <p className="text-lg md:text-xl lg:text-2xl font-bold text-testimonial-name">
                {testimonials[activeSlide].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows - only desktop/tablet */}
        <button
          onClick={goPrev}
          className="hidden md:flex absolute left-1/2 -translate-x-[420px] lg:-translate-x-[520px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-testimonial-arrow items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-testimonial-arrow-foreground" />
        </button>

        <button
          onClick={goNext}
          className="hidden md:flex absolute left-1/2 translate-x-[420px] lg:translate-x-[520px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-testimonial-arrow items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-testimonial-arrow-foreground" />
        </button>

        {/* Dots */}
        <div className="relative z-10 flex items-center justify-center gap-2 mt-10 md:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${
                activeSlide === i
                  ? "w-3 h-3 bg-testimonial-dot"
                  : "w-2.5 h-2.5 bg-testimonial-dot/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;