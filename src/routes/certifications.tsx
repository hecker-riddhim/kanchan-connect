import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import iso9001 from "@/assets/certs/iso9001.png.asset.json";
import gmp from "@/assets/certs/gmp.png.asset.json";
import crisil from "@/assets/certs/crisil.png.asset.json";
import halal from "@/assets/certs/halal.png.asset.json";
import haccp from "@/assets/certs/haccp.png.asset.json";
import fssai from "@/assets/certs/fssai.png.asset.json";
import iso22000 from "@/assets/certs/iso22000.png.asset.json";
import kosher from "@/assets/certs/kosher.png.asset.json";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: "Certifications & Compliance, Kanchan International" },
      { name: "description", content: "ISO 9001:2008, GMP, HACCP, FSSAI, ISO 22000:2005, Halal, Kosher and CRISIL Rated, the certifications and compliance standards behind Kanchan International's chemical supply." },
      { property: "og:title", content: "Certifications & Compliance, Kanchan International" },
      { property: "og:description", content: "Quality and compliance standards for global B2B chemical supply." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});

type Cert = { title: string; issuer: string; body: string; image: string };

const certs: Cert[] = [
  { title: "ISO 9001:2008", issuer: "Certified Company", body: "Certified quality management system across sourcing, storage, repacking and dispatch operations, ensuring consistent quality on every consignment.", image: iso9001.url },
  { title: "GMP", issuer: "Good Manufacturing Practice", body: "All APIs and pharmaceutical intermediates are sourced from manufacturers audited against current Good Manufacturing Practice standards for consistent quality.", image: gmp.url },
  { title: "HACCP", issuer: "Hazard Analysis Critical Control Point", body: "Food-grade operations follow HACCP principles, identifying and controlling critical points across the supply chain to ensure product safety.", image: haccp.url },
  { title: "FSSAI Registered", issuer: "Food Safety & Standards Authority of India", body: "Food-grade chemical operations registered under the Food Safety and Standards Authority of India, with full traceability of every batch.", image: fssai.url },
  { title: "ISO 22000:2005", issuer: "Certified Food Safety Management System", body: "Food safety management system covering handling, storage and dispatch of food-grade chemical ingredients, aligned with global food-safety norms.", image: iso22000.url },
  { title: "Halal Certified", issuer: "Halal India", body: "Halal certification available for applicable food-grade product lines, supported by documentation for export markets.", image: halal.url },
  { title: "Kosher Certified", issuer: "For food-grade product lines", body: "Kosher certificates available for applicable food-grade chemical products, ensuring acceptance across religious dietary standards.", image: kosher.url },
  { title: "CRISIL Rated", issuer: "CRISIL Ratings", body: "Independently rated by CRISIL, reflecting financial stability and reliability as a long-standing supply partner for global buyers.", image: crisil.url },
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
              <div className="grid h-24 w-full place-items-center rounded-lg bg-cream/60 p-3">
                <img src={c.image} alt={`${c.title} certification logo`} className="max-h-20 w-auto object-contain" loading="lazy" />
              </div>
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
                Certificates of Analysis, COO and stability data are available
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
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-cream p-2">
                  <img src={open.image} alt={`${open.title} certification logo`} className="max-h-14 w-auto object-contain" />
                </div>
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
