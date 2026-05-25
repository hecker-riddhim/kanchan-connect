import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, X, Award } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: "Certifications & Compliance — Kanchan International" },
      { name: "description", content: "GMP, ISO 9001:2015, DMF, SDS/GHS — explore the certifications and compliance standards behind Kanchan International's chemical supply." },
      { property: "og:title", content: "Certifications & Compliance — Kanchan International" },
      { property: "og:description", content: "Quality and compliance standards for global B2B chemical supply." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});

type Cert = { title: string; issuer: string; body: string };

const certs: Cert[] = [
  { title: "GMP Aligned Sourcing", issuer: "WHO / EU-GMP audited partners", body: "All APIs and pharmaceutical intermediates are sourced from manufacturers audited against current GMP standards." },
  { title: "ISO 9001:2015", issuer: "Quality Management System", body: "Documented quality management across sourcing, storage, repacking and dispatch operations." },
  { title: "Drug Master File (DMF)", issuer: "Available on request", body: "DMF support available for regulated markets including US, EU, Japan, Korea and Australia." },
  { title: "SDS / GHS Compliance", issuer: "Globally Harmonised System", body: "Safety Data Sheets aligned with GHS Rev. 9, available in multiple languages on request." },
  { title: "Low Heavy Metals", issuer: "ICH Q3D / USP <232>", body: "Validated impurity profiles per batch, with elemental impurity data available where required." },
  { title: "Halal & Kosher", issuer: "For food-grade lines", body: "Halal and Kosher certificates available for applicable food-grade chemical products." },
  { title: "REACH Pre-registration", issuer: "European Chemicals Agency", body: "REACH pre-registration support for relevant intermediates and chemicals exported to the EU." },
  { title: "FSSAI Registered", issuer: "Food Safety & Standards Authority", body: "Food-grade chemical operations registered under the Food Safety and Standards Authority of India." },
];

function CertificationsPage() {
  const [open, setOpen] = useState<Cert | null>(null);

  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="container-page py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">Quality &amp; Compliance</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-brand md:text-5xl">
            Certifications &amp; Compliance
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft md:text-lg">
            Kanchan International maintains rigorous quality and compliance standards to ensure safe,
            reliable and globally accepted chemical products. Full documentation is provided with every
            consignment.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <button
              key={c.title}
              onClick={() => setOpen(c)}
              className="group flex flex-col rounded-xl border border-border bg-paper p-8 text-left transition hover:-translate-y-1 hover:border-accent-orange/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand group-hover:bg-brand group-hover:text-paper transition-colors">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg text-brand">{c.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-accent-orange">{c.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">{c.body}</p>
              <span className="mt-5 text-xs font-medium text-brand group-hover:text-accent-orange">
                View details →
              </span>
            </button>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-cream p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-paper">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-2xl text-brand">Need a specific document?</h2>
              <p className="mt-2 text-ink-soft">
                Certificates of Analysis, Safety Data Sheets, DMFs, COO and stability data are available
                on request for any product in our catalogue.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-paper hover:bg-brand-deep"
            >
              Request documentation
            </a>
          </div>
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="sm:max-w-lg">
          {open && (
            <div>
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-2xl text-brand">{open.title}</h2>
                  <p className="mt-1 text-xs uppercase tracking-wider text-accent-orange">{open.issuer}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-ink-soft">{open.body}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
