import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-1.5 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Kanchan International — Home">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-navy text-paper">
            <span className="font-display text-lg leading-none">K</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base text-navy">Kanchan International</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Chemical Ingredients · Mumbai
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              className="relative text-sm font-medium text-muted-foreground transition hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-navy text-paper hover:bg-navy-deep">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden" id="mobile-menu">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-navy"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-3 bg-navy text-paper hover:bg-navy-deep">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Request a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
