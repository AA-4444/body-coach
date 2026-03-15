import { motion } from "framer-motion";
import { Check, Dumbbell, Star, UtensilsCrossed } from "lucide-react";
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

import heroWomanImg from "@/assets/workout-tablet.jpg";
import homeWorkoutImg from "@/assets/workout-tablet.jpg";
import appPhonesImg from "@/assets/workout-tablet.jpg";
import foodImg from "@/assets/meal-burger.jpg";

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

const stats = [
  {
    value: "600+",
    label: "Guided workouts",
    Icon: Dumbbell,
  },
  {
    value: "4.8",
    label: "App store rating",
    Icon: Star,
  },
  {
    value: "1000+",
    label: "Feel-good recipes",
    Icon: UtensilsCrossed,
  },
];

const WorkPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f3]">
      <Header />

     {/* HERO */}
<section className="relative overflow-hidden bg-[#c9eb7c] min-h-[calc(100vh-92px)] flex items-center">
  <div className="absolute left-[-160px] bottom-[-120px] w-[560px] h-[560px] rounded-full bg-white/22" />

  <div className="absolute right-[-100px] top-0 w-[320px] h-full opacity-60 pointer-events-none">
    <svg viewBox="0 0 320 920" className="w-full h-full" fill="none" preserveAspectRatio="none">
      <path
        d="M260 10 C220 180 340 270 170 430 C40 560 120 700 300 900"
        stroke="#f2b7c4"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  </div>

  <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10 xl:px-14 py-10 lg:py-12">
    <div className="grid lg:grid-cols-[0.95fr_1fr] items-center gap-8 lg:gap-14">
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex justify-center lg:justify-start"
      >
        <div className="relative w-full max-w-[520px] lg:max-w-[620px] h-[460px] lg:h-[640px]">
          <div className="absolute left-[6%] bottom-[8%] text-[#1557d6] text-6xl lg:text-7xl rotate-6 opacity-90 z-20">
            〰
          </div>
          <div className="absolute right-[8%] top-[24%] text-pink-300 text-5xl lg:text-6xl -rotate-12 opacity-90 z-20">
            〰
          </div>
          <div className="absolute right-[2%] bottom-[34%] text-cyan-400 text-6xl lg:text-7xl rotate-12 opacity-90 z-20">
            〰
          </div>

          <svg
            viewBox="0 0 620 700"
            className="relative z-10 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="heroBlobMask" clipPathUnits="userSpaceOnUse">
                <path
                  d="
                    M130 660
                    L130 365
                    C130 210 215 110 345 78
                    C455 52 555 108 592 215
                    C625 310 600 445 545 560
                    C508 636 458 670 355 680
                    C250 690 175 682 130 660
                    Z
                  "
                />
              </clipPath>
            </defs>

            <image
              href={heroWomanImg}
              x="90"
              y="40"
              width="470"
              height="660"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#heroBlobMask)"
            />
          </svg>
        </div>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-[760px] lg:pt-2"
      >
        <h1 className="heading-hero text-[#1557d6] text-5xl sm:text-6xl lg:text-[5rem] leading-[0.92] mb-5">
          A programme that helps women feel stronger, leaner and more confident
        </h1>

        <p className="text-[#314f85] text-xl lg:text-[1.8rem] leading-snug font-semibold mb-6 max-w-[760px]">
          Simple workouts, better food choices and support that helps you stay consistent.
        </p>

        <div className="space-y-5 text-[#314f85] text-lg lg:text-[1.6rem] leading-relaxed max-w-[760px]">
          <p>
            Lose weight without extremes, build healthy habits and feel good in your body again.
          </p>

          <p>
            Get a clear plan, short effective workouts and easy meals you can actually stick to.
          </p>
        </div>

        <button className="mt-8 rounded-full bg-[#1557d6] text-white px-10 py-4 font-heading font-bold uppercase tracking-[0.14em] text-base lg:text-lg hover:scale-105 transition-transform">
          GET STARTED
        </button>
      </motion.div>
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#f4e9ea] py-20 lg:py-28">
        <div className="absolute left-[-120px] top-0 w-[420px] h-[420px] rounded-full bg-[#efcfd4]/70" />
        <div className="absolute left-[0%] bottom-[-120px] w-[420px] h-[320px] rounded-full bg-[#efcfd4]/70" />
        <div className="absolute right-[-100px] top-0 w-[360px] h-[380px] rounded-full bg-[#efcfd4]/70" />
        <div className="absolute right-[4%] bottom-[-60px] w-[320px] h-[240px] rounded-full bg-[#efcfd4]/70" />

        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 110" className="w-full h-[80px] lg:h-[110px] block" preserveAspectRatio="none">
            <path
              d="M0,80 C80,20 150,20 230,80 C310,20 380,20 460,80 C540,20 610,20 690,80 C770,20 840,20 920,80 C1000,20 1070,20 1150,80 C1230,20 1310,20 1440,80 L1440,110 L0,110 Z"
              fill="#f5f5f3"
            />
          </svg>
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10 xl:px-14 relative z-10">
          <div className="grid md:grid-cols-3 gap-14 lg:gap-10 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.Icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex flex-col items-center"
                >
                  <div className="mb-6 w-20 h-20 rounded-full border-4 border-[#1557d6]/15 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#1557d6]" strokeWidth={2.5} />
                  </div>

                  <div className="heading-hero text-[#1557d6] text-5xl lg:text-[4.5rem] leading-none mb-3">
                    {stat.value}
                  </div>

                  <div className="text-[#1557d6] text-2xl lg:text-[2.2rem] font-semibold leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERFECT FOR HOME */}
      <section className="bg-[#f5f5f3] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-14 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[420px] h-[420px] lg:w-[520px] lg:h-[520px]">
                <div className="absolute inset-0 rounded-full bg-[#e7eefc]" />
                <div className="absolute right-[-12%] bottom-[6%] w-[42%] h-[42%] rounded-full bg-[#e7eefc]" />

                <div className="absolute inset-[3%] rounded-full overflow-hidden">
                  <img src={homeWorkoutImg} alt="Perfect for home" className="w-full h-full object-cover" />
                </div>

                <div className="absolute left-[44%] top-[-4%] text-cyan-400 text-7xl -rotate-12">〰</div>
                <div className="absolute right-[16%] top-[34%] text-pink-300 text-6xl rotate-12">〰</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="heading-hero text-[#1557d6] text-4xl sm:text-5xl lg:text-[4.4rem] leading-[0.92] mb-6">
                Perfect for home and real life
              </h2>

              <p className="text-[#314f85] text-xl lg:text-[1.95rem] leading-relaxed max-w-[860px]">
                You do not need hours in the gym to make progress. The programme is built around short,
                effective workouts that fit around busy days, family life and changing energy levels.
                It is made to help women stay consistent, even when life is hectic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FITNESS FOR EVERYONE */}
      <section className="bg-[#f5f5f3] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-14 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="order-2 lg:order-1"
            >
              <h2 className="heading-hero text-[#1557d6] text-4xl sm:text-5xl lg:text-[4.4rem] leading-[0.92] mb-6">
                Training for every level
              </h2>

              <p className="text-[#314f85] text-xl lg:text-[1.95rem] leading-relaxed max-w-[860px]">
                From complete beginner to more advanced, there are workouts for every stage of your journey.
                That means you can start where you are, build confidence gradually and keep progressing without
                feeling overwhelmed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="order-1 lg:order-2 relative flex justify-center"
            >
              <div className="relative w-[430px] h-[360px] lg:w-[560px] lg:h-[430px]">
                <div className="absolute right-[0] top-[0] w-[76%] h-[88%] rounded-full bg-[#20c2cf] border-[14px] border-[#dfe8fb]" />
                <div className="absolute left-[2%] bottom-[0] w-[56%] h-[56%] rounded-full bg-[#99d7df] border-[12px] border-[#dfe8fb]" />

                <div className="absolute right-[10%] top-[12%] w-[56%] h-[64%] overflow-hidden rounded-[40px] rotate-[-10deg] shadow-xl bg-white">
                  <img src={appPhonesImg} alt="App screenshots" className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-[30%] top-[16%] w-[27%] h-[54%] overflow-hidden rounded-[40px] rotate-[-9deg] shadow-xl bg-white z-10">
                  <img src={appPhonesImg} alt="App screenshot" className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-[18%] top-[-6%] text-white text-6xl -rotate-12">〰</div>
                <div className="absolute left-[25%] bottom-[18%] text-pink-300 text-6xl rotate-12">〰</div>
                <div className="absolute right-[14%] bottom-[0] text-[#1557d6] text-7xl rotate-12">〰</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="bg-[#f5f5f3] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-14 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="order-2 lg:order-1"
            >
              <h2 className="heading-hero text-[#1557d6] text-4xl sm:text-5xl lg:text-[4.4rem] leading-[0.92] mb-6">
                Food that supports your goals
              </h2>

              <p className="text-[#314f85] text-xl lg:text-[1.95rem] leading-relaxed max-w-[900px]">
                Better results do not come from boring food. With hundreds of recipes and simple meal ideas,
                the programme helps women eat well, stay satisfied and create habits they can actually maintain.
                It is about enjoying food while still moving towards your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="order-1 lg:order-2 relative flex justify-center"
            >
              <div className="relative w-[430px] h-[430px] lg:w-[620px] lg:h-[500px]">
                <div className="absolute left-[12%] top-[0] w-[64%] h-[78%] rounded-full bg-[#dfe8fb] overflow-hidden" />
                <div className="absolute right-[0] bottom-[4%] w-[35%] h-[35%] rounded-full bg-[#dfe8fb] overflow-hidden" />

                <div className="absolute left-[15%] top-[3%] w-[58%] h-[72%] rounded-full overflow-hidden">
                  <img src={foodImg} alt="Healthy food" className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-[2.5%] bottom-[6.5%] w-[29%] h-[29%] rounded-full overflow-hidden">
                  <img src={foodImg} alt="Food detail" className="w-full h-full object-cover" />
                </div>

                <div className="absolute left-[34%] top-[0] text-pink-300 text-7xl -rotate-12">〰</div>
                <div className="absolute right-[4%] bottom-[6%] text-cyan-400 text-7xl rotate-12">〰</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* GET STARTED / PRICING */}
{/* GET STARTED / PRICING */}
<section className="bg-[#f5f5f3] pt-10 pb-20 lg:pt-16 lg:pb-28 px-4">
  <div className="text-center mb-16">
    <h2 className="heading-hero text-4xl sm:text-5xl lg:text-[5rem] text-[#1557d6] mb-4">
      Get started
    </h2>
  </div>

  <div className="container mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
    {plans.map((plan, i) => (
      <motion.div
        key={i}
        className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
          plan.popular
            ? "bg-brand-lime text-brand-blue-dark scale-105 shadow-2xl"
            : "bg-white text-[#1557d6] border border-[#1557d6]/10 shadow-xl"
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

        <p
          className={`text-sm mb-4 ${
            plan.popular ? "text-brand-blue-dark/70" : "text-[#314f85]/60"
          }`}
        >
          {plan.period}
        </p>

        <p
          className={`text-sm mb-6 leading-relaxed ${
            plan.popular ? "text-brand-blue-dark/80" : "text-[#314f85]/80"
          }`}
        >
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

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default WorkPage;
