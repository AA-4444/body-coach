import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f3f4f7]">
        <Header />
        <main className="px-5 py-20 max-w-4xl mx-auto">
          <h1 className="heading-hero text-[#314f85] text-4xl mb-4">Article not found</h1>
          <Link to="/blog" className="text-[#1368de] font-bold">
            Back to blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f4f7]">
      <Header />

      <main>
        <section className="max-w-[1080px] mx-auto px-5 lg:px-8 pt-12 lg:pt-16 pb-10">
          <p className="font-heading font-bold tracking-[0.14em] uppercase text-[#334f81] text-[1rem] mb-4">
            {post.category}
          </p>

          <h1 className="heading-hero text-[#314f85] text-4xl sm:text-5xl lg:text-[4.8rem] leading-[0.92] mb-5">
            {post.title}
          </h1>

          <p className="text-[#334f81] text-[1.2rem] lg:text-[1.9rem] leading-snug max-w-[760px] mb-10">
            {post.excerpt}
          </p>

          <div className="overflow-hidden rounded-[38px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[280px] sm:h-[400px] lg:h-[520px] object-cover"
            />
          </div>
        </section>

        <section className="max-w-[860px] mx-auto px-5 lg:px-8 pb-20">
          <div className="space-y-8 text-[#334f81] text-lg lg:text-[1.35rem] leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="pb-20">
            <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-8">
              <h2 className="heading-hero text-[#314f85] text-3xl lg:text-[3.5rem] mb-10">
                Related articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
                {relatedPosts.map((item) => (
                  <article key={item.id}>
                    <Link to={`/blog/${item.slug}`} className="block group">
                      <div className="overflow-hidden rounded-[24px] mb-5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      <p className="font-heading font-bold tracking-[0.14em] uppercase text-[#334f81] text-[0.98rem] mb-2">
                        {item.category}
                      </p>

                      <h3 className="heading-hero text-[#314f85] text-[2.2rem] lg:text-[2.8rem] leading-[0.92] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-[#334f81] text-[1.1rem] leading-relaxed">
                        {item.excerpt}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;