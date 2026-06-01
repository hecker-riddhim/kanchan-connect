import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kanchan-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-background/70 backdrop-blur",
      ].join(" ")}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-1.5 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page flex h-20 items-center justify-between md:h-28">
        <Link to="/" className="flex items-center gap-3" aria-label="Kanchan International — Home">
          <img
            src={logo}
            alt="Kanchan International — Food-grade chemicals, APIs & intermediates"
            width={280}
            height={96}
            className="h-14 w-auto md:h-20"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-brand after:scale-x-100" }}
              className="relative text-sm font-medium text-ink-soft transition hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent-orange after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-brand px-5 text-paper hover:bg-brand-deep">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6 text-brand" /> : <Menu className="h-6 w-6 text-brand" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden animate-in fade-in slide-in-from-top-2 duration-200" id="mobile-menu">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-brand"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-3 rounded-full bg-brand text-paper hover:bg-brand-deep">
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
