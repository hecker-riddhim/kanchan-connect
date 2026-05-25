import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/forms/ContactForm";
import { ProductCard } from "@/components/products/ProductCard";
import { categories, productBySlug, products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    if (!p) return {};
    const title = `${p.name} (CAS ${p.cas}) — Kanchan International`;
    const desc = `${p.name} — ${p.purity}, ${p.category}. ${p.description.slice(0, 130)}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          additionalProperty: [
            { "@type": "PropertyValue", name: "CAS Number", value: p.cas },
            { "@type": "PropertyValue", name: "Purity", value: p.purity },
          ],
          brand: { "@type": "Brand", name: "Kanchan International" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `https://kanchanin.com/products/${params.slug}`,
          },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="font-display text-3xl text-navy">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block text-gold underline">Back to catalogue</Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const categorySlug = categories.find((c) => c.name === product.category)?.slug ?? "";
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-navy">Home</Link>
            <span className="mx-1.5">/</span>
            <Link to="/products" className="hover:text-navy">Products</Link>
            <span className="mx-1.5">/</span>
            <Link to="/categories/$category" params={{ category: categorySlug }} className="hover:text-navy">
              {product.category}
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-navy">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="container-page grid gap-12 py-12 md:grid-cols-[1.05fr_1fr] md:py-16">
        <div className="relative aspect-[5/4] overflow-hidden rounded-md border border-border bg-navy molecular-bg">
          <div className="absolute inset-0 grid place-items-center p-12 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">{product.category}</p>
              <p className="mt-4 font-display text-3xl text-paper md:text-4xl">{product.name}</p>
              <p className="mt-3 text-sm text-paper/70">CAS {product.cas}</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex rounded-sm bg-secondary px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-navy">
            {product.category}
          </span>
          <h1 className="mt-4 font-display text-3xl text-navy md:text-4xl">{product.name}</h1>

          <dl className="mt-6 grid grid-cols-2 gap-y-3 border-y border-border py-5 text-sm">
            <dt className="text-muted-foreground">CAS Number</dt><dd className="font-medium text-navy">{product.cas}</dd>
            <dt className="text-muted-foreground">Purity</dt><dd className="font-medium text-navy">{product.purity}</dd>
            <dt className="text-muted-foreground">Packaging</dt><dd className="font-medium text-navy">{product.packaging}</dd>
            <dt className="text-muted-foreground">Compliance</dt><dd className="font-medium text-navy">{product.compliance.join(", ")}</dd>
          </dl>

          <p className="mt-5 text-sm text-muted-foreground">{product.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-navy text-paper hover:bg-navy-deep">Enquire now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader><DialogTitle>Enquire about {product.name}</DialogTitle></DialogHeader>
                <ContactForm defaultCategory={product.category} />
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="border-navy/20 text-navy hover:bg-secondary">
              <Download className="mr-2 h-4 w-4" /> Download SDS
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <Tabs defaultValue="specs">
          <TabsList className="bg-secondary">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="apps">Applications</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="comp">Compliance</TabsTrigger>
          </TabsList>
          <TabsContent value="specs" className="mt-6">
            <div className="overflow-hidden rounded-md border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? "bg-secondary/40" : ""}>
                      <th scope="row" className="w-1/3 px-5 py-3 text-left font-medium text-navy">{s.label}</th>
                      <td className="px-5 py-3 text-muted-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="apps" className="mt-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="rounded-md border border-border bg-card p-4 text-sm text-navy">{a}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="docs" className="mt-6 space-y-3">
            {["Safety Data Sheet (SDS)", "Certificate of Analysis (CoA)", "Technical Data Sheet"].map((d) => (
              <div key={d} className="flex items-center justify-between rounded-md border border-border bg-card p-4">
                <span className="flex items-center gap-3 text-sm text-navy">
                  <FileText className="h-4 w-4 text-gold" /> {d}
                </span>
                <Button size="sm" variant="outline">Request</Button>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="comp" className="mt-6">
            <div className="flex flex-wrap gap-2">
              {product.compliance.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-sm bg-secondary px-3 py-1.5 text-xs font-medium text-navy">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" /> {c}
                </span>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-16">
          <div className="container-page">
            <h2 className="font-display text-2xl text-navy md:text-3xl">Related products</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
