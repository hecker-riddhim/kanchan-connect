import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

import appCss from "../styles.css?url";
import logoUrl from "@/assets/kanchan-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-accent-orange">404</p>
        <h1 className="mt-3 font-display text-3xl text-brand">Page not found</h1>
        <p className="mt-2 text-sm text-ink-soft">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-paper hover:bg-brand-deep">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-paper hover:bg-navy-deep"
          >Try again</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kanchan International, Chemical Ingredients, APIs & Intermediates" },
      { name: "description", content: "Mumbai-based supplier of food-grade chemicals, human and veterinary APIs, and pharmaceutical intermediates. GMP-aligned sourcing, full documentation, global shipping." },
      { name: "author", content: "Kanchan International" },
      { property: "og:site_name", content: "Kanchan International" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: logoUrl },
      { name: "twitter:image", content: logoUrl },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoUrl },
      { rel: "apple-touch-icon", href: logoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kanchan International",
          url: "/",
          logo: logoUrl,
          description:
            "Mumbai-based supplier of food-grade mineral fortificants, human and veterinary APIs, and pharmaceutical intermediates, with five decades of specialty-chemical expertise.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "404, Ganjawala Tower, 508, Sane Guruji Marg, Tardeo",
            addressLocality: "Mumbai",
            postalCode: "400034",
            addressRegion: "MH",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-7777047722",
            email: "info@kanchanin.com",
            contactType: "sales",
            areaServed: "Worldwide",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
