import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "./blog.index";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title}, Kanchan International` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Kanchan International" },
        }),
      }],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="container-page max-w-3xl py-14 md:py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-navy">Home</Link>
        <span className="mx-1.5">/</span>
        <Link to="/blog" className="hover:text-navy">Insights</Link>
      </nav>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">{post.category}</p>
      <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">{post.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p className="text-lg text-navy">{post.excerpt}</p>
        <p>
          This is a placeholder article body for the Kanchan International insights blog. Replace
          this content with the full article copy when ready, the structure, typography and SEO
          metadata are fully wired up.
        </p>
        <p>
          For each post you publish, the page automatically emits Article JSON-LD, canonical tag,
          Open Graph metadata and a proper Twitter card so search and social platforms render the
          content correctly.
        </p>
      </div>
    </article>
  );
}
