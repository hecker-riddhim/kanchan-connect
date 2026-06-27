import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact, Kanchan International" },
      { name: "description", content: "Request a quote or technical data sheet. Our Mumbai team responds within 24 hours." },
      { property: "og:title", content: "Contact Kanchan International" },
      { property: "og:description", content: "Sales team in Mumbai, responds within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const WA = "https://wa.me/917777047722?text=Hello%20Kanchan%20International%2C%20I%20would%20like%20to%20enquire%20about%20your%20chemical%20products.";

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="container-page py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-brand md:text-5xl">
            Tell us what you need, we respond within 24 hours.
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft md:text-lg">
            Pricing, lead time, documentation, custom packaging, share specifications and target
            volume, and our sales team will get back to you with a complete proposal.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-14 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-border bg-paper p-6 shadow-[var(--shadow-soft)] md:p-10">
          <ContactForm />
        </div>

        <aside className="space-y-5">
          <ContactCard Icon={MapPin} title="Registered Office" href="https://maps.app.goo.gl/XJLKKiVF6FXijg19A">
            404, Ganjawala Tower, 508,<br />
            Sane Guruji Marg, Tardeo,<br />
            Mumbai 400 034, India
          </ContactCard>
          <ContactCard Icon={MapPin} title="Office" href="https://maps.app.goo.gl/SNxFPF9iZUQXP7fz9">
            16, 2nd Floor, Moose Building,<br />
            514 Kalbadevi Road,<br />
            Mumbai 400 002, India
          </ContactCard>
          <ContactCard Icon={Phone} title="Phone">
            <a href="tel:+917777047722" className="block hover:text-brand">+91 7777 047 722</a>
          </ContactCard>
          <ContactCard Icon={Mail} title="Email">
            <a href="mailto:info@kanchanin.com" className="hover:text-brand">info@kanchanin.com</a>
          </ContactCard>
          <ContactCard Icon={Clock} title="Hours">
            Mon – Sat · 09:30 – 18:30 IST
          </ContactCard>

          <a
            href={WA}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#1ebe57]"
          >
            <MessageCircle className="h-4 w-4" /> Chat with us on WhatsApp
          </a>
        </aside>
      </section>

      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <iframe
            title="Kanchan International, Mumbai office on Google Maps"
            src="https://www.google.com/maps?q=Kalbadevi+Road+Mumbai+400002&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({ Icon, title, children, href }: { Icon: typeof Mail; title: string; children: React.ReactNode; href?: string }) {
  const body = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-orange">{title}</p>
        <p className="mt-1 text-sm text-ink">{children}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className="flex gap-4 rounded-xl border border-border bg-paper p-5 transition hover:border-accent-orange hover:shadow-[var(--shadow-soft)]">
        {body}
      </a>
    );
  }
  return <div className="flex gap-4 rounded-xl border border-border bg-paper p-5">{body}</div>;
}
