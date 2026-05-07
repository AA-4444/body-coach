import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircleQuestion, Send } from "lucide-react";
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const faqItems = [
  {
    question: "Как проходит работа с Викторией?",
    answer:
      "Работа начинается с персональной консультации: мы разбираем цели, оцениваем состояние тела, смотрим на движение, ограничения и текущую нагрузку. После этого выстраивается индивидуальная стратегия — без универсальных программ и перегруза.",
  },
  {
    question: "Подходит ли это для новичков?",
    answer:
      "Да. Программа адаптируется под ваш уровень подготовки, состояние тела и опыт. Можно начать с базовых упражнений, восстановления контроля движения и постепенно переходить к более сложной нагрузке.",
  },
  {
    question: "Нужно ли тренироваться в зале?",
    answer:
      "Не обязательно. Формат подбирается индивидуально: возможна работа онлайн, офлайн в Милане, а также программа под домашние тренировки или тренировки в зале.",
  },
  {
    question: "Помогает ли программа при болях, зажимах и перегрузках?",
    answer:
      "Да, если проблема связана с движением, осанкой, компенсациями или неправильно подобранной нагрузкой. Виктория работает с функциональным движением, биомеханикой и восстановлением после хронических перегрузок.",
  },
  {
    question: "Как быстро можно увидеть результат?",
    answer:
      "Первые изменения в самочувствии, контроле тела и качестве движения часто ощущаются уже в первые недели. Визуальная трансформация требует системной работы и зависит от исходного состояния, регулярности и восстановления.",
  },
  {
    question: "Как записаться на консультацию?",
    answer:
      "Вы можете оставить заявку через контактную форму или написать напрямую в Telegram, WhatsApp, Instagram или Email. После этого мы уточним формат, цель и удобное время для консультации.",
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
            <Reveal delay={0} className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center border border-white/50">
                <MessageCircleQuestion className="w-10 h-10 text-[#1557d6]" />
              </div>
            </Reveal>

            <Reveal
              as="h1"
              delay={100}
              className="heading-hero text-[#1557d6] text-5xl sm:text-6xl lg:text-[5.4rem] leading-[0.92] mb-6"
            >
              Поддержка
            </Reveal>

            <Reveal
              as="p"
              delay={200}
              className="text-[#314f85] text-xl lg:text-[1.7rem] leading-relaxed max-w-[820px] mx-auto"
            >
              Нужна помощь с консультацией, форматом работы или началом
              программы? Ниже вы найдёте ответы на частые вопросы или сможете
              связаться напрямую.
            </Reveal>

            <Reveal delay={300}>
              <a
                href="https://t.me/your_support_username"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#1557d6] text-white px-8 py-4 font-heading font-bold uppercase tracking-[0.14em] text-sm lg:text-base hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
                Написать в Telegram
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 px-4">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="text-center mb-12 lg:mb-16">
            <Reveal
              as="h2"
              className="heading-hero text-[#1557d6] text-4xl sm:text-5xl lg:text-[4.3rem] leading-[0.92] mb-4"
            >
              Частые вопросы
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="text-[#314f85]/80 text-lg lg:text-xl max-w-[720px] mx-auto"
            >
              Всё, что важно знать перед началом работы или во время
              индивидуального сопровождения.
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={item.question} delay={index * 70}>
                  <div
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
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={180}>
            <div className="text-center mt-12 lg:mt-16">
              <p className="text-[#314f85]/80 text-lg mb-5">
                Остались вопросы? Напишите напрямую — мы поможем.
              </p>

              <a
                href="https://t.me/your_support_username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-lime text-brand-blue-dark px-8 py-4 font-heading font-bold uppercase tracking-[0.14em] text-sm lg:text-base hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
                Открыть Telegram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default SupportPage;