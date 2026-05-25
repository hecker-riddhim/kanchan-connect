import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group relative flex flex-col rounded-md border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center rounded-sm bg-secondary px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-navy">
          {product.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-gold" />
      </div>

      <h3 className="mt-5 font-display text-xl leading-tight text-navy">{product.name}</h3>

      <dl className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
        <dt className="text-muted-foreground">CAS</dt>
        <dd className="font-medium text-navy">{product.cas}</dd>
        <dt className="text-muted-foreground">Purity</dt>
        <dd className="font-medium text-navy">{product.purity}</dd>
      </dl>

      <p className="mt-5 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
        <span className="text-muted-foreground">{product.packaging}</span>
        <span className="font-medium text-gold">View details →</span>
      </div>
    </Link>
  );
}
