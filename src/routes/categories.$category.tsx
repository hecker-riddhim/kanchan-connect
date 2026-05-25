import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/products/ProductCard";
import { categoryBySlug, productsByCategory, type Product } from "@/data/products";
type Cat = { name: string; slug: string; blurb: string };

export const Route = createFileRoute("/categories/$category")({
  loader: ({ params }): { category: Cat; items: Product[] } => {
    const c = categoryBySlug(params.category);
    if (!c) throw notFound();
    return { category: c, items: productsByCategory(c.name) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — Kanchan International` },
        { name: "description", content: category.blurb },
        { property: "og:title", content: `${category.name} — Kanchan International` },
        { property: "og:description", content: category.blurb },
        { property: "og:url", content: `/categories/${params.category}` },
      ],
      links: [{ rel: "canonical", href: `/categories/${params.category}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData() as { category: Cat; items: Product[] };
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-navy">Home</Link>
            <span className="mx-1.5">/</span>
            <Link to="/products" className="hover:text-navy">Products</Link>
            <span className="mx-1.5">/</span>
            <span className="text-navy">{category.name}</span>
          </nav>
          <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{category.blurb}</p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
