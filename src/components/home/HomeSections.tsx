import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ShieldCheck, Truck } from "lucide-react";
import heroImg from "@/assets/hero-chemicals.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import {
  categories,
  featuredProducts,
  trustBadges,
} from "@/data/products";

export function HomeSections() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-paper">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/85 to-navy/40"
        />
        <div className="container-page relative grid gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:py-28 lg:py-36">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Mumbai · Serving 40+ countries
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-balance md:text-5xl lg:text-6xl">
              Trusted chemical ingredients for
              <span className="block text-gold-soft">pharma, food & veterinary industries.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-paper/80 md:text-lg">
              Kanchan International supplies food-grade chemicals, active pharmaceutical ingredients
              and intermediates to manufacturers worldwide — backed by GMP-compliant sourcing,
              full documentation and reliable lead times.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold-soft">
                <Link to="/products">Browse products <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper">
                <Link to="/contact">Request a quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="relative border-t border-paper/10 bg-navy-deep/60 backdrop-blur">
          <ul className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-[11px] uppercase tracking-[0.18em] text-paper/70 md:justify-between">
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-gold" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section aria-labelledby="cat-h" className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold">Catalogue</p>
            <h2 id="cat-h" className="mt-2 font-display text-3xl md:text-4xl">Four core product lines.</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-navy hover:text-gold md:inline-flex">
            See all products →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/categories/$category"
              params={{ category: c.slug }}
              className="group flex flex-col justify-between rounded-md border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[var(--shadow-lift)]"
            >
              <div>
                <span className="font-display text-5xl text-gold/30 group-hover:text-gold/60">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl text-navy">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              </div>
              <span className="mt-6 text-sm font-medium text-gold">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section aria-labelledby="feat-h" className="bg-secondary/40 py-20 md:py-28">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Featured</p>
              <h2 id="feat-h" className="mt-2 font-display text-3xl md:text-4xl">Hand-picked from our catalogue.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts().map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section aria-labelledby="why-h" className="container-page py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">Why Kanchan</p>
        <h2 id="why-h" className="mt-2 max-w-2xl font-display text-3xl md:text-4xl">
          A supply partner manufacturers can plan around.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { Icon: ShieldCheck, title: "Quality assurance", body: "Every batch ships with CoA, residual solvent profile and heavy-metal data. DMF available for regulated markets." },
            { Icon: BadgeCheck, title: "Regulatory compliance", body: "GMP-aligned sourcing, USP / BP / EP / IP grades, GHS-compliant SDS in multiple languages." },
            { Icon: Truck, title: "Reliable supply", body: "Bonded warehousing in Mumbai, multimodal logistics, and forward contracts for high-volume customers." },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="rounded-md border border-border bg-card p-7">
              <span className="grid h-10 w-10 place-items-center rounded-sm bg-navy text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-navy text-paper">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center md:py-16">
          <div>
            <h2 className="font-display text-2xl text-paper md:text-3xl">Need a custom quote?</h2>
            <p className="mt-2 max-w-xl text-paper/75">
              Share your specifications and target volume — our team responds within 24 hours with
              pricing, lead times and complete documentation.
            </p>
          </div>
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold-soft">
            <Link to="/contact">Request a quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
