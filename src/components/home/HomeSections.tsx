import { Link } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, ShieldCheck, Truck, FlaskConical, Leaf, Beaker, Stethoscope,
  Sandwich, Microscope, Globe2, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-minerals.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  categories,
  featuredProducts,
  trustBadges,
} from "@/data/products";

const industries = [
  { Icon: FlaskConical, title: "Pharmaceutical Manufacturing", body: "APIs and intermediates for formulators of oral solids, liquids and injectables." },
  { Icon: Leaf, title: "Nutraceuticals", body: "Vitamins, antioxidants and functional ingredients for dietary supplements." },
  { Icon: Stethoscope, title: "Veterinary Healthcare", body: "Veterinary APIs for livestock, poultry, aquaculture and companion animals." },
  { Icon: Sandwich, title: "Food Processing", body: "Acidulants, preservatives and additives compliant with FCC and FSSAI standards." },
  { Icon: Beaker, title: "Chemical Distribution", body: "Bulk and packaged supply for distributors serving regulated industries." },
  { Icon: Microscope, title: "Laboratories & Research", body: "Analytical and synthesis-grade reagents with full documentation." },
];

const faqs = [
  { q: "Do you provide SDS and CoA documentation?", a: "Yes. Every consignment ships with a Certificate of Analysis, Safety Data Sheet (GHS-compliant, multi-language available), and on request, Technical Data Sheets and DMF support for regulated markets." },
  { q: "Which industries do you serve?", a: "Pharmaceutical and nutraceutical manufacturers, veterinary drug formulators, food and beverage processors, chemical distributors and research laboratories — across India and 40+ export destinations." },
  { q: "Do you supply internationally?", a: "Yes. We export to North America, Europe, the Middle East, Africa and the ASEAN region. We handle CHA coordination, multimodal logistics and complete export documentation including COO, CoA and SDS." },
  { q: "Are your products GMP compliant?", a: "Our APIs and pharma intermediates are sourced from WHO-GMP and EU-GMP audited manufacturers. Food-grade chemicals comply with FCC, FSSAI and applicable kosher/halal standards." },
];

export function HomeSections() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-paper">
        <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:py-24 lg:py-28">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1 text-xs uppercase tracking-[0.16em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" /> Mumbai · Serving 40+ countries
            </span>
            <h1 className="mt-6 font-display text-4xl text-balance text-ink md:text-5xl lg:text-[3.5rem]">
              Trusted chemical solutions for
              <span className="block text-brand"> pharma, food &amp; veterinary industries.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              We supply high-quality active pharmaceutical ingredients, food-grade chemicals,
              veterinary APIs and intermediates — backed by global compliance, complete documentation
              and dependable lead times.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-brand px-6 text-paper hover:bg-brand-deep">
                <Link to="/products">Explore Products <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-accent-orange bg-transparent px-6 text-brand hover:bg-accent-orange/10 hover:text-brand"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-cream/70 blur-xl" aria-hidden />
            <img
              src={heroImg}
              alt="Iron oxide, copper sulfate and zinc oxide samples in laboratory dishes"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="aspect-[5/4] w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>

        {/* trust strip */}
        <div className="border-y border-border bg-cream">
          <ul className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-[11px] uppercase tracking-[0.16em] text-ink-soft md:justify-between">
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-accent-orange" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section aria-labelledby="cat-h" className="container-page py-20 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Catalogue</p>
            <h2 id="cat-h" className="mt-2 font-display text-3xl text-brand md:text-4xl">Four core product lines.</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-brand hover:text-accent-orange md:inline-flex">
            See all products →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/categories/$category"
              params={{ category: c.slug }}
              className="group flex flex-col justify-between rounded-xl border border-border bg-paper p-7 transition hover:-translate-y-1 hover:border-accent-orange/60 hover:shadow-[var(--shadow-lift)]"
            >
              <div>
                <span className="font-display text-5xl text-accent-orange/40 group-hover:text-accent-orange">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl text-brand">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.blurb}</p>
              </div>
              <span className="mt-6 text-sm font-medium text-accent-orange">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section aria-labelledby="cert-h" className="bg-cream py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Quality &amp; Compliance</p>
            <h2 id="cert-h" className="mt-2 font-display text-3xl text-brand md:text-4xl">Certifications &amp; Compliance</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Kanchan International maintains rigorous quality and compliance standards to ensure safe,
              reliable and globally accepted chemical products.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { title: "GMP Aligned", body: "Sourced from WHO/EU-GMP audited manufacturers." },
              { title: "ISO 9001:2015", body: "Quality management system across operations." },
              { title: "DMF Available", body: "On request for regulated pharma markets." },
              { title: "SDS / GHS Compliant", body: "Multi-language safety documentation." },
              { title: "Low Heavy Metals", body: "Validated impurity profiles per batch." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-paper p-6 text-center transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-soft)]">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base text-brand">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft">
            <Link to="/certifications" className="font-medium text-brand underline decoration-accent-orange decoration-2 underline-offset-4 hover:text-accent-orange">
              View certification documents →
            </Link>
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section aria-labelledby="feat-h" className="container-page py-20 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Featured</p>
            <h2 id="feat-h" className="mt-2 font-display text-3xl text-brand md:text-4xl">Hand-picked from our catalogue.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts().map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* WHY */}
      <section aria-labelledby="why-h" className="bg-cream py-20 md:py-24">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Why Kanchan</p>
          <h2 id="why-h" className="mt-2 max-w-2xl font-display text-3xl text-brand md:text-4xl">
            A supply partner manufacturers can plan around.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { Icon: ShieldCheck, title: "Consistent quality assurance", body: "Every batch ships with CoA, residual solvent and heavy-metal data. DMF available for regulated markets." },
              { Icon: BadgeCheck, title: "Regulatory-compliant solutions", body: "GMP-aligned sourcing, USP / BP / EP / IP grades and GHS-compliant SDS in multiple languages." },
              { Icon: Truck, title: "Reliable global sourcing", body: "Bonded warehousing in Mumbai, multimodal logistics and forward contracts for high-volume customers." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-paper p-7 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-brand">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section aria-labelledby="ind-h" className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Sectors</p>
          <h2 id="ind-h" className="mt-2 font-display text-3xl text-brand md:text-4xl">Industries We Serve</h2>
          <p className="mt-4 text-base text-ink-soft">
            From regulated pharma formulators to large-scale food processors, our customers rely on us
            for documentation, consistency and on-time supply.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ Icon, title, body }) => (
            <div key={title} className="group rounded-xl border border-border bg-paper p-6 transition hover:-translate-y-0.5 hover:border-accent-orange/60 hover:shadow-[var(--shadow-soft)]">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-orange-soft/60 text-brand group-hover:bg-accent-orange group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg text-brand">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL EXPORT */}
      <section className="relative overflow-hidden bg-brand text-paper">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container-page relative py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent-orange-soft">
                <Globe2 className="h-3.5 w-3.5" /> Global presence
              </span>
              <h2 className="mt-5 font-display text-3xl text-paper md:text-4xl">
                Mumbai-headquartered. Compliance-driven exports.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-paper/80">
                We combine international sourcing relationships with a Mumbai-based logistics hub to
                deliver chemical ingredients on time and in spec — from a single drum to full container
                loads — backed by complete export documentation.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-5">
              {[
                { k: "25+", v: "Years of experience" },
                { k: "40+", v: "Countries served" },
                { k: "4", v: "Product categories" },
                { k: "6", v: "Industries served" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-paper/15 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <p className="font-display text-4xl text-accent-orange-soft md:text-5xl">{s.k}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-paper/70">{s.v}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">FAQ</p>
            <h2 id="faq-h" className="mt-2 font-display text-3xl text-brand md:text-4xl">
              Common questions from international buyers.
            </h2>
            <p className="mt-4 text-ink-soft">
              Can't find what you're looking for? <Link to="/contact" className="font-medium text-brand underline decoration-accent-orange underline-offset-4">Talk to our sales team</Link>.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-medium text-brand hover:text-accent-orange">
                  <span className="flex items-center gap-2">
                    <ChevronDown className="hidden h-4 w-4" /> {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* CTA STRIP */}
      <section className="bg-cream">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center md:py-16">
          <div>
            <h2 className="font-display text-2xl text-brand md:text-3xl">Need a custom quote?</h2>
            <p className="mt-2 max-w-xl text-ink-soft">
              Share your specifications and target volume — our team responds within 24 hours with
              pricing, lead times and complete documentation.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-brand text-paper hover:bg-brand-deep">
            <Link to="/contact">Request a quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
