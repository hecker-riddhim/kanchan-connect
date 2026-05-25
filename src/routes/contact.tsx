import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Kanchan International" },
      { name: "description", content: "Request a quote, technical data sheet or SDS. Our Mumbai team responds within 24 hours." },
      { property: "og:title", content: "Contact Kanchan International" },
      { property: "og:description", content: "Sales team in Mumbai — responds within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-navy md:text-5xl">
            Tell us what you need — we respond within 24 hours.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Pricing, lead time, documentation, custom packaging — share specifications and target
            volume and our sales team will get back to you with a complete proposal.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-14 py-14 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-md border border-border bg-card p-6 md:p-10">
          <ContactForm />
        </div>

        <aside className="space-y-7">
          <ContactRow Icon={MapPin} title="Office">
            Kanchan International<br />Andheri (E), Mumbai 400069<br />Maharashtra, India
          </ContactRow>
          <ContactRow Icon={Phone} title="Phone">
            <a href="tel:+912226831234" className="hover:text-gold">+91 22 2683 1234</a>
          </ContactRow>
          <ContactRow Icon={Mail} title="Email">
            <a href="mailto:sales@kanchanin.com" className="hover:text-gold">sales@kanchanin.com</a>
          </ContactRow>
          <ContactRow Icon={Clock} title="Hours">
            Mon – Sat · 09:30 – 18:30 IST
          </ContactRow>
        </aside>
      </section>
    </>
  );
}

function ContactRow({ Icon, title, children }: { Icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-navy text-gold">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-sm text-navy">{children}</p>
      </div>
    </div>
  );
}
