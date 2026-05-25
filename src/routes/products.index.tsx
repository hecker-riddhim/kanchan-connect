import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Kanchan International" },
      { name: "description", content: "Browse our full catalogue of food-grade chemicals, human and veterinary APIs, and pharmaceutical intermediates." },
      { property: "og:title", content: "Products — Kanchan International" },
      { property: "og:description", content: "Search across our chemical ingredients catalogue." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

function ProductsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Set<string>>(new Set());

  const toggle = (name: string) =>
    setActive((s) => {
      const n = new Set(s);
      n.has(name) ? n.delete(name) : n.add(name);
      return n;
    });

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => {
      if (active.size && !active.has(p.category)) return false;
      if (!term) return true;
      return (
        p.name.toLowerCase().includes(term) ||
        p.cas.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    });
  }, [q, active]);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-navy">Home</Link> <span className="mx-1.5">/</span> Products
          </nav>
          <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">Product catalogue</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Search by name, CAS number, or category. Every listing includes documentation,
            specifications and compliance information.
          </p>
          <div className="relative mt-8 max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, CAS numbers, applications…"
              aria-label="Search products"
              className="h-12 pl-9 pr-9"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 md:grid-cols-[240px_1fr]">
        <aside aria-label="Filters">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Categories</h2>
          <ul className="mt-4 space-y-3">
            {categories.map((c) => (
              <li key={c.slug} className="flex items-center gap-2.5">
                <Checkbox
                  id={`f-${c.slug}`}
                  checked={active.has(c.name)}
                  onCheckedChange={() => toggle(c.name)}
                />
                <Label htmlFor={`f-${c.slug}`} className="cursor-pointer text-sm">
                  {c.name}
                </Label>
              </li>
            ))}
          </ul>
          {(active.size > 0 || q) && (
            <button
              onClick={() => { setActive(new Set()); setQ(""); }}
              className="mt-6 text-xs font-medium text-gold hover:underline"
            >
              Clear filters
            </button>
          )}
        </aside>

        <div>
          <p className="mb-5 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-md border border-dashed border-border bg-secondary/30 p-12 text-center">
              <p className="font-display text-xl text-navy">No matches</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different search term, or <Link to="/contact" className="text-gold underline">contact us</Link> to source a specific grade.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
