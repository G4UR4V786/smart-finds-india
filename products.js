// ============================================================
// PRODUCTS.JS  -  yahi ek file edit karni hai products ke liye
// ============================================================
// Naya product add karne ke liye: ek { ... }, block copy karke paste karo.
// Delete karne ke liye: poora block hata do.
// Har line ke end mein comma (,) zaroori hai. Quotes " " mat hatana.
//
// id        : har product ka alag naam (small letters, no space) e.g. "boat-earbuds"
// name      : product ka naam
// image     : image ka link (Amazon SiteStripe se image link). Khali chhodo to colour tile dikhega
// desc      : 1-2 line ka short description (apne words mein likho)
// features  : 2-4 key points
// category  : neeche CATEGORIES wali list ka exact naam
// price     : sirf agar tumne Amazon par khud check kiya ho, e.g. "₹1,299". Nahi pata to "" chhodo
// url       : tumhara Amazon affiliate link (SiteStripe se copy)
// featured  : true ya false (Home page ke Featured mein dikhega)
// label     : "New" ya "Trending" ya "" (khali)
// demo      : true = DEMO badge dikhega. Real product add karte waqt false karo ya line hata do.

const SITE = {
  name: "Smart Finds India",
  tagline: "Discover Smart Products. Shop Smarter.",
  email: "your-email@example.com",          // <-- apna email yahan daalo
  instagram: "https://instagram.com/yourhandle", // <-- apna link ya "" khali
  youtube: "",
  // Jab tak sab products real na ho jayein, demo banner dikhta rahega:
  showDemoBanner: true
};

const CATEGORIES = [
  "Electronics",
  "Home & Kitchen",
  "Fashion & Accessories",
  "Beauty & Personal Care",
  "Fitness & Lifestyle",
  "Gadgets & Accessories",
  "Everyday Essentials"
];

const PRODUCTS = [
  { id: "demo-earbuds", name: "Demo Wireless Earbuds", image: "", price: "",
    desc: "Demo listing. Replace with a real product you have personally checked.",
    features: ["Sample feature one", "Sample feature two", "Sample feature three"],
    category: "Electronics", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: true, label: "Trending", demo: true },

  { id: "demo-powerbank", name: "Demo Power Bank", image: "", price: "",
    desc: "Demo listing. Add the real product name and your own short description.",
    features: ["Sample feature one", "Sample feature two"],
    category: "Gadgets & Accessories", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: true, label: "New", demo: true },

  { id: "demo-mixer", name: "Demo Mixer Grinder", image: "", price: "",
    desc: "Demo listing for the Home & Kitchen category.",
    features: ["Sample feature one", "Sample feature two", "Sample feature three"],
    category: "Home & Kitchen", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: true, label: "", demo: true },

  { id: "demo-backpack", name: "Demo Laptop Backpack", image: "", price: "",
    desc: "Demo listing for the Fashion & Accessories category.",
    features: ["Sample feature one", "Sample feature two"],
    category: "Fashion & Accessories", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: false, label: "Trending", demo: true },

  { id: "demo-facewash", name: "Demo Face Wash", image: "", price: "",
    desc: "Demo listing for the Beauty & Personal Care category.",
    features: ["Sample feature one", "Sample feature two"],
    category: "Beauty & Personal Care", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: false, label: "New", demo: true },

  { id: "demo-yogamat", name: "Demo Yoga Mat", image: "", price: "",
    desc: "Demo listing for the Fitness & Lifestyle category.",
    features: ["Sample feature one", "Sample feature two", "Sample feature three"],
    category: "Fitness & Lifestyle", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: true, label: "", demo: true },

  { id: "demo-bottle", name: "Demo Steel Water Bottle", image: "", price: "",
    desc: "Demo listing for the Everyday Essentials category.",
    features: ["Sample feature one", "Sample feature two"],
    category: "Everyday Essentials", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: false, label: "", demo: true },

  { id: "demo-phonestand", name: "Demo Phone Stand", image: "", price: "",
    desc: "Demo listing for the Gadgets & Accessories category.",
    features: ["Sample feature one", "Sample feature two"],
    category: "Gadgets & Accessories", url: "https://www.amazon.in/?tag=YOURTAG-21", featured: false, label: "New", demo: true }
];
