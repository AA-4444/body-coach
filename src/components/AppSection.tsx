import { Reveal } from "@/components/Reveal";
import { Check, Award } from "lucide-react";

import workoutImg from "@/assets/workout-tablet.jpg";
import mealImg from "@/assets/trainer-lunges.jpg";
import trainerImg from "@/assets/trainer-lunges.jpg";
import workoutCaseImg from "@/assets/workout.jpg";
import workoutCaseImg1 from "@/assets/workout1.jpg";

const resultItems = [
  {
    img: workoutImg,
    t: "Тело становится сильным и функциональным",
  },
  {
    img: workoutCaseImg,
    t: "Исчезают хронические зажимы и перегрузки",
  },
  {
    img: workoutCaseImg1,
    t: "Улучшается качество движения и контроль",
  },
  {
    img: mealImg,
    t: "Формируется визуально выверенная, «дорогая» форма",
  },
];

const plans = [
  {
    name: "Старт",
    price: "€90",
    period: "первая консультация",
    description:
      "Подходит для знакомства с подходом, первичной оценки тела и определения стратегии работы.",
    features: [
      "Разбор целей и запроса",
      "Оценка состояния тела",
      "Первичная стратегия тренировок",
      "Рекомендации по нагрузке",
    ],
    popular: false,
  },
  {
    name: "Персонально",
    price: "€250",
    period: "индивидуальный формат",
    description:
      "Оптимальный вариант для системной работы над телом, движением, силой и качеством результата.",
    features: [
      "Индивидуальная программа",
      "Функциональный и силовой тренинг",
      "Коррекция слабых звеньев",
      "Контроль техники и прогресса",
      "Адаптация нагрузки под состояние",
      "Поддержка между сессиями",
    ],
    popular: true,
  },
  {
    name: "Сопровождение",
    price: "€490",
    period: "расширенный формат",
    description:
      "Для тех, кому нужен глубокий процесс трансформации с регулярной корректировкой программы.",
    features: [
      "Полная диагностика движения",
      "Персональная система тренировок",
      "Работа с осанкой и компенсациями",
      "Контроль восстановления",
      "Долгосрочная стратегия результата",
    ],
    popular: false,
  },
];

const AppSection = () => {
  return (
    <section>
      {/* BLUE BIO SECTION */}
      <div
        id="about"
        className="relative bg-gradient-to-b from-[#1368de] to-[#1368de] text-white overflow-hidden"
      >
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
          <div className="absolute left-[10%] top-[180px] text-brand-lime opacity-70 rotate-12 text-5xl">
            〰
          </div>

          <div className="absolute right-[12%] top-[200px] text-brand-cyan opacity-70 -rotate-12 text-5xl">
            〰
          </div>

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

        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
            <Reveal className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[560px] xl:max-w-[620px] aspect-square rounded-[32px] overflow-hidden bg-white/10 shadow-2xl">
                <img
                  src={trainerImg}
                  alt="Виктория Примасюк"
                  className="w-full h-full object-cover block"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </div>
            </Reveal>

            <div className="order-2 lg:order-1 text-center lg:text-left">
              <Reveal
                delay={80}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-brand-lime" />
                </div>
              </Reveal>

              <Reveal
                as="h2"
                delay={140}
                className="heading-hero text-4xl sm:text-5xl lg:text-7xl text-primary-foreground mb-6"
              >
                О тренере
              </Reveal>

              <Reveal
                as="h3"
                delay={220}
                className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
              >
                Виктория Примасюк — эксперт в области трансформации тела,
                преподаватель и специалист по функциональному движению с более
                чем 15-летним опытом.
              </Reveal>

              <Reveal
                delay={300}
                className="space-y-5 text-primary-foreground/85 text-base leading-[1.7] max-w-2xl mx-auto lg:mx-0"
              >
                <p>
                  Выпускница и преподаватель Национального университета
                  физического воспитания и спорта Украины. Свою практику
                  Виктория выстроила на стыке спорта, науки и восстановительной
                  медицины — объединив силовой тренинг, биомеханику и
                  физиотерапию в единую систему работы с телом.
                </p>

                <p>
                  Сегодня Виктория ведёт частную практику в Милане — одном из
                  ключевых европейских центров фитнеса и эстетики, работая с
                  требовательной аудиторией, для которой важен не только
                  результат, но и качество процесса.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-2xl mx-auto lg:mx-0">
                <Reveal delay={380}>
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-5 text-center backdrop-blur-sm">
                    <div className="text-3xl font-heading font-black text-brand-lime">
                      15+
                    </div>
                    <div className="text-sm text-primary-foreground/75 mt-1">
                      лет опыта
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={480}>
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-5 text-center backdrop-blur-sm">
                    <div className="text-3xl font-heading font-black text-brand-lime">
                      50+
                    </div>
                    <div className="text-sm text-primary-foreground/75 mt-1">
                      сертификаций
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={580}>
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-5 text-center backdrop-blur-sm">
                    <div className="text-3xl font-heading font-black text-brand-lime">
                      MI
                    </div>
                    <div className="text-sm text-primary-foreground/75 mt-1">
                      Милан
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS SECTION */}
      <section
        id="results"
        className="relative bg-[#ffd6e7] py-12 sm:py-16 lg:py-24 overflow-hidden"
      >
        {/* Lightweight decorative curls */}
        <div className="absolute left-[8%] top-[70px] text-brand-lime opacity-70 rotate-12 text-5xl pointer-events-none">
          〰
        </div>

        <div className="absolute right-[10%] top-[140px] text-brand-cyan opacity-70 -rotate-12 text-5xl pointer-events-none">
          〰
        </div>

        <div className="absolute left-[45%] bottom-[80px] text-pink-400 opacity-50 rotate-6 text-4xl pointer-events-none">
          〰
        </div>

        <svg
          className="absolute left-[18%] top-[120px] w-[110px] opacity-70 pointer-events-none"
          viewBox="0 0 200 120"
          fill="none"
          stroke="#3ad1c6"
          strokeWidth="10"
          strokeLinecap="round"
        >
          <path d="M10 70 C40 10 90 20 120 60 S180 110 190 30" />
        </svg>

        <svg
          className="absolute right-[16%] bottom-[90px] w-[120px] opacity-70 pointer-events-none"
          viewBox="0 0 200 160"
          fill="none"
          stroke="#d4ff6a"
          strokeWidth="10"
          strokeLinecap="round"
        >
          <path d="M10 100 C80 160 120 20 190 80" />
        </svg>

        <div className="relative z-10">
          <div className="px-4 sm:px-8 lg:px-12 mb-10 lg:mb-16">
            <Reveal
              as="h2"
              className="font-display text-primary text-3xl sm:text-5xl lg:text-6xl max-w-4xl uppercase leading-[1.05]"
            >
              Работа с Викторией - это не быстрый эффект, а системная
              трансформация.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-8 lg:px-12">
            {resultItems.map((it, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl"
              >
                <img
                  src={it.img}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-black/40" />

                <p className="absolute inset-0 p-4 flex items-end font-display text-white uppercase text-sm sm:text-base lg:text-lg leading-tight">
                  {it.t}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <div id="pricing" className="relative">
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

      <section className="section-blue pt-32 pb-24 px-4 relative z-20 overflow-hidden">
        <div className="text-center mb-20">
          <Reveal
            as="h2"
            className="heading-hero text-4xl sm:text-5xl lg:text-6xl text-primary-foreground"
          >
            Выберите формат работы
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Начните с консультации или выберите индивидуальное сопровождение
            для системной трансформации тела.
          </Reveal>
        </div>

        <div className="mx-auto grid w-full max-w-sm grid-cols-1 gap-6 md:max-w-6xl md:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 100} className="relative h-full w-full">
              <div
                className={`relative h-full rounded-3xl p-8 flex flex-col transition-transform duration-300 ${
                  plan.popular
                    ? "bg-brand-lime text-brand-blue-dark shadow-2xl"
                    : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold tracking-widest px-6 py-1.5 rounded-full uppercase whitespace-nowrap">
                    Популярный формат
                  </div>
                )}

                <h3 className="heading-hero text-3xl mb-2">{plan.name}</h3>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="heading-hero text-5xl">{plan.price}</span>
                </div>

                <p
                  className={`text-sm mb-4 ${
                    plan.popular
                      ? "text-brand-blue-dark/70"
                      : "text-primary-foreground/50"
                  }`}
                >
                  {plan.period}
                </p>

                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    plan.popular
                      ? "text-brand-blue-dark/80"
                      : "text-primary-foreground/70"
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
                  className={`w-full py-3 rounded-full font-heading font-bold uppercase tracking-wider text-sm transition-transform duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:shadow-xl"
                      : "bg-brand-lime text-brand-blue-dark hover:shadow-lg"
                  }`}
                >
                  Записаться
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AppSection;