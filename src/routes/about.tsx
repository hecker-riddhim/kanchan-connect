import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Factory, Globe2, Target, Compass, HandshakeIcon, Leaf, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Kanchan International — Three Decades in Specialty Chemicals" },
      { name: "description", content: "Kanchan International is a Mumbai-based supplier of food-grade mineral fortificants, human and veterinary APIs and pharmaceutical intermediates — backed by three decades of manufacturing know-how and global compliance." },
      { property: "og:title", content: "About Kanchan International" },
      { property: "og:description", content: "Three decades of specialty-chemical manufacturing and trading expertise, serving pharma, nutraceutical, food and veterinary industries worldwide." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const principles = [
  { Icon: HandshakeIcon, title: "Adhere", body: "To ethical norms in every dealing with employees, customers, suppliers, financial institutions and government." },
  { Icon: Award, title: "Provide Value", body: "Deliver real value to customers through consistent product quality and dependable services." },
  { Icon: ShieldCheck, title: "Respect Our People", body: "Treat our team with respect — recognise initiative, innovation and creativity, and create opportunities to learn and grow." },
  { Icon: Compass, title: "Open Communication", body: "Maintain a climate of trust, open communication and team spirit — operating with moderation and humility." },
  { Icon: Leaf, title: "Protect The Environment", body: "Discharge our responsibility to society — preserve the environment and exceed statutory norms on pollution control and safety." },
  { Icon: Target, title: "Sustained Growth", body: "Grow in an accelerated yet disciplined manner through continuous organisational renewal." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-cream">
        <div className="container-page py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.18em] text-accent-orange">About Kanchan International</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-balance text-brand md:text-5xl">
            Three decades of expertise in specialty chemicals — from Mumbai to manufacturers worldwide.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft md:text-lg">
            Kanchan International has been engaged in the specialty-chemical business for over three
            decades. Our deep manufacturing know-how, vast distribution network and trusted relationships
            with reputed customers form the foundation of everything we do.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Our Story</p>
          <h2 className="mt-2 font-display text-3xl text-brand md:text-4xl">
            Built on technical depth, sustained by integrity.
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
            <p>
              For more than thirty years we have built a strong presence in the Indian specialty-chemical
              market — earning the goodwill of reputed pharmaceutical, nutraceutical, food and veterinary
              customers. The engineering and process know-how for our entire product range has been
              developed in-house, and we extend the same expertise as consultancy to several partner
              manufacturers.
            </p>
            <p>
              Our factory operates a well-equipped quality-control laboratory staffed by trained chemists
              who carry out both process control and finished-product analysis. The product quality across
              our entire portfolio aligns with international standards — pharmacopoeial, food-grade and
              technical — and is shipped with complete documentation.
            </p>
            <p>
              The future may be unknown, but our commitment to placing technical and commercial
              proficiency at the service of our customers makes it look bright.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-paper p-7 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Our Motto</p>
            <p className="mt-2 font-display text-2xl text-brand">"Customer Satisfaction."</p>
          </div>
          <div className="rounded-2xl border border-border bg-paper p-7 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Our Vision</p>
            <p className="mt-2 font-display text-2xl text-brand">
              To be the largest global supplier and key player in APIs and Food-Grade Chemicals.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-paper p-7 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Mission Statement</p>
            <p className="mt-2 leading-relaxed text-ink">
              A promise of unmatched, international-grade quality, terms and customised services —
              setting a benchmark for others to follow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand text-paper">
        <div className="container-page grid gap-10 py-16 md:grid-cols-4">
          {[
            { Icon: Factory, n: "30+", l: "Years in specialty chemicals" },
            { Icon: Globe2, n: "Pan-India", l: "Distribution & export reach" },
            { Icon: Award, n: "ISO 9001", l: "Quality management system" },
            { Icon: ShieldCheck, n: "FSSAI", l: "Registered food-grade operations" },
          ].map(({ Icon, n, l }) => (
            <div key={l} className="border-l-2 border-accent-orange pl-5">
              <Icon className="h-6 w-6 text-accent-orange-soft" />
              <p className="mt-4 font-display text-4xl text-paper">{n}</p>
              <p className="mt-1 text-sm text-paper/75">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision pillars */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Corporate Vision</p>
          <h2 className="mt-2 font-display text-3xl text-brand md:text-4xl">
            To be a leader in food and pharmaceutical ingredients.
          </h2>
          <p className="mt-4 text-ink-soft">
            Our growth is anchored in four pillars — quality, efficiency, profitability and stakeholder
            satisfaction.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "High-Quality Products", body: "An uncompromising standard of quality across every product line we represent." },
            { n: "02", title: "Cost-Effective & Energy-Efficient", body: "Modern, efficient operations that deliver competitive value to our customers." },
            { n: "03", title: "Sustained Profitable Growth", body: "Disciplined growth that secures long-term partnerships and reinvestment." },
            { n: "04", title: "Stakeholder Satisfaction", body: "A high level of satisfaction for customers, employees, partners and communities." },
          ].map((p) => (
            <div key={p.n} className="rounded-xl border border-border bg-paper p-7 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
              <span className="font-display text-5xl text-accent-orange/40">{p.n}</span>
              <h3 className="mt-4 font-display text-lg text-brand">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Beliefs */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Values &amp; Beliefs</p>
            <h2 className="mt-2 font-display text-3xl text-brand md:text-4xl">
              The principles that guide our business.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-paper p-7 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg text-brand">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-2xl bg-brand p-10 text-center text-paper md:p-14">
          <h2 className="font-display text-3xl text-paper md:text-4xl">
            Let's discuss your sourcing requirement.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/80">
            Share your specifications, target volume and destination — our team will respond within
            24 hours with pricing, documentation and lead-time confirmation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-accent-orange px-7 py-3 text-sm font-medium text-white hover:bg-accent-orange/90"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
