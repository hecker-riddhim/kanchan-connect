import { createFileRoute } from "@tanstack/react-router";
import { HomeSections } from "@/components/home/HomeSections";

export const Route = createFileRoute("/")({
  component: HomeSections,
  head: () => ({
    meta: [
      { title: "Kanchan International, Chemical Ingredients, APIs & Intermediates" },
      { name: "description", content: "Mumbai-based B2B supplier of food-grade chemicals, human and veterinary APIs, and intermediates for manufacturers worldwide." },
      { property: "og:title", content: "Kanchan International, Chemical Ingredients" },
      { property: "og:description", content: "GMP-aligned sourcing, full documentation, global shipping." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
