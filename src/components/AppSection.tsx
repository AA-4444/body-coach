import { Reveal } from "@/components/Reveal";
import { Check, Award, ArrowRight, Star } from "lucide-react";

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
    label: "Старт",
    name: "Моё тело. Мои правила",
    format: "Закрытый Telegram-канал",
    price: "€29",
    period: "/ месяц",
    topBar: "bg-[#ffd6e7]",
    card: "bg-primary-foreground text-primary border-primary/10",
    button: "bg-primary text-primary-foreground",
    features: [
      "Видеоуроки по женскому похудению",
      "Питание, гормоны, цикл — с научной базой",
      "Реальные результаты подписчиц",
      "Закрытые эфиры раз в месяц",
      "Чат с сообществом",
    ],
    guarantee: "Если не понравится — вернём деньги за первый месяц",
    popular: false,
  },
  {
    label: "Популярный",
    name: "Стройность за 30 дней",
    format: "Программа через Telegram-бот",
    price: "€99",
    period: "/ 4 недели",
    topBar: "bg-brand-lime",
    card: "bg-[#ffd6e7] text-primary border-brand-lime",
    button: "bg-brand-lime text-brand-blue-dark",
    features: [
      "Эксклюзивные видеоуроки с техникой",
      "Программа под твои параметры",
      "Тренировки + питание по науке",
      "Прогрессия нагрузки по неделям",
      "Трекер замеров внутри бота",
      "Доступ к каналу включён",
    ],
    guarantee: "Результат за 30 дней — или продлим бесплатно",
    popular: true,
  },
  {
    label: "Премиум",
    name: "Идеальная женщина",
    format: "Личный коучинг с Викторией",
    price: "€499",
    period: "/ месяц",
    topBar: "bg-[#ffd6e7]",
    card: "bg-primary-foreground text-primary border-primary/10",
    button: "bg-primary text-primary-foreground",
    features: [
      "Персональные видеоуроки от Виктории",
      "Диагностика тела и биомеханики",
      "Программа под твою цель и образ жизни",
      "Еженедельная корректировка",
      "Разбор видео техники",
      "Личный чат с Викторией",
    ],
    guarantee: "Гарантия видимого результата за 30 дней",
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
                Я — Виктория Примасюк, эксперт в области трансформации тела,
                преподаватель и специалист по функциональному движению с более
                чем 15-летним опытом.
              </Reveal>

              <Reveal
                delay={300}
                className="space-y-5 text-primary-foreground/85 text-base leading-[1.7] max-w-2xl mx-auto lg:mx-0"
              >
                <p>
                  Я выпускница и преподаватель Национального университета
                  физического воспитания и спорта Украины. Свою практику я
                  выстроила на стыке спорта, науки и восстановительной медицины
                  — объединив силовой тренинг, биомеханику и физиотерапию в
                  единую систему работы с телом.
                </p>

                <p>
                  Сегодня я веду частную практику в Милане — одном из ключевых
                  европейских центров фитнеса и эстетики. Я работаю с
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

      <PricingSection />
    </section>
  );
};

const PricingSection = () => {
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
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14 lg:mb-16">
            <Reveal
              as="h2"
              className="heading-hero text-4xl sm:text-5xl lg:text-6xl text-primary-foreground"
            >
              Форматы подписки
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
            >
              Выберите формат: закрытый канал, программа через Telegram-бот или
              персональный коучинг с Викторией.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 100} className="h-full">
                <div className="relative h-full pt-5">
                  {plan.popular && (
                    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-full bg-brand-lime px-6 py-2.5 font-heading font-bold uppercase tracking-[0.14em] text-[11px] text-brand-blue-dark shadow-lg whitespace-nowrap">
                      Популярный
                    </div>
                  )}

                  <article
                    className={`relative h-full overflow-hidden rounded-[32px] border shadow-2xl ${
                      plan.card
                    } ${
                      plan.popular
                        ? "border-[2px] border-brand-lime"
                        : "border-primary/10"
                    }`}
                  >
                    <div
                      className={`absolute left-0 right-0 top-0 h-3 ${plan.topBar}`}
                    />

                    <div className="flex h-full flex-col p-6 pt-10 sm:p-8 sm:pt-12">
                      <div className="mb-6">
                        <p className="font-heading font-bold uppercase tracking-[0.14em] text-primary/55 text-xs mb-3">
                          {plan.label}
                        </p>

                        <h3 className="heading-hero text-3xl sm:text-4xl leading-[0.95] mb-3">
                          {plan.name}
                        </h3>

                        <p className="text-primary/60 text-sm italic">
                          {plan.format}
                        </p>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-end gap-2">
                          <span className="heading-hero text-5xl sm:text-6xl">
                            {plan.price}
                          </span>

                          <span className="pb-2 text-sm text-primary/55">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, featureIndex) => {
                          const isFeatured = plan.popular && featureIndex < 2;

                          return (
                            <li
                              key={feature}
                              className="flex gap-3 items-start"
                            >
                              <div
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                  isFeatured
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-brand-lime text-brand-blue-dark"
                                }`}
                              >
                                {isFeatured ? (
                                  <Star className="h-3.5 w-3.5 fill-current" />
                                ) : (
                                  <Check className="h-3.5 w-3.5" />
                                )}
                              </div>

                              <span className="text-sm sm:text-base leading-snug text-primary/80">
                                {feature}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <div
                        className={`rounded-2xl px-4 py-3 mb-6 ${
                          plan.popular ? "bg-white/55" : "bg-[#f3ebff]"
                        }`}
                      >
                        <p className="text-xs sm:text-sm leading-snug text-primary/65">
                          {plan.guarantee}
                        </p>
                      </div>

                      <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noreferrer"
                        className={`group mt-auto inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-full px-6 font-heading font-bold uppercase tracking-[0.14em] text-sm transition-transform duration-300 hover:scale-[1.02] ${plan.button}`}
                      >
                        Перейти к оплате

                      </a>
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppSection;