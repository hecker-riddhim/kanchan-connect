import { createFileRoute, Link } from "@tanstack/react-router";

const posts = [
  {
    slug: "understanding-dmf-regulated-markets",
    title: "Understanding DMF requirements for regulated API markets",
    excerpt: "What manufacturers need to know about Drug Master Files when sourcing APIs for the US, EU and Japan.",
    date: "2025-04-12",
    category: "Regulatory",
  },
  {
    slug: "heavy-metals-food-grade-chemicals",
    title: "Heavy metal limits in food-grade chemicals: a practical guide",
    excerpt: "FCC vs. JECFA vs. national limits — how to read CoAs and what to insist on from suppliers.",
    date: "2025-03-22",
    category: "Quality",
  },
  {
    slug: "veterinary-api-cold-chain",
    title: "Veterinary API logistics: cold chain and stability",
    excerpt: "Stability data, packaging choices, and shipping protocols for temperature-sensitive veterinary APIs.",
    date: "2025-02-08",
    category: "Logistics",
  },
];

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Insights — Kanchan International" },
      { name: "description", content: "Articles on chemical sourcing, regulatory requirements, and quality standards from the Kanchan International team." },
      { property: "og:title", content: "Insights — Kanchan International" },
      { property: "og:description", content: "Articles from the Kanchan International team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndex() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Insights</p>
          <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">From the Kanchan desk.</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Practical notes on sourcing, regulatory updates and quality standards from our team.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-md border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="text-[10px] uppercase tracking-[0.18em] text-gold">{p.category}</span>
              <h2 className="mt-3 font-display text-xl text-navy group-hover:text-navy-deep">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="mt-auto pt-5 text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export const blogPosts = posts;
