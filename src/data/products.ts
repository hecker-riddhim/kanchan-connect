export type Category =
  | "Food Grade Chemicals"
  | "Human APIs"
  | "Veterinary APIs"
  | "Intermediates & Specialty Chemicals";

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
    blurb:
      "Mineral fortificants (Iron, Zinc, Copper salts), acidulants and food-grade excipients for nutraceutical and food-processing applications.",
  },
  {
    name: "Human APIs",
    slug: "human-apis",
    blurb:
      "Active pharmaceutical ingredients across antiparasitic, antidiabetic, antimalarial, antidepressant and antiseptic therapeutic categories.",
  },
  {
    name: "Veterinary APIs",
    slug: "veterinary-apis",
    blurb:
      "Anthelmintic and antiparasitic APIs for livestock, poultry, aquaculture and companion-animal formulations.",
  },
  {
    name: "Intermediates & Specialty Chemicals",
    slug: "intermediates",
    blurb:
      "Isophthalic-acid derivatives, X-ray contrast intermediates and specialty sulphides for pharma and industrial synthesis.",
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

const FG: Category = "Food Grade Chemicals";
const HA: Category = "Human APIs";
const VA: Category = "Veterinary APIs";
const IN: Category = "Intermediates & Specialty Chemicals";

const mk = (
  slug: string,
  name: string,
  category: Category,
  cas: string,
  applications: string[],
  description: string,
  opts: Partial<Product> = {},
): Product => ({
  slug,
  name,
  category,
  cas,
  purity: opts.purity ?? "As per IP / BP / USP",
  applications,
  packaging: opts.packaging ?? "25 kg HDPE bag / fibre drum (custom packing on request)",
  description,
  specs: opts.specs ?? [
    { label: "Appearance", value: "As per specification" },
    { label: "Assay", value: opts.purity ?? "As per pharmacopoeial monograph" },
  ],
  compliance: opts.compliance ?? ["IP", "BP", "USP"],
  featured: opts.featured,
});

export const products: Product[] = [
  // ───────── FOOD GRADE — IRON ─────────
  mk("ferrous-fumarate", "Ferrous Fumarate", FG, "141-01-5",
    ["Iron fortification", "Anti-anaemia tablets", "Nutraceutical premixes"],
    "Highly bioavailable iron source widely used in haematinic formulations and food fortification. Reddish-orange free-flowing powder with consistent particle size and low moisture content.",
    { purity: "93.0–101.0% (anhydrous)", compliance: ["USP", "BP", "EP", "FCC"], featured: true }),
  mk("ferrous-sulphate-dried", "Ferrous Sulphate Dried", FG, "7720-78-7",
    ["Iron fortification", "Pharma tablets", "Animal feed premix"],
    "Dried ferrous sulphate (FeSO₄·H₂O equivalent) with high iron assay and excellent compressibility for direct-compression haematinic tablets.",
    { purity: "Fe ≥ 30.0%", compliance: ["USP", "BP", "IP"] }),
  mk("ferrous-sulphate-heptahydrate", "Ferrous Sulphate Heptahydrate", FG, "7782-63-0",
    ["Water treatment", "Fertiliser", "Iron supplement"],
    "Crystalline FeSO₄·7H₂O of food and technical grade — supplied for nutritional, agricultural and industrial use.",
    { purity: "≥ 99.0%", compliance: ["FCC", "BP"] }),
  mk("ferrous-ammonium-sulphate", "Ferrous Ammonium Sulphate", FG, "10138-04-2",
    ["Analytical reagent", "Iron premix", "Pharma intermediate"],
    "Mohr's salt — a stable, light-blue-green crystalline ferrous source used in analytical chemistry and as a reference iron compound.",
    { purity: "≥ 99.0%", compliance: ["AR", "IP"] }),
  mk("ferric-orthophosphate", "Ferric Orthophosphate (Soluble & Insoluble)", FG, "10045-86-0",
    ["Food fortification", "Cereal & flour enrichment", "Infant nutrition"],
    "Low-organoleptic-impact iron source ideal for flour, cereal and dairy fortification. Supplied in both water-soluble and insoluble (encapsulation-grade) forms.",
    { purity: "Fe 28.0–30.0%", compliance: ["FCC", "USP"], featured: true }),
  mk("ferric-pyrophosphate", "Ferric Pyrophosphate (Soluble & Insoluble)", FG, "10058-44-3",
    ["Salt fortification", "Bakery & cereals", "Infant formula"],
    "Sensorially neutral iron compound widely adopted for double-fortified salt and infant nutrition. Available in micronised and encapsulated grades.",
    { purity: "Fe ≥ 24.0%", compliance: ["FCC", "JECFA"] }),
  mk("ferric-glycerophosphate", "Ferric Glycerophosphate", FG, "1301-70-8",
    ["Nutritional supplements", "Tonics & elixirs"],
    "Organic iron compound with high bioavailability, used in oral tonics, syrups and dietary supplements.",
    { compliance: ["BP", "FCC"] }),
  mk("ferric-ammonium-citrate", "Ferric Ammonium Citrate", FG, "1185-57-5",
    ["Pharmaceuticals", "Photographic chemistry", "Iron supplement"],
    "Brown-green deliquescent granules of high solubility, widely used in haematinic syrups and analytical applications.",
    { purity: "Fe 16.5–18.5%", compliance: ["BP", "USP"] }),
  mk("reduced-iron-powder", "Reduced Iron Powder", FG, "7439-89-6",
    ["Food fortification", "Cereal enrichment", "Pharma tablets"],
    "Fine grey powder of elemental iron produced by hydrogen reduction. Used in flour and cereal fortification per FCC specifications.",
    { purity: "Fe ≥ 97.0%", compliance: ["FCC", "USP"] }),
  mk("electrolytic-iron-powder", "Electrolytic Iron Powder", FG, "7439-89-6",
    ["Pharma haematinics", "Premix blends", "Sintering"],
    "High-purity dendritic iron powder produced electrolytically — preferred where superior bioavailability and chemical purity are required.",
    { purity: "Fe ≥ 99.0%", compliance: ["USP", "FCC"] }),

  // ───────── FOOD GRADE — ZINC ─────────
  mk("zinc-sulphate-monohydrate", "Zinc Sulphate Monohydrate", FG, "7446-19-7",
    ["Animal feed", "Nutritional supplements", "Fertiliser"],
    "Free-flowing white crystalline powder, the preferred zinc source for feed premixes and human nutrition due to high zinc concentration and stability.",
    { purity: "Zn ≥ 35.0%", compliance: ["FCC", "BP"], featured: true }),
  mk("zinc-sulphate-heptahydrate", "Zinc Sulphate Heptahydrate", FG, "7446-20-0",
    ["Water treatment", "Agriculture", "Cosmetics"],
    "Crystalline ZnSO₄·7H₂O for agriculture, ophthalmic preparations, and textile and industrial applications.",
    { purity: "≥ 99.0%", compliance: ["BP", "USP"] }),
  mk("zinc-phosphate", "Zinc Phosphate", FG, "7779-90-0",
    ["Corrosion-resistant coatings", "Dental cement", "Pigments"],
    "White or off-white crystalline powder used as a corrosion-inhibiting pigment and in dental cement formulations.",
    { compliance: ["IS"] }),
  mk("zinc-pyrophosphate", "Zinc Pyrophosphate", FG, "7446-26-6",
    ["Nutritional fortification", "Specialty coatings"],
    "Insoluble white powder used as a controlled-release zinc source in fortification and specialty applications.",
    { compliance: ["FCC"] }),
  mk("zinc-powder", "Zinc Powder", FG, "7440-66-6",
    ["Reducing agent", "Battery anodes", "Surface coatings"],
    "Fine grey metallic zinc powder of controlled particle size, supplied for chemical synthesis, batteries and protective coatings.",
    { purity: "Zn ≥ 96.0%", compliance: ["Technical / AR"] }),

  // ───────── FOOD GRADE — COPPER ─────────
  mk("copper-sulphate-pentahydrate", "Copper Sulphate Pentahydrate", FG, "7758-98-7",
    ["Agriculture", "Animal feed", "Algicide", "Mining"],
    "Bright blue crystalline CuSO₄·5H₂O — a versatile copper compound used in agriculture, feed premixes and water treatment.",
    { purity: "Cu ≥ 25.0%", compliance: ["FCC", "BP"], featured: true }),
  mk("copper-sulphate-monohydrate", "Copper Sulphate Monohydrate", FG, "10257-54-2",
    ["Animal nutrition", "Premix manufacture", "Industrial"],
    "Free-flowing pale-blue powder offering a higher copper content than the pentahydrate form, ideal for animal feed and premixes.",
    { purity: "Cu ≥ 35.0%", compliance: ["FCC", "AAFCO"] }),
  mk("copper-phosphate", "Copper Phosphate", FG, "7798-23-4",
    ["Catalysis", "Specialty pigments", "Ceramics"],
    "Light-blue insoluble powder used as a catalyst, pigment and in specialty glaze formulations.",
    { compliance: ["IS"] }),
  mk("copper-pyrophosphate", "Copper Pyrophosphate", FG, "10102-90-6",
    ["Electroplating", "Specialty catalysis"],
    "Bluish-green crystalline powder primarily used in non-cyanide copper electroplating baths.",
    { compliance: ["Technical"] }),
  mk("copper-powder", "Copper Powder", FG, "7440-50-8",
    ["Conductive inks", "Powder metallurgy", "Friction materials"],
    "High-purity dendritic and atomised copper powders for electronics, brake-lining and powder-metallurgy applications.",
    { purity: "Cu ≥ 99.0%", compliance: ["AR", "Technical"] }),

  // ───────── FOOD GRADE — EXCIPIENTS ─────────
  mk("sodium-citrate", "Sodium Citrate", FG, "6132-04-3",
    ["pH regulator", "Anticoagulant", "Beverages & dairy"],
    "Trisodium citrate dihydrate — a widely-used acidity regulator, emulsifying salt and pharmaceutical excipient.",
    { purity: "99.0–101.0%", compliance: ["USP", "BP", "FCC"] }),
  mk("purified-talcum-powder", "Purified Talcum Powder", FG, "14807-96-6",
    ["Tablet lubricant", "Glidant", "Cosmetics"],
    "Pharmacopoeial-grade talc with low microbial count and verified asbestos-free status, used as a tablet glidant and dusting agent.",
    { compliance: ["IP", "BP", "USP"] }),

  // ───────── HUMAN APIs ─────────
  mk("metformin-hcl", "Metformin Hydrochloride", HA, "1115-70-4",
    ["Type-2 diabetes formulations", "Combination therapy"],
    "First-line antidiabetic API supplied with tight impurity control. Suitable for immediate-release and extended-release oral solid dosage forms.",
    { purity: "98.5–101.0%", compliance: ["USP", "BP", "EP"], featured: true,
      specs: [
        { label: "Appearance", value: "White crystalline powder" },
        { label: "Assay", value: "98.5–101.0%" },
        { label: "Cyanoguanidine", value: "≤ 0.02%" },
      ] }),
  mk("bupropion-hcl", "Bupropion Hydrochloride", HA, "31677-93-7",
    ["Antidepressant", "Smoking cessation"],
    "USP-grade bupropion HCl API for immediate-release and sustained-release oral formulations.",
    { compliance: ["USP", "EP"] }),
  mk("tinidazole", "Tinidazole", HA, "19387-91-8",
    ["Antiprotozoal", "Antibacterial"],
    "Broad-spectrum antiprotozoal API used in giardiasis, amoebiasis and trichomoniasis. Pale yellow crystalline powder.",
    { compliance: ["IP", "BP", "USP"], featured: true }),
  mk("ornidazole", "Ornidazole", HA, "16773-42-5",
    ["Antiprotozoal", "Anaerobic infections"],
    "Nitroimidazole derivative used against protozoal and anaerobic bacterial infections.",
    { compliance: ["IP", "BP"] }),
  mk("lumefantrine", "Lumefantrine", HA, "82186-77-4",
    ["Antimalarial (ACT)", "Combination therapy with Artemether"],
    "Critical antimalarial API used in WHO-recommended artemisinin-based combination therapies (ACTs).",
    { compliance: ["IP", "USP", "WHO"], featured: true }),
  mk("artemether", "Artemether", HA, "71963-77-4",
    ["Antimalarial (ACT)", "Severe P. falciparum malaria"],
    "Lipophilic artemisinin derivative used in fixed-dose ACT combinations and severe-malaria injectables.",
    { compliance: ["IP", "USP", "WHO"] }),
  mk("artesunate", "Artesunate", HA, "88495-63-0",
    ["Antimalarial injectable", "Severe malaria"],
    "Water-soluble artemisinin derivative — the WHO-recommended first-line treatment for severe malaria.",
    { compliance: ["IP", "USP", "WHO"] }),
  mk("povidone-iodine", "Povidone Iodine (Solution / Powder)", HA, "25655-41-8",
    ["Topical antiseptic", "Surgical scrub", "Disinfection"],
    "Broad-spectrum antiseptic complex supplied as powder and 10% solution for hospital, surgical and OTC antiseptic applications.",
    { purity: "Available iodine 9.0–12.0%", compliance: ["IP", "BP", "USP"] }),
  mk("albendazole", "Albendazole", HA, "54965-21-8",
    ["Broad-spectrum anthelmintic", "Tablets & suspensions"],
    "Benzimidazole anthelmintic API supplied in micronised grades for human oral suspensions and chewable tablets.",
    { compliance: ["IP", "BP", "USP"] }),
  mk("mebendazole", "Mebendazole", HA, "31431-39-7",
    ["Anthelmintic", "Pinworm & roundworm therapy"],
    "Broad-spectrum anthelmintic API for chewable tablets and oral suspensions.",
    { compliance: ["IP", "BP", "USP"] }),

  // ───────── VETERINARY APIs ─────────
  mk("oxyclozanide-bp", "Oxyclozanide BP", VA, "2277-92-1",
    ["Anthelmintic (livestock)", "Liver-fluke control", "Cattle & sheep"],
    "Salicylanilide anthelmintic API for control of mature liver flukes in cattle, sheep and goats. Supplied in micronised grade with full impurity profile.",
    { compliance: ["BP-Vet"], featured: true }),
  mk("albendazole-vet", "Albendazole (Veterinary Grade)", VA, "54965-21-8",
    ["Anthelmintic — ruminants & companion animals", "Boluses & oral suspensions"],
    "Veterinary-grade albendazole with tight particle-size control for uniform dispersion in boluses, suspensions and premix formulations.",
    { compliance: ["BP-Vet", "USP"] }),

  // ───────── INTERMEDIATES & SPECIALTY ─────────
  mk("5-aminoisophthalic-acid", "5-Aminoisophthalic Acid", IN, "99-31-0",
    ["X-ray contrast media intermediate", "Polymer synthesis"],
    "Key intermediate for non-ionic iodinated contrast agents (iohexol, iopamidol) and for high-performance polyamide synthesis.",
    { purity: "≥ 99.0%", compliance: ["In-house"], featured: true }),
  mk("5-nitroisophthalic-acid", "5-Nitroisophthalic Acid", IN, "618-88-2",
    ["Contrast media intermediate", "Dye synthesis"],
    "Precursor to 5-aminoisophthalic acid and a versatile intermediate for X-ray contrast agents and dyestuffs.",
    { purity: "≥ 99.0%" }),
  mk("triiodo-5-aminoisophthalic-acid", "2,4,6-Triiodo-5-aminoisophthalic Acid", IN, "35453-19-1",
    ["Iodinated X-ray contrast intermediate", "Iohexol / iopamidol synthesis"],
    "Triiodinated aromatic intermediate central to the manufacture of non-ionic iodinated contrast media.",
    { purity: "≥ 98.0%" }),
  mk("dimethyl-5-nitroisophthalate", "Dimethyl 5-Nitroisophthalate", IN, "13290-96-5",
    ["Polymer intermediate", "Pharma synthesis"],
    "Diester intermediate used in the manufacture of specialty polyesters and pharma intermediates.",
    { purity: "≥ 99.0%" }),
  mk("monomethyl-5-nitroisophthalate", "Monomethyl 5-Nitroisophthalate", IN, "1955-46-0",
    ["Pharma intermediate", "Polymer chemistry"],
    "Mono-ester intermediate with selective reactivity, used in stepwise contrast-agent and polymer syntheses.",
    { purity: "≥ 98.0%" }),
  mk("4-chloro-2-aminophenol", "4-Chloro-2-Aminophenol", IN, "95-85-2",
    ["Dye intermediate", "Pharma intermediate"],
    "Aromatic amine intermediate used in the synthesis of dyes, pigments and active pharmaceutical ingredients.",
    { purity: "≥ 98.0%" }),
  mk("245-triiodobenzoic-acid", "2,3,5-Triiodobenzoic Acid", IN, "88-82-4",
    ["Plant growth regulator", "Specialty intermediate"],
    "Iodinated aromatic acid used as a plant-growth regulator and as a synthesis intermediate.",
    { purity: "≥ 98.0%" }),
  mk("15-diaminonaphthalene", "1,5-Diaminonaphthalene", IN, "2243-62-1",
    ["Polymer (polyimide) intermediate", "Dye synthesis"],
    "Diamine monomer used in high-performance polyimides, dyes and specialty chemical synthesis.",
    { purity: "≥ 98.0%" }),
  mk("fumaric-acid", "Fumaric Acid", IN, "110-17-8",
    ["Acidulant", "Resin intermediate", "Pharma synthesis"],
    "White crystalline α,β-unsaturated dicarboxylic acid used as a food acidulant, polymer intermediate and pharma raw material.",
    { purity: "≥ 99.5%", compliance: ["FCC", "BP", "USP"] }),
  mk("turkey-red-oil", "Turkey Red Oil (Sulphated Castor Oil)", IN, "8002-33-3",
    ["Textile dyeing", "Cosmetic emulsifier", "Lubricant"],
    "Water-soluble sulphated castor oil — the original textile-industry surfactant, also used in personal care and metalworking.",
    { purity: "Active matter ≥ 50%", compliance: ["IS"] }),
  mk("zinc-sulphide", "Zinc Sulphide", IN, "1314-98-3",
    ["Pigment", "Phosphors & optical coatings", "Rubber compounding"],
    "White-to-yellowish powder used as a pigment, optical-coating material and IR-window component.",
    { purity: "≥ 97.0%" }),
  mk("copper-sulphide", "Copper Sulphide", IN, "1317-40-4",
    ["Lubricant additive", "Pigment", "Catalyst"],
    "Black crystalline copper(II) sulphide used in solid lubricants, anti-fouling coatings and as a synthesis intermediate.",
    { purity: "≥ 95.0%" }),
  mk("ferrous-sulphide", "Ferrous Sulphide", IN, "1317-37-9",
    ["Hydrogen sulphide generation", "Steel additive", "Pigment"],
    "Black metallic-lustre granules / lumps used in laboratory H₂S generation and metallurgical applications.",
    { purity: "FeS ≥ 90.0%" }),
  mk("ferric-sulphate", "Ferric Sulphate", IN, "10028-22-5",
    ["Water & wastewater treatment", "Mordant", "Pigment"],
    "Pale-yellow crystalline ferric sulphate used as a coagulant in water treatment and as a dyeing mordant.",
    { purity: "≥ 97.0%" }),
  mk("copper-iron-sulphide", "Copper Iron Sulphide (Chalcopyrite)", IN, "37293-35-9",
    ["Mineral concentrate", "Metallurgy", "Pigments"],
    "Brassy-yellow CuFeS₂ mineral powder used in metallurgical research and specialty pigments.",
    { purity: "As per technical grade" }),
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (name: Category) =>
  products.filter((p) => p.category === name);
export const featuredProducts = () => products.filter((p) => p.featured);

export const trustBadges = [
  "ISO 9001:2015",
  "FSSAI Registered",
  "WHO-GMP Sourced",
];
