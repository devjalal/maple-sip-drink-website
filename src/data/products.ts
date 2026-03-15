export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  frameCount: number;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  freshnessSection: { title: string; description: string };
  buyNowSection: {
    price: string;
    unit: string;
    processingParams: string[];
    deliveryPromise: string;
    returnPolicy: string;
  };
}

export const products: Product[] = [
  {
    id: "watermelon",
    name: "Fresh Watermelon",
    subName: "Summer in every sip.",
    price: "₹90",
    description: "100% Fresh – Hydrating – Naturally Sweet",
    folderPath: "/images/watermelon",
    frameCount: 245,

    themeColor: "#FF6B6B",
    gradient: "linear-gradient(135deg,#ff6b6b 0%,#ff2e63 100%)",

    features: [
      "100% Natural Fruit",
      "Ultra Hydrating",
      "No Added Sugar"
    ],

    stats: [
      { label: "Water", val: "92%" },
      { label: "Sugar", val: "Natural" },
      { label: "Additives", val: "0%" }
    ],

    section1: {
      title: "Fresh Watermelon.",
      subtitle: "Summer in every sip."
    },

    section2: {
      title: "Pure hydration.",
      subtitle: "Made from freshly harvested watermelons packed with natural electrolytes."
    },

    section3: {
      title: "Naturally refreshing.",
      subtitle: "A light, sweet taste that cools your body instantly."
    },

    section4: {
      title: "Nothing added. Nothing removed.",
      subtitle: ""
    },

    detailsSection: {
      title: "Nature's Hydration Fruit",
      description: "Our watermelon juice is made using hand-selected farm-fresh watermelons. Cold-pressed immediately after cutting to lock in flavor and nutrients, delivering the crisp sweetness that makes watermelon the ultimate summer fruit.",
      imageAlt: "Watermelon Details"
    },

    freshnessSection: {
      title: "Freshness First",
      description: "From farm to bottle in just hours. Our cold-press process ensures maximum freshness, vibrant color, and natural sweetness without heat or preservatives."
    },

    buyNowSection: {
      price: "₹90",
      unit: "per 300ml bottle",

      processingParams: [
        "Cold Pressed",
        "No Preservatives",
        "Farm Fresh"
      ],

      deliveryPromise: "Delivered chilled within 24 hours to maintain perfect freshness.",

      returnPolicy: "Not satisfied? We replace it instantly."
    }
  },
  {
    id: "chocolate",
    name: "Rich Chocolate",
    subName: "Decadence in a bottle.",
    price: "₹120",
    description: "Premium Cocoa – Creamy – Indulgent",
    folderPath: "/images/chocolate",
    frameCount: 122,

    themeColor: "#8B4513",
    gradient: "linear-gradient(135deg, #8B4513 0%, #3D1E0C 100%)",

    features: [
      "Rich Dark Cocoa",
      "Silky Smooth",
      "No Artificial Flavors"
    ],

    stats: [
      { label: "Cacao", val: "70%" },
      { label: "Dairy", val: "Non-Dairy" },
      { label: "Additives", val: "0%" }
    ],

    section1: {
      title: "Rich Chocolate.",
      subtitle: "Decadence in every sip."
    },

    section2: {
      title: "Pure indulgence.",
      subtitle: "Crafted from premium cacao beans for an unforgettable creamy experience."
    },

    section3: {
      title: "Silky smooth.",
      subtitle: "A velvety texture that comforts your soul instantly."
    },

    section4: {
      title: "Simply irresistible.",
      subtitle: ""
    },

    detailsSection: {
      title: "Nature's Decadent Treat",
      description: "Our chocolate drink is made using hand-selected, ethically sourced cacao beans. Blended to perfection to lock in the rich flavor, delivering the deep cocoa notes that makes it the ultimate indulgent beverage.",
      imageAlt: "Chocolate Details"
    },

    freshnessSection: {
      title: "Quality First",
      description: "From bean to bottle with absolute care. Our unique process ensures maximum richness, deep color, and authentic chocolate flavor without artificial preservatives."
    },

    buyNowSection: {
      price: "₹120",
      unit: "per 300ml bottle",

      processingParams: [
        "Ethically Sourced",
        "No Preservatives",
        "Premium Cocoa"
      ],

      deliveryPromise: "Delivered chilled within 24 hours to maintain perfect taste.",

      returnPolicy: "Not satisfied? We replace it instantly."
    }
  }
];
