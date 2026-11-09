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
    { id: "oneplus-nord-buds-3r", name: "OnePlus Nord Buds 3r TWS Earbuds", image: "https://m.media-amazon.com/images/I/51nBTTG3hNL._SL1500_.jpg", price: "",
    desc: "Wireless earbuds with long battery life, clear calling and low delay for gaming.",
    features: ["Up to 54 hours total playback", "Clear calls with noise cancellation", "47ms low latency for gaming"],
    category: "Electronics", url: "https://www.amazon.in/OnePlus-Playback-Translation-Dual-Device-Connectivity/dp/B0FMDL81GS?crid=5I7AOVRCQHHO&dib=eyJ2IjoiMSJ9.LLoH3WbgkQfyR9lvib6X_LNjQSgOVUuNgcFKM_NW21jllD7psAfHzt6texL8EAsqK9m0DD9ONay_f-Dc4tmV9m5NxX5tR9fVMYLyG6e-jX8AKrSD1l8tc2qLkJBgzM9ftB802_brcDwKW8mC2kC0bWH25yapgyFaehQ5V9J-1ePjTdtqHcD8f-6V8LU9NnWiqIJ5w3U7Dc_SJjNFB2ux2ANvsB3qrazzie2rbHMVbNU.Gs-el2iR5Js1VuRoo-KmrKJI1z5LF4FS_cDdWHWNOr0&dib_tag=se&keywords=wireless%2Bear%2Bbuds&qid=1794220595&sprefix=Wireless%2Bear%2Caps%2C1009&sr=8-4&th=1&linkCode=ll2&tag=gauravchauh0f-21&linkId=6f152834bcd0a6abb79918883188a8a1&ref_=as_li_ss_tl", featured: true, label: "", demo: false },

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
