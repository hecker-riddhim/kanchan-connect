import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { categories } from "@/data/products";

const WA = "https://wa.me/917777047722?text=Hello%20Kanchan%20International%2C%20I%20would%20like%20to%20enquire%20about%20your%20chemical%20products.";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl text-brand">Kanchan International</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
            A Mumbai-based supplier of food-grade chemicals, human and veterinary active pharmaceutical
            ingredients, and pharmaceutical intermediates — trusted by manufacturers across pharma,
            nutraceutical, food and veterinary industries worldwide.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1ebe57] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Categories</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/categories/$category" params={{ category: c.slug }} className="hover:text-brand">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            <li><Link to="/about" className="hover:text-brand">About</Link></li>
            <li><Link to="/products" className="hover:text-brand">Products</Link></li>
            <li><Link to="/certifications" className="hover:text-brand">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Reach us</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-soft">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
              <div>
                <p className="font-medium text-ink">Registered Office</p>
                <p>404, Ganjawala Tower, 508,<br />Sane Guruji Marg, Tardeo,<br />Mumbai 400 034, India</p>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
              <div>
                <p className="font-medium text-ink">Office</p>
                <p>16, 2nd Floor, Moose Building,<br />514 Kalbadevi Road,<br />Mumbai 400 002, India</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
              <div>
                <a href="tel:+919869120279" className="block hover:text-brand">+91 98691 20279</a>
                <a href="tel:+917777047722" className="block hover:text-brand">+91 7777 047 722</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
              <a href="mailto:info@kanchanin.com" className="hover:text-brand">info@kanchanin.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kanchan International. All rights reserved.</p>
          <p>GMP-aligned sourcing · ISO 9001:2015 quality system</p>
        </div>
      </div>
    </footer>
  );
}
