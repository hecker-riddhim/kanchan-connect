export type Category =
  | "Food Grade Chemicals"
  | "Human APIs"
  | "Veterinary APIs"
  | "Intermediates";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  cas: string;
  purity: string;
  applications: string[];
  packaging: string;
  description: string;
  specs: { label: string; value: string }[];
  compliance: string[];
  featured?: boolean;
}

export const categories: { name: Category; slug: string; blurb: string }[] = [
  {
    name: "Food Grade Chemicals",
    slug: "food-grade-chemicals",
    blurb: "Preservatives, acidulants, antioxidants and additives for food processing.",
  },
  {
    name: "Human APIs",
    slug: "human-apis",
    blurb: "Active pharmaceutical ingredients for human therapeutic formulations.",
  },
  {
    name: "Veterinary APIs",
    slug: "veterinary-apis",
    blurb: "APIs for veterinary drug manufacturers — livestock, poultry and companion animals.",
  },
  {
    name: "Intermediates",
    slug: "intermediates",
    blurb: "Pharmaceutical and industrial intermediates with consistent batch quality.",
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const products: Product[] = [
  {
    slug: "citric-acid-monohydrate",
    name: "Citric Acid Monohydrate",
    category: "Food Grade Chemicals",
    cas: "5949-29-1",
    purity: "99.5% min",
    applications: ["Beverages", "Confectionery", "Preservation", "pH regulation"],
    packaging: "25 kg HDPE bag with PE liner",
    description:
      "High-purity food-grade citric acid monohydrate complying with FCC, USP and BP standards. Suitable for acidulation, flavour enhancement and microbial control across food and beverage applications.",
    specs: [
      { label: "Appearance", value: "Colourless crystals / white granules" },
      { label: "Assay (anhydrous)", value: "99.5–100.5%" },
      { label: "Heavy metals", value: "≤ 5 ppm" },
      { label: "Loss on drying", value: "7.5–9.0%" },
    ],
    compliance: ["FCC", "USP", "BP", "Halal", "Kosher"],
    featured: true,
  },
  {
    slug: "sodium-benzoate",
    name: "Sodium Benzoate",
    category: "Food Grade Chemicals",
    cas: "532-32-1",
    purity: "99.0% min",
    applications: ["Beverages", "Sauces & dressings", "Preservation"],
    packaging: "25 kg HDPE bag",
    description:
      "Food-grade sodium benzoate, a widely used preservative effective against yeast, mould and select bacteria in acidic food systems.",
    specs: [
      { label: "Appearance", value: "White crystalline powder" },
      { label: "Assay", value: "99.0–100.5%" },
      { label: "Heavy metals", value: "≤ 10 ppm" },
    ],
    compliance: ["FCC", "BP", "E211"],
  },
  {
    slug: "ascorbic-acid",
    name: "Ascorbic Acid (Vitamin C)",
    category: "Food Grade Chemicals",
    cas: "50-81-7",
    purity: "99.0% min",
    applications: ["Nutraceuticals", "Antioxidant", "Fortification"],
    packaging: "25 kg fibre drum",
    description:
      "Pharmaceutical and food-grade L-ascorbic acid for fortification and antioxidant applications. Low heavy metal profile, consistent particle size distribution.",
    specs: [
      { label: "Appearance", value: "White to slightly yellow crystalline powder" },
      { label: "Assay", value: "99.0–100.5%" },
      { label: "Specific rotation", value: "+20.5° to +21.5°" },
    ],
    compliance: ["USP", "BP", "EP", "FCC"],
    featured: true,
  },
  {
    slug: "acetaminophen",
    name: "Acetaminophen (Paracetamol)",
    category: "Human APIs",
    cas: "103-90-2",
    purity: "99.0% min",
    applications: ["Analgesic formulations", "Antipyretic formulations"],
    packaging: "25 kg fibre drum with double PE liner",
    description:
      "USP/BP/EP grade acetaminophen API with tightly controlled impurity profile and low residual solvents. DMF available for regulated markets.",
    specs: [
      { label: "Appearance", value: "White crystalline powder" },
      { label: "Assay", value: "99.0–101.0%" },
      { label: "4-Aminophenol", value: "≤ 50 ppm" },
      { label: "Heavy metals", value: "≤ 10 ppm" },
    ],
    compliance: ["USP", "BP", "EP", "DMF"],
    featured: true,
  },
  {
    slug: "ibuprofen",
    name: "Ibuprofen",
    category: "Human APIs",
    cas: "15687-27-1",
    purity: "99.0% min",
    applications: ["NSAID formulations", "Analgesic", "Anti-inflammatory"],
    packaging: "25 kg fibre drum",
    description:
      "USP/BP grade ibuprofen API supplied with full CoA, DMF support and consistent particle morphology suitable for direct compression.",
    specs: [
      { label: "Appearance", value: "White crystalline powder" },
      { label: "Assay", value: "99.0–101.0%" },
      { label: "Melting range", value: "75–78 °C" },
    ],
    compliance: ["USP", "BP", "EP", "DMF"],
    featured: true,
  },
  {
    slug: "metformin-hcl",
    name: "Metformin Hydrochloride",
    category: "Human APIs",
    cas: "1115-70-4",
    purity: "99.0% min",
    applications: ["Antidiabetic formulations"],
    packaging: "25 kg fibre drum",
    description:
      "USP/BP grade metformin HCl API with low impurity profile. Suitable for immediate and extended-release oral solid dosage forms.",
    specs: [
      { label: "Appearance", value: "White crystalline powder" },
      { label: "Assay", value: "98.5–101.0%" },
      { label: "Cyanoguanidine", value: "≤ 0.02%" },
    ],
    compliance: ["USP", "BP", "EP"],
  },
  {
    slug: "ivermectin",
    name: "Ivermectin",
    category: "Veterinary APIs",
    cas: "70288-86-7",
    purity: "95.0% min",
    applications: ["Antiparasitic — livestock", "Companion animal antiparasitic"],
    packaging: "1 kg / 5 kg HDPE container under inert atmosphere",
    description:
      "Veterinary-grade ivermectin API for injectable, oral and topical formulations. Supplied with full impurity profile and stability data.",
    specs: [
      { label: "Appearance", value: "White to yellowish-white powder" },
      { label: "Assay (H2B1a + H2B1b)", value: "95.0–102.0%" },
      { label: "H2B1a content", value: "≥ 90.0%" },
    ],
    compliance: ["USP", "EP", "BP-Vet"],
    featured: true,
  },
  {
    slug: "oxytetracycline",
    name: "Oxytetracycline HCl",
    category: "Veterinary APIs",
    cas: "2058-46-0",
    purity: "95.0% min",
    applications: ["Veterinary antibiotic", "Aquaculture", "Poultry"],
    packaging: "25 kg fibre drum, light-protected",
    description:
      "Broad-spectrum tetracycline antibiotic for veterinary use. Manufactured under GMP with consistent potency and low impurity content.",
    specs: [
      { label: "Appearance", value: "Yellow crystalline powder" },
      { label: "Potency", value: "≥ 950 µg/mg" },
      { label: "Water content", value: "≤ 2.0%" },
    ],
    compliance: ["USP", "EP", "BP-Vet"],
  },
  {
    slug: "albendazole",
    name: "Albendazole",
    category: "Veterinary APIs",
    cas: "54965-21-8",
    purity: "98.0% min",
    applications: ["Anthelmintic — ruminants", "Companion animals"],
    packaging: "25 kg fibre drum",
    description:
      "Veterinary-grade albendazole API for oral suspensions, boluses and premix formulations. Tight particle size control for uniform dispersion.",
    specs: [
      { label: "Appearance", value: "White to off-white powder" },
      { label: "Assay", value: "98.0–102.0%" },
      { label: "Related substances", value: "≤ 1.0%" },
    ],
    compliance: ["USP", "BP-Vet"],
  },
  {
    slug: "ethyl-acetate",
    name: "Ethyl Acetate",
    category: "Intermediates",
    cas: "141-78-6",
    purity: "99.5% min",
    applications: ["Process solvent", "Extraction", "Coatings"],
    packaging: "180 kg MS drum / IBC / bulk tanker",
    description:
      "High-purity ethyl acetate suitable for pharmaceutical synthesis, extraction processes and high-grade industrial applications.",
    specs: [
      { label: "Appearance", value: "Clear colourless liquid" },
      { label: "Assay", value: "99.5% min" },
      { label: "Water content", value: "≤ 0.05%" },
      { label: "Acidity (as acetic acid)", value: "≤ 0.005%" },
    ],
    compliance: ["ACS", "IP"],
  },
  {
    slug: "methanol",
    name: "Methanol",
    category: "Intermediates",
    cas: "67-56-1",
    purity: "99.9% min",
    applications: ["Pharma intermediate", "Solvent", "HPLC grade available"],
    packaging: "165 kg MS drum / IBC / bulk tanker",
    description:
      "Synthesis-grade methanol with very low water and aldehyde content. HPLC and AR grades available on request.",
    specs: [
      { label: "Appearance", value: "Clear colourless liquid" },
      { label: "Assay", value: "99.9% min" },
      { label: "Water content", value: "≤ 0.05%" },
    ],
    compliance: ["ACS", "IP"],
  },
  {
    slug: "acetic-anhydride",
    name: "Acetic Anhydride",
    category: "Intermediates",
    cas: "108-24-7",
    purity: "99.0% min",
    applications: ["Acetylation reactions", "API synthesis", "Cellulose acetate"],
    packaging: "200 kg MS drum (controlled supply)",
    description:
      "Pharma-grade acetic anhydride for acetylation in API synthesis. Supplied under controlled-substance compliance with full documentation.",
    specs: [
      { label: "Appearance", value: "Clear colourless liquid" },
      { label: "Assay", value: "99.0% min" },
      { label: "Acetic acid content", value: "≤ 1.0%" },
    ],
    compliance: ["IP", "BP"],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (name: Category) =>
  products.filter((p) => p.category === name);
export const featuredProducts = () => products.filter((p) => p.featured);

export const trustBadges = [
  "GMP Certified",
  "ISO 9001:2015",
  "DMF Available",
  "Low Heavy Metals",
  "SDS / GHS Compliant",
];
