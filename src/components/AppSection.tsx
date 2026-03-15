import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, UtensilsCrossed, Tv, Sparkles, Check, Smile } from "lucide-react";
import workoutImg from "@/assets/workout-tablet.jpg";
import mealImg from "@/assets/meal-burger.jpg";
import trainerImg from "@/assets/trainer-lunges.jpg";
import { useState, useRef, useEffect } from "react";


const features = [
  {
    icon: <Dumbbell className="w-10 h-10 text-primary" />,
    title: "Quick workouts and a structured plan",
    description: "You'll get a personalised workout plan, designed to improve fitness, strength and burn fat, with new workouts every four weeks to help you progress.",
    image: workoutImg,
    bg: "bg-brand-light-cyan",
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
    title: "Meals tailored to you and your body",
    description: "Enjoy a range of tasty recipes, tailored specifically to your body and goals. Expect simple, delicious dishes and a way of eating you can stick to.",
    image: mealImg,
    bg: "bg-brand-light-pink",
  },
  {
    icon: <Tv className="w-10 h-10 text-primary" />,
    title: "Challenges and Classes",
    description: "Join exclusive Classes each week with Joe and the other Body Coach trainers. Plus get access to incredible fitness challenges and workout series.",
    image: trainerImg,
    bg: "bg-brand-light-pink",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Plus lots more",
    description: "Seasonal recipe drops, in-app planning tools, inspirational messages from Joe, and access to The Body Coach Support Heroes and community to keep you motivated every step of the way.",
    image: trainerImg,
    bg: "bg-brand-light-lime",
  },
];

const AppSection = () => {
 
const navRef = useRef(null);
const navTop = useRef(0);
const [isFixed, setIsFixed] = useState(false);
const [active, setActive] = useState("features");

useEffect(() => {
  if (navRef.current) {
    navTop.current =
      navRef.current.getBoundingClientRect().top + window.scrollY;
  }
}, []);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= navTop.current) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  const sections = ["features", "pricing", "testimonials"];

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActive(visibleSections[0].target.id);
      }
    },
    {
      threshold: [0.2, 0.35, 0.5, 0.65],
      rootMargin: "-120px 0px -20% 0px",
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
  return (
    <section>

      {/* BLUE SECTION */}
  <div className="relative bg-gradient-to-b from-[#1368de] to-[#1368de] text-white">

          <svg
  className="absolute right-0 bottom-0 w-[640px] h-[420px] z-0 pointer-events-none"
  viewBox="0 0 640 420"
  preserveAspectRatio="none"
>
  <path
    d="
      M180 420
      C140 330 220 270 300 250
      C380 230 460 250 520 200
      C580 150 610 90 640 0
      L640 420
      Z
    "
    fill="#0d57c6"
  />
</svg>


      <div className="relative">

   
              {/* DOODLE LEFT */}
<div className="absolute left-[10%] top-[180px] text-brand-lime opacity-70 rotate-12 text-5xl">
  〰
</div>

{/* DOODLE RIGHT */}
<div className="absolute right-[12%] top-[200px] text-brand-cyan opacity-70 -rotate-12 text-5xl">
  〰
</div>

{/* DOODLE CENTER */}
<div className="absolute left-[45%] top-[320px] text-pink-300 opacity-70 rotate-6 text-4xl">
  〰
</div>

<svg
  className="absolute left-[22%] top-[140px] w-[120px]"
  viewBox="0 0 200 120"
  fill="none"
  stroke="#3ad1c6"
  strokeWidth="10"
  strokeLinecap="round"
>
  <path d="M10 70 C40 10 90 20 120 60 S180 110 190 30" />
</svg>

<svg
  className="absolute right-[18%] top-[150px] w-[100px]"
  viewBox="0 0 200 140"
  fill="none"
  stroke="#d4ff6a"
  strokeWidth="10"
  strokeLinecap="round"
>
  <path d="M20 20 C60 80 120 0 160 60" />
  <path d="M160 60 C180 90 150 120 120 120" />
</svg>

<svg
  className="absolute left-[55%] bottom-[60px] w-[120px]"
  viewBox="0 0 200 160"
  fill="none"
  stroke="#3ad1c6"
  strokeWidth="10"
  strokeLinecap="round"
>
  <path d="M10 100 C80 160 120 20 190 80" />
</svg>



</div>

    {/* ВСЕ SVG и blob фигуры сюда */}



        {/* Title */}
        <div className="text-center py-16 lg:py-24 px-4">
          <motion.h2
            className="heading-hero text-4xl sm:text-5xl lg:text-7xl text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Welcome to<br />The Body Coach App
          </motion.h2>
        </div>

      {/* Sticky Navigation */}
<div className="hidden md:block h-[88px]">
  <div
    ref={navRef}
    className={`bg-[#1368de] transition-all ${
      isFixed ? "fixed top-[92px] left-0 w-full z-40" : "relative z-10"
    }`}
  >
    <div className="flex justify-center gap-10 py-6">
      <a
        href="#features"
        className={`font-heading font-bold tracking-wider text-primary-foreground pb-2 border-b-2 transition
${active === "features"
  ? "border-brand-cyan text-white"
  : "border-transparent hover:border-brand-cyan"}
`}
      >
        FEATURES
      </a>

      <a
        href="#pricing"
        className={`font-heading font-bold tracking-wider text-primary-foreground pb-2 border-b-2 transition
${active === "pricing"
  ? "border-brand-cyan text-white"
  : "border-transparent hover:border-brand-cyan"}
`}
      >
        PRICING & BENEFITS
      </a>

      <a
        href="#testimonials"
        className={`font-heading font-bold tracking-wider text-primary-foreground pb-2 border-b-2 transition
${active === "testimonials"
  ? "border-brand-cyan text-white"
  : "border-transparent hover:border-brand-cyan"}
`}
      >
        TESTIMONIALS
      </a>
    </div>
  </div>
</div>
        {/* HERO INFO */}
        <div className="relative text-center max-w-4xl mx-auto px-6 pb-24 pt-10">

          <div className="absolute left-10 top-10 text-brand-lime opacity-60 rotate-12 text-5xl">
            〰
          </div>

          <div className="absolute right-12 bottom-8 text-brand-cyan opacity-60 -rotate-12 text-5xl">
            〰
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Dumbbell className="w-8 h-8 text-brand-lime" />
            </div>
          </div>

          <h3 className="heading-hero text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
            A lifestyle change you<br />can actually stick to
          </h3>

          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            There are so many reasons why sticking to a fitness or food programme can
            be challenging, and our philosophy has always been to keep things simple.
            Our principles have helped change millions of lives around the world.
          </p>

        </div>

      </div>

     

      
   {/* FEATURES */}
<div
  id="features"
  className="relative bg-brand-light-cyan pt-24 overflow-hidden"
>

  {/* BIG DOODLE BACKGROUND */}
  <svg
    className="absolute left-1/2 top-10 md:top-20 -translate-x-1/2 w-[260vw] md:w-[300vw] h-[400px] md:h-[700px] opacity-15 md:opacity-10 pointer-events-none"
    viewBox="-600 0 2400 600"
    fill="none"
    stroke="currentColor"
    strokeWidth="180"
  >
    <path
      d="M-400 400
         C200 0 600 0 1000 300
         S1800 600 2200 200"
      className="text-brand-blue"
    />
  </svg>

  {/* BOTTOM DOODLE */}
  <svg
    className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 w-[300vw] h-[700px] opacity-10 pointer-events-none"
    viewBox="-600 0 2400 600"
    fill="none"
    stroke="currentColor"
    strokeWidth="160"
  >
    <path
      d="M-500 150
         C200 500 800 0 1400 350
         S2200 500 2600 200"
      className="text-brand-blue"
    />
  </svg>

  {features.map((feature, i) => (
    <div key={i} className="container mx-auto px-4 py-8 lg:py-12 relative">

      {/* decorative lines */}
      <div className="absolute -left-10 top-10 text-brand-lime opacity-40 rotate-12 text-5xl">
        〰
      </div>

      <div className="absolute -right-10 bottom-10 text-brand-cyan opacity-40 -rotate-12 text-5xl">
        〰
      </div>

      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

        {/* IMAGE */}
        <motion.div
          className={`w-full flex justify-center ${
            i % 2 !== 0 ? "lg:order-2" : ""
          }`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="rounded-2xl shadow-2xl w-full max-w-[480px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className={`max-w-xl ${
            i % 2 !== 0 ? "lg:order-1" : ""
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {feature.icon}

          <h3 className="heading-hero text-3xl sm:text-4xl lg:text-5xl text-primary mt-4 mb-4">
            {feature.title}
          </h3>

          <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
            {feature.description}
          </p>

        </motion.div>

      </div>

    </div>
  ))}
</div>


      <AboutSection />

      
     

      {/* BENEFITS (OVERLAP) */}
      <BenefitsSection />

      

    </section>
  );
};

/* ─── Pricing Plan Cards ─── */
const plans = [
  {
    name: "Starter",
    price: "£9.99",
    period: "per month",
    description: "Perfect for beginners looking to kickstart their fitness journey",
    features: [
      "Structured workout cycles",
      "Basic meal plans",
      "Access to community",
      "Weekly progress tracking",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "£7.50",
    period: "per month (billed yearly)",
    description: "Our most popular plan — best value for committed transformations",
    features: [
      "Everything in Starter",
      "Personalised meal plans",
      "Live Classes with Joe",
      "Exclusive challenges",
      "In-app planning tools",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Monthly",
    price: "£14.99",
    period: "per month",
    description: "Full access with flexible month-to-month billing",
    features: [
      "Everything in Pro",
      "Cancel anytime",
      "Full recipe library",
      "All workout programmes",
      "Body Coach support group",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const benefits = [
    "Structured workout cycles tailored to you",
    "A meal plan designed for your body",
    "Unlimited new cycles of content",
    "In-app planning tools to stay on track",
    "Exclusive Body Coach support group",
    "Mixed, pescatarian, veggie and vegan meals",
    "Train-a-long with Joe every workout",
  ];

  return (
    <div className="section-blue py-16 lg:py-24 px-4">
      <div className="text-center mb-16">
        <h2 className="heading-hero text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-4">
         Get start right now <br />your journey today
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto">
          Choose the plan that works for you. All plans include full access to workouts, recipes and the Body Coach community.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="container mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
              plan.popular
                ? "bg-brand-lime text-brand-blue-dark scale-105 shadow-2xl"
                : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold tracking-widest px-6 py-1.5 rounded-full uppercase">
                Most Popular
              </div>
            )}

            <h3 className="heading-hero text-3xl lg:text-4xl mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="heading-hero text-4xl lg:text-5xl">{plan.price}</span>
            </div>
            <p className={`text-sm mb-4 ${plan.popular ? "text-brand-blue-dark/70" : "text-primary-foreground/50"}`}>
              {plan.period}
            </p>
            <p className={`text-sm mb-6 leading-relaxed ${plan.popular ? "text-brand-blue-dark/80" : "text-primary-foreground/70"}`}>
              {plan.description}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-brand-lime"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-full font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "bg-primary text-primary-foreground hover:shadow-xl"
                : "bg-brand-lime text-brand-blue-dark hover:shadow-lg"
            }`}>
              GET STARTED
            </button>
          </motion.div>
        ))}
      </div>

      {/* Benefits + store buttons */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-24 max-w-5xl">
        <div className="space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-7 h-7 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" strokeWidth={3} />
              </div>
              <span className="text-primary-foreground font-body font-medium text-base">{b}</span>
            </motion.div>
          ))}
        </div>

      
      </div>
    </div>
  );
};
const AboutSection = () => {
  return (
    <section className="relative bg-[#dbe7c4] overflow-hidden pt-32 pb-48">

      {/* DOODLE TOP */}
      <svg
        className="absolute left-[10%] top-[120px] w-[120px] opacity-60"
        viewBox="0 0 200 200"
        fill="none"
        stroke="#b9e55e"
        strokeWidth="14"
        strokeLinecap="round"
      >
        <path d="M10 150 C60 20 150 40 180 120" />
      </svg>

      {/* DOODLE RIGHT */}
      <svg
        className="absolute right-[18%] top-[260px] w-[220px] opacity-70"
        viewBox="0 0 500 500"
        fill="none"
        stroke="#b9e55e"
        strokeWidth="18"
        strokeLinecap="round"
      >
        <path d="M40 420 C200 120 420 150 460 300" />
      </svg>

      {/* DOODLE BOTTOM */}
      <svg
        className="absolute left-[40%] bottom-[160px] w-[180px] opacity-60"
        viewBox="0 0 300 300"
        fill="none"
        stroke="#b9e55e"
        strokeWidth="14"
        strokeLinecap="round"
      >
        <path d="M20 200 C120 40 200 80 260 160" />
      </svg>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-8 relative z-30">

        {/* LEFT TEXT */}
        <div className="max-w-xl">

         <div className="mb-4">
  <Smile className="w-8 h-8 text-blue-700" strokeWidth={2.5} />
</div>

          <h2 className="text-5xl font-bold text-blue-700 mb-6">
            About Joe
          </h2>

          <p className="text-lg text-blue-900/80 leading-relaxed mb-8">
            Joe Wicks, also known as The Body Coach, has helped millions of
            people around the world transform their lives through simple
            workouts and delicious recipes.
          </p>

          <p className="text-lg text-blue-900/80 leading-relaxed mb-10">
            His mission is to make fitness and healthy eating accessible
            for everyone — no matter your level, schedule, or experience.
          </p>

          {/* BUTTON */}
          <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition">
            Learn More
          </button>

        </div>

        {/* IMAGE SHAPE */}
        <div className="relative w-full h-[460px] flex justify-center">

          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <clipPath id="blob">
                <path
                  d="
                  M90,40
                  C200,-20 380,40 430,160
                  C480,280 420,420 300,460
                  C180,500 60,420 40,300
                  C20,180 40,80 90,40
                  Z
                "
                />
              </clipPath>
            </defs>

            <image
              href={trainerImg}
              width="500"
              height="500"
              clipPath="url(#blob)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

        </div>

      </div>

    </section>
  );
};


const BenefitsSection = () => {
  return (
    <div id="pricing" className="relative">

      {/* WAVE */}
      <div className="absolute -top-[120px] left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px] block"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,80
              C240,0 480,0 720,60
              C960,120 1200,40 1440,80
              L1440,120
              L0,120
              Z
            "
            fill="hsl(220 100% 40%)"
          />
        </svg>
      </div>

      {/* BLUE SECTION */}
      <section className="section-blue pt-32 pb-24 px-4 relative z-20">

        <div className="text-center mb-20">
          <h2 className="heading-hero text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
            Choose your plan
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Get full access to workouts, recipes and exclusive Body Coach content.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="container mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-brand-lime text-brand-blue-dark scale-105 shadow-2xl"
                  : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold tracking-widest px-6 py-1.5 rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="heading-hero text-3xl mb-2">{plan.name}</h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="heading-hero text-5xl">{plan.price}</span>
              </div>

              <p className={`text-sm mb-4 ${plan.popular ? "text-brand-blue-dark/70" : "text-primary-foreground/50"}`}>
                {plan.period}
              </p>

              <p className={`text-sm mb-6 leading-relaxed ${plan.popular ? "text-brand-blue-dark/80" : "text-primary-foreground/70"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-primary" : "text-brand-lime"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:shadow-xl"
                    : "bg-brand-lime text-brand-blue-dark hover:shadow-lg"
                }`}
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
};



export default AppSection;
