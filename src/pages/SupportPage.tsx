import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion, Send } from "lucide-react";
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const faqItems = [
  {
    question: "How does the programme work?",
    answer:
      "You get a structured plan with guided workouts, recipes, motivation and support in one place. The goal is to help you stay consistent and make progress in a realistic way.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. The programme includes options for different fitness levels, including complete beginners. You can start where you are and build up gradually.",
  },
  {
    question: "Do I need gym equipment?",
    answer:
      "No. Many workouts are designed to be done at home with little or no equipment, so it is easy to fit them into real life.",
  },
  {
    question: "Will I get meal ideas too?",
    answer:
      "Yes. You will get access to recipes and food guidance designed to help you eat well, stay satisfied and support your goals.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "That depends on your starting point, routine and consistency. The focus is on building habits that last, rather than chasing extreme short-term results.",
  },
  {
    question: "What if I need help or have a problem?",
    answer:
      "You can contact support directly through our Telegram support channel and we will help you with account, programme or general questions.",
  },
];

const SupportPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f3]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#dff2b2]">
        <div className="absolute left-[-120px] top-[40px] w-[320px] h-[320px] rounded-full bg-white/25" />
        <div className="absolute right-[-80px] bottom-[-80px] w-[280px] h-[280px] rounded-full bg-pink-200/40" />

        <div className="absolute left-[12%] top-[28%] text-cyan-400 text-6xl rotate-12 opacity-80">
          〰
        </div>
        <div className="absolute right-[10%] top-[18%] text-pink-300 text-6xl -rotate-12 opacity-80">
          〰
        </div>
        <div className="absolute right-[16%] bottom-[16%] text-[#1557d6] text-7xl rotate-6 opacity-80">
          〰
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10 xl:px-14 py-16 lg:py-24">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center border border-white/50">
                <MessageCircleQuestion className="w-10 h-10 text-[#1557d6]" />
              </div>
            </div>

            <motion.h1
              className="heading-hero text-[#1557d6] text-5xl sm:text-6xl lg:text-[5.4rem] leading-[0.92] mb-6"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Support
            </motion.h1>

            <motion.p
              className="text-[#314f85] text-xl lg:text-[1.7rem] leading-relaxed max-w-[820px] mx-auto"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              Need help with the programme, your account or getting started? You can find quick answers
              below or contact our support team directly.
            </motion.p>

            <motion.a
              href="https://t.me/your_support_username"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#1557d6] text-white px-8 py-4 font-heading font-bold uppercase tracking-[0.14em] text-sm lg:text-base hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.16 }}
            >
              <Send className="w-5 h-5" />
              Contact Telegram Support
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 px-4">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="heading-hero text-[#1557d6] text-4xl sm:text-5xl lg:text-[4.3rem] leading-[0.92] mb-4">
              Frequently asked questions
            </h2>
            <p className="text-[#314f85]/80 text-lg lg:text-xl max-w-[720px] mx-auto">
              Everything you need to know before you begin, or while you are using the programme.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className={`rounded-[28px] border transition-all ${
                    isOpen
                      ? "bg-white border-[#1557d6]/20 shadow-xl"
                      : "bg-white/70 border-[#1557d6]/10 shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 lg:px-8 py-6"
                  >
                    <span className="font-heading font-bold text-[#1557d6] text-xl lg:text-[1.6rem] leading-snug">
                      {item.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-[#1557d6]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6">
                          <div className="h-px bg-[#1557d6]/10 mb-5" />
                          <p className="text-[#314f85] text-lg lg:text-[1.15rem] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <p className="text-[#314f85]/80 text-lg mb-5">
              Still need help? Our team is here for you.
            </p>

            <a
              href="https://t.me/your_support_username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-lime text-brand-blue-dark px-8 py-4 font-heading font-bold uppercase tracking-[0.14em] text-sm lg:text-base hover:scale-105 transition-transform"
            >
              <Send className="w-5 h-5" />
              Open Telegram Support
            </a>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default SupportPage;