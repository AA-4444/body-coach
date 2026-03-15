import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, BlogCategory } from "@/data/blogPosts";

type FilterCategory =
  | "LATEST"
  | "NEWS & EVENTS"
  | "FITNESS"
  | "NUTRITION"
  | "WELLBEING"
  | "RECIPES"
  | "MOTIVATION";

const categories: FilterCategory[] = [
  "LATEST",
  "NEWS & EVENTS",
  "FITNESS",
  "NUTRITION",
  "WELLBEING",
  "RECIPES",
  "MOTIVATION",
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("LATEST");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "LATEST") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost =
    activeCategory === "LATEST"
      ? filteredPosts.find((post) => post.featured)
      : filteredPosts[0];

  const gridPosts = filteredPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f4f7]">
      <Header />

      {/* blog hero */}
      <section className="relative overflow-hidden bg-[#83dce4]">
        <div className="absolute left-[-80px] top-0 w-[240px] h-[240px] rounded-full bg-white/18" />
        <div className="absolute left-[120px] top-[70px] w-[180px] h-[180px] rounded-full bg-white/14" />
        <div className="absolute left-[220px] bottom-[-50px] w-[140px] h-[140px] rounded-full bg-white/14" />
        <div className="absolute right-[-60px] top-0 w-[250px] h-[250px] rounded-full bg-white/16" />
        <div className="absolute right-[110px] bottom-[-60px] w-[190px] h-[190px] rounded-full bg-white/12" />

        <svg
          className="absolute left-[30%] top-[22px] w-[80px] lg:w-[92px]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="#1557d6"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M80 10 C40 40 40 85 85 110" />
          <path d="M48 22 C22 44 24 72 56 92" />
        </svg>

        <svg
          className="absolute left-[43%] top-[28px] w-[42px] lg:w-[50px]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#14c8d8"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <path d="M25 15 L55 35 L35 60 L60 78" />
        </svg>

        <svg
          className="absolute right-[30%] top-[18px] w-[110px] lg:w-[130px]"
          viewBox="0 0 150 120"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M10 62 C45 52 80 52 108 64" />
          <path d="M110 64 L135 30" />
          <path d="M110 64 L125 94" />
          <path d="M114 30 L122 6" />
        </svg>

        <svg
          className="absolute right-[28%] top-[112px] w-[80px] lg:w-[96px]"
          viewBox="0 0 120 70"
          fill="none"
          stroke="#1557d6"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M12 40 L58 20" />
          <path d="M22 56 L72 38" />
        </svg>

        <svg
          className="absolute left-[27%] bottom-[46px] w-[58px] lg:w-[70px]"
          viewBox="0 0 100 70"
          fill="none"
          stroke="#e9ef68"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M10 18 C10 52 54 62 84 34" />
        </svg>

        <svg
          className="absolute left-[47%] bottom-[30px] w-[78px] lg:w-[92px]"
          viewBox="0 0 120 90"
          fill="none"
          stroke="#13c7d8"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M18 26 C20 64 78 82 106 58" />
          <path d="M62 8 C34 36 56 66 86 86" />
        </svg>

        <svg
          className="absolute right-[31%] bottom-[44px] w-[72px] lg:w-[84px]"
          viewBox="0 0 120 80"
          fill="none"
          stroke="#eef06f"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M10 48 C28 58 46 58 62 42" />
          <path d="M70 18 C70 52 92 72 108 60" />
        </svg>

        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10 xl:px-14 py-16 lg:py-20">
          <div className="min-h-[170px] lg:min-h-[210px] flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="heading-hero text-[#1557d6] text-5xl sm:text-6xl lg:text-[5.5rem] text-center"
            >
              JOE'S BLOG
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] border-b border-slate-200">
        <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
          <div className="overflow-x-auto">
            <div className="min-w-max flex items-center justify-center gap-8 lg:gap-10 py-6">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`font-heading font-bold tracking-[0.14em] uppercase pb-2 border-b-[3px] whitespace-nowrap transition ${
                      isActive
                        ? "text-[#314f85] border-[#30c8d8]"
                        : "text-[#314f85] border-transparent hover:border-[#30c8d8]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="pt-12 lg:pt-16">
          <div className="mx-auto w-full max-w-[1080px] px-5 lg:px-8">
            <article>
              <Link to={`/blog/${featuredPost.slug}`} className="block group">
                <div className="overflow-hidden rounded-[38px] mb-8 lg:mb-10">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-[280px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="font-heading font-bold tracking-[0.14em] uppercase text-[#334f81] text-[1rem] mb-3">
                  {featuredPost.category}
                </p>

                <h2 className="heading-hero text-[#314f85] text-4xl sm:text-5xl lg:text-[4.6rem] leading-[0.92] mb-4">
                  {featuredPost.title}
                </h2>

                <p className="text-[#334f81] text-[1.25rem] lg:text-[2rem] leading-snug max-w-[760px]">
                  {featuredPost.excerpt}
                </p>
              </Link>
            </article>
          </div>
        </section>
      )}

      <section className="py-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-10 lg:gap-y-16">
            {gridPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="min-w-0"
              >
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="overflow-hidden rounded-[24px] mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[230px] lg:h-[250px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="font-heading font-bold tracking-[0.14em] uppercase text-[#334f81] text-[0.98rem] mb-2">
                    {post.category}
                  </p>

                  <h3 className="heading-hero text-[#314f85] text-[2.5rem] lg:text-[3.3rem] leading-[0.92] mb-4">
                    {post.title}
                  </h3>

                  <p className="text-[#334f81] text-[1.15rem] leading-relaxed max-w-[95%]">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;