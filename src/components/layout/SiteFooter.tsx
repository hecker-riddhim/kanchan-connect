import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { categories } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-gold text-navy">
              <span className="font-display text-lg leading-none">K</span>
            </span>
            <span className="font-display text-lg">Kanchan International</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            Mumbai-based supplier of food-grade chemicals, APIs and intermediates to manufacturers
            across pharma, food and veterinary industries.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-soft">Categories</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/categories/$category" params={{ category: c.slug }} className="hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-soft">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-soft">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Andheri (E), Mumbai 400069, India</li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href="tel:+912226831234" className="hover:text-gold">+91 22 2683 1234</a></li>
            <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href="mailto:sales@kanchanin.com" className="hover:text-gold">sales@kanchanin.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kanchan International. All rights reserved.</p>
          <p>Manufactured & supplied under GMP · ISO 9001:2015 quality system</p>
        </div>
      </div>
    </footer>
  );
}
