import { motion } from "framer-motion";
import { Dumbbell, Smile, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

import heroImg from "@/assets/workout-tablet.jpg";
import crowdImg from "@/assets/workout-tablet.jpg";
import peJoeImg from "@/assets/workout-tablet.jpg";

const stats = [
  {
    value: "600K",
    label: "Client transformations",
    Icon: Dumbbell,
  },
  {
    value: "4.8",
    label: "App store rating",
    Icon: Smile,
  },
  {
    value: "1000+",
    label: "Amazing recipes",
    Icon: BookOpen,
  },
];

const MissionPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f3]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#c9eb7c]">
        <div className="absolute left-[-180px] bottom-[-120px] w-[620px] h-[620px] rounded-full bg-white/22" />

        <div className="absolute right-[-100px] top-0 w-[320px] h-[920px] opacity-60 pointer-events-none">
          <svg viewBox="0 0 320 920" className="w-full h-full" fill="none">
            <path
              d="M260 10 C220 180 340 270 170 430 C40 560 120 700 300 900"
              stroke="#f2b7c4"
              strokeWidth="22"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10 xl:px-14 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[0.95fr_1fr] items-center gap-10 lg:gap-16">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[520px] lg:max-w-[620px] h-[500px] lg:h-[760px]">
                <div className="absolute left-[8%] bottom-[10%] text-[#1557d6] text-7xl rotate-6 opacity-90 z-20">
                  〰
                </div>
                <div className="absolute right-[12%] top-[20%] text-pink-300 text-6xl -rotate-12 opacity-90 z-20">
                  〰
                </div>
                <div className="absolute right-[0%] bottom-[28%] text-cyan-400 text-7xl rotate-12 opacity-90 z-20">
                  〰
                </div>

                <svg
                  viewBox="0 0 620 760"
                  className="relative z-10 w-full h-full"
                  preserveAspectRatio="xMidYMax meet"
                >
                  <defs>
                    <clipPath id="missionHeroBlob" clipPathUnits="userSpaceOnUse">
                      <path
                        d="
                          M120 740
                          L120 430
                          C120 245 205 120 350 82
                          C500 44 610 120 650 255
                          C680 355 655 500 590 620
                          C545 705 500 745 380 755
                          C250 765 165 754 120 740
                          Z
                        "
                      />
                    </clipPath>
                  </defs>

                  <image
                    href={heroImg}
                    x="70"
                    y="40"
                    width="520"
                    height="720"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#missionHeroBlob)"
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
              className="relative z-10 max-w-[760px]"
            >
              <h1 className="heading-hero text-[#1557d6] text-5xl sm:text-6xl lg:text-[5rem] leading-[0.92] mb-6">
                The women behind The Body Coach
              </h1>

              <div className="space-y-7 text-[#314f85] text-xl lg:text-[1.8rem] leading-relaxed max-w-[860px]">
                <p>
                  I started my journey handing out flyers at my local train station, trying to get
                  customers for my bootcamps in the park. Ten years and 600,000 clients later, I can
                  hardly believe how amazing that journey has been.
                </p>

                <p>
                  Along the way I've learned so much about why people succeed at getting and staying fit,
                  healthy and happy. And I feel so lucky that I can put all that experience into this app.
                </p>

                <p>
                  My dream is for it to help millions of people, no matter how fit you are, to smash your
                  goals and feel amazing.
                </p>
              </div>

              <div className="mt-8 text-[#1557d6] font-heading text-4xl lg:text-5xl">
                Joe Wicks
              </div>
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
                  <div className="mb-6 w-20 h-20 rounded-full flex items-center justify-center">
                    <Icon className="w-12 h-12 text-[#1557d6]" strokeWidth={2.5} />
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

      {/* JOURNEY BANNER */}
      <section className="relative overflow-hidden bg-[#1557d6] py-20 lg:py-28">
        <div className="absolute left-[14%] top-[26%] text-cyan-400 text-7xl rotate-12 opacity-90">
          〰
        </div>
        <div className="absolute right-[14%] top-[22%] text-pink-300 text-6xl -rotate-12 opacity-90">
          〰
        </div>
        <div className="absolute left-[20%] bottom-[22%] text-blue-300 text-7xl opacity-70">
          〰
        </div>
        <div className="absolute right-[28%] bottom-[18%] text-lime-300 text-7xl rotate-12 opacity-90">
          〰
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-5 text-center">
          <div className="text-white font-heading font-bold tracking-[0.08em] text-3xl lg:text-5xl mb-4">
            THE 10 YEAR
          </div>

          <div className="heading-hero text-transparent [-webkit-text-stroke:4px_white] text-[5rem] sm:text-[7rem] lg:text-[11rem] leading-[0.9]">
            JOURNEY
          </div>

          <div className="heading-hero text-white text-3xl sm:text-4xl lg:text-[4rem] leading-none mt-2">
            SO FAR...
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[90px] lg:h-[120px] block" preserveAspectRatio="none">
            <path
              d="M0,85 C80,20 150,20 230,85 C310,20 380,20 460,85 C540,20 610,20 690,85 C770,20 840,20 920,85 C1000,20 1070,20 1150,85 C1230,20 1310,20 1440,85 L1440,120 L0,120 Z"
              fill="#f5f5f3"
            />
          </svg>
        </div>
      </section>

      {/* A MAN ON A MISSION */}
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
                A woomen on a mission
              </h2>

              <div className="space-y-7 text-[#314f85] text-xl lg:text-[1.8rem] leading-relaxed max-w-[860px]">
                <p>
                  In the early days The Body Coach was just me. Dragging a trailer of dumbbells, I'd race
                  around Richmond trying to get people to join me for my early morning bootcamps in the park.
                  Often no one came.
                </p>

                <p>
                  But I wouldn't give up, and eventually I joined Instagram and started posting #Leanin15
                  recipes; quick and easy home-cooked meals in 15 seconds. Slowly my following started to
                  grow and I was able to share my message around food and fitness with more people.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="order-1 lg:order-2 relative flex justify-center"
            >
              <div className="relative w-[430px] h-[430px] lg:w-[620px] lg:h-[520px]">
                <div className="absolute left-[14%] top-[0] w-[64%] h-[78%] rounded-full bg-[#dfe8fb] overflow-hidden" />
                <div className="absolute right-[0] bottom-[4%] w-[35%] h-[35%] rounded-full bg-[#dfe8fb] overflow-hidden" />

                <div className="absolute left-[17%] top-[3%] w-[58%] h-[72%] rounded-full overflow-hidden">
                  <img src={crowdImg} alt="A woomen on a mission" className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-[2.5%] bottom-[6.5%] w-[29%] h-[29%] rounded-full overflow-hidden">
                  <img src={crowdImg} alt="Crowd detail" className="w-full h-full object-cover" />
                </div>

                <div className="absolute left-[40%] top-[2%] text-pink-300 text-7xl -rotate-12">〰</div>
                <div className="absolute left-[26%] bottom-[30%] text-lime-300 text-7xl rotate-12">〰</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHANGING LIVES */}
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
                  <img src={peJoeImg} alt="Changing lives and PE With Joe" className="w-full h-full object-cover" />
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
                Changing lives and PE With Joe
              </h2>

              <div className="space-y-7 text-[#314f85] text-xl lg:text-[1.8rem] leading-relaxed max-w-[860px]">
                <p>
                  I released my first online training plan and clients were getting incredible results,
                  which helped to drive it's popularity. Over the years we made several updates to the
                  90 Day Plan and, to date, over 600,000 people have transformed their lives on the plan.
                </p>

                <p>
                  Throughout it all, my mission has never changed and in 2020 I launched PE With Joe -
                  a daily live workout on my YouTube channel - to help kids and families keep moving and
                  feel happier during the pandemic. In total, we had over 80 million views and raised
                  over half a million pounds for the NHS.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default MissionPage;