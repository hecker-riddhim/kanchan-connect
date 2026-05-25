import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Factory, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Kanchan International" },
      { name: "description", content: "Mumbai-based chemical trading company supplying food-grade chemicals, APIs and intermediates to manufacturers across pharma, food and veterinary industries." },
      { property: "og:title", content: "About Kanchan International" },
      { property: "og:description", content: "Two decades of trusted chemical sourcing from Mumbai to the world." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-paper">
        <div className="container-page py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">About</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-balance text-paper md:text-5xl">
            Two decades of trusted chemical sourcing — from Mumbai to manufacturers worldwide.
          </h1>
          <p className="mt-5 max-w-2xl text-paper/75 md:text-lg">
            Kanchan International is a B2B chemical trading house specialising in food-grade chemicals,
            active pharmaceutical ingredients and intermediates. We work with audited manufacturers and
            ship to formulators across pharma, food, and veterinary sectors.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-3">
        {[
          { Icon: Factory, n: "100+", l: "Manufacturer partners across India and Asia" },
          { Icon: Globe2, n: "40+", l: "Countries served — Asia, EU, MENA, Africa, Americas" },
          { Icon: Award, n: "ISO 9001", l: "Quality management system since 2009" },
        ].map(({ Icon, n, l }) => (
          <div key={l} className="border-l-2 border-gold pl-5">
            <Icon className="h-6 w-6 text-gold" />
            <p className="mt-4 font-display text-4xl text-navy">{n}</p>
            <p className="mt-1 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl text-navy md:text-4xl">How we work</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Every product we list is sourced from manufacturers we have audited for quality systems,
              regulatory readiness and consistent supply. Each shipment carries a full Certificate of
              Analysis and a GHS-compliant Safety Data Sheet, with DMF support available for regulated markets.
            </p>
            <p>
              Our Mumbai team handles documentation, export logistics, and bonded warehousing in-house —
              so manufacturers in the EU, Middle East, Africa and Americas get a single point of contact
              for sourcing, regulatory documentation and shipment tracking.
            </p>
            <p>
              For high-volume customers we offer forward contracts and dedicated inventory, ensuring
              continuity even during raw material market volatility.
            </p>
            <Link to="/contact" className="inline-flex text-sm font-medium text-gold hover:underline">
              Start a conversation with our team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
