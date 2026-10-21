// Site content. Everything here is PLACEHOLDER text and photos —
// replace with the real Hotel Umaya details once they are confirmed.

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=80`;

export const pageBanners = {
  gallery: unsplash("photo-1464366400600-7168b8af9bc3"),
  contact: unsplash("photo-1519225421980-715cb0215aed"),
  halls: unsplash("photo-1519167758481-83f550bb49b3"),
  events: unsplash("photo-1546032996-6dfacbacbf3f"),
  menus: unsplash("photo-1414235077428-338989a2e8c0"),
};

export const galleryCategories = ["Weddings", "Décor", "Venue", "Food"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

type GalleryPhoto = { src: string; alt: string; category: GalleryCategory };

export const gallery: GalleryPhoto[] = (
  [
    { id: "photo-1519167758481-83f550bb49b3", alt: "Ballroom set for a reception", category: "Venue" },
    { id: "photo-1583939003579-730e3918a45a", alt: "Couple celebrating with guests", category: "Weddings" },
    { id: "photo-1519225421980-715cb0215aed", alt: "Table centrepiece with fresh flowers", category: "Décor" },
    { id: "photo-1414235077428-338989a2e8c0", alt: "Plated main course", category: "Food" },
    { id: "photo-1465495976277-4387d4b0b4c6", alt: "Wedding rings", category: "Weddings" },
    { id: "photo-1469371670807-013ccf25f16a", alt: "Flower-lined aisle in the garden", category: "Venue" },
    { id: "photo-1525258946800-98cfd641d0de", alt: "Bridal bouquet of roses", category: "Décor" },
    { id: "photo-1546032996-6dfacbacbf3f", alt: "Bride and groom in a field", category: "Weddings" },
    { id: "photo-1555244162-803834f70033", alt: "Buffet spread", category: "Food" },
    { id: "photo-1507504031003-b417219a0fde", alt: "Mr & Mrs sign", category: "Décor" },
    { id: "photo-1606216794074-735e91aa2c92", alt: "Newlyweds smiling", category: "Weddings" },
    { id: "photo-1530023367847-a683933f4172", alt: "Long dinner table with red napkins", category: "Décor" },
    { id: "photo-1532712938310-34cb3982ef74", alt: "Couple walking at sunset", category: "Weddings" },
    { id: "photo-1522673607200-164d1b6ce486", alt: "Decorated chairs for the couple", category: "Décor" },
    { id: "photo-1520854221256-17451cc331bf", alt: "Couple holding hands", category: "Weddings" },
  ] satisfies (Omit<GalleryPhoto, "src"> & { id: string })[]
).map(({ id, ...photo }) => ({ ...photo, src: unsplash(id) }));

export const heroSlides = [
  { src: unsplash("photo-1519167758481-83f550bb49b3"), alt: "Elegant reception hall set for a wedding" },
  { src: unsplash("photo-1464366400600-7168b8af9bc3"), alt: "Decorated wedding tables" },
  { src: unsplash("photo-1511795409834-ef04bbd61622"), alt: "Celebration under warm lights" },
];

export const about = {
  image: unsplash("photo-1519225421980-715cb0215aed"),
  paragraphs: [
    "Hotel Umaya is an elegant wedding and reception venue, created for couples who want their special day to feel effortless and unforgettable.",
    "From grand receptions to intimate homecomings, our dedicated team takes care of every detail — the décor, the cuisine and the warm hospitality your guests will remember.",
  ],
};

export const halls = [
  {
    name: "The Grand Hall",
    capacity: "Up to 400 guests",
    description: "A spacious, fully air-conditioned ballroom with a stage, dance floor and elegant chandeliers.",
    image: unsplash("photo-1519167758481-83f550bb49b3"),
    highlights: [
      "Fully air-conditioned",
      "Raised stage for the couple",
      "Dance floor and DJ setup",
      "Crystal chandeliers and ambient lighting",
      "Ideal for weddings and large receptions",
    ],
  },
  {
    name: "The Garden Room",
    capacity: "Up to 120 guests",
    description: "An intimate space for engagements, homecomings and family celebrations.",
    image: unsplash("photo-1469371670807-013ccf25f16a"),
    highlights: [
      "Garden views and natural light",
      "Flexible seating layouts",
      "Perfect for smaller, personal gatherings",
      "Outdoor area for photographs",
    ],
  },
];

export const features = [
  { icon: "utensils", title: "In-house Catering", text: "Sri Lankan and international buffet menus prepared by our chefs." },
  { icon: "sparkles", title: "Elegant Décor", text: "Floral and lighting themes tailored to your celebration." },
  { icon: "car", title: "Ample Parking", text: "Secure parking for all your guests." },
  { icon: "heart", title: "Bridal Suite", text: "A private, comfortable suite for the couple to prepare." },
] as const;

export const galleryPreview = [
  "photo-1465495976277-4387d4b0b4c6",
  "photo-1507504031003-b417219a0fde",
  "photo-1522673607200-164d1b6ce486",
  "photo-1583939003579-730e3918a45a",
  "photo-1530023367847-a683933f4172",
  "photo-1520854221256-17451cc331bf",
].map((id, i) => ({ src: unsplash(id), alt: `Hotel Umaya celebration ${i + 1}` }));

export const reviews = [
  {
    name: "Nadeesha & Kasun",
    text: "Our wedding at Hotel Umaya was a dream come true. The hall looked stunning and the food was loved by every guest.",
  },
  {
    name: "Ruwani Perera",
    text: "The staff handled every little detail of our homecoming. Truly elegant service from start to finish.",
  },
  {
    name: "Tharindu Silva",
    text: "Beautiful venue, excellent coordination and delicious food. Highly recommended for any celebration.",
  },
];

export const hallAmenities = [
  "Sound system & microphones",
  "Standby generator",
  "Bridal dressing room",
  "Banquet chairs & table linen",
  "Dedicated event coordinator",
  "Secure parking",
];

export const eventTypes = [
  {
    title: "Weddings",
    text: "Poruwa ceremonies and grand receptions, styled to your theme from entrance to head table.",
    image: unsplash("photo-1583939003579-730e3918a45a"),
  },
  {
    title: "Homecomings",
    text: "Welcome the newlyweds home with an elegant celebration for family and friends.",
    image: unsplash("photo-1606216794074-735e91aa2c92"),
  },
  {
    title: "Engagements",
    text: "Intimate ring ceremonies with beautiful décor and a menu to match.",
    image: unsplash("photo-1465495976277-4387d4b0b4c6"),
  },
  {
    title: "Birthdays & Anniversaries",
    text: "Milestone celebrations with custom décor, cake tables and entertainment.",
    image: unsplash("photo-1464366400600-7168b8af9bc3"),
  },
  {
    title: "Corporate Events",
    text: "Award nights, annual dinners and staff get-togethers with full catering.",
    image: unsplash("photo-1530023367847-a683933f4172"),
  },
  {
    title: "Family Gatherings",
    text: "Alms-givings, reunions and get-togethers in a warm, comfortable setting.",
    image: unsplash("photo-1555244162-803834f70033"),
  },
];

export const planningSteps = [
  { title: "Get in touch", text: "Call or WhatsApp us to check your preferred date." },
  { title: "Visit the hotel", text: "Tour the halls and meet our event coordinator in person." },
  { title: "Plan the details", text: "Choose your hall, menu, décor and timings together." },
  { title: "Celebrate", text: "Relax and enjoy your day — our team takes care of the rest." },
];

export const packages = [
  {
    name: "Silver",
    price: "LKR 0,000", // TODO
    features: ["Choice of hall", "Standard buffet menu", "Basic floral décor", "Welcome drink", "Sound system"],
  },
  {
    name: "Gold",
    price: "LKR 0,000", // TODO
    featured: true,
    features: [
      "Choice of hall",
      "Premium buffet menu",
      "Themed floral décor",
      "Welcome drink & mocktails",
      "Sound system & DJ",
      "Wedding cake structure",
    ],
  },
  {
    name: "Platinum",
    price: "LKR 0,000", // TODO
    features: [
      "Grand Hall",
      "Luxury buffet with live stations",
      "Full custom décor & lighting",
      "Welcome drinks & dessert table",
      "Sound system, DJ & lighting",
      "Bridal suite for the day",
    ],
  },
];

export const sampleMenus = {
  "Sri Lankan": [
    { course: "Rice", items: ["Yellow rice", "Fried rice", "Steamed basmati rice"] },
    { course: "Mains", items: ["Chicken black curry", "Fish ambul thiyal", "Devilled prawns"] },
    { course: "Vegetables", items: ["Cashew & green pea curry", "Brinjal moju", "Potato tempered"] },
    { course: "Accompaniments", items: ["Pol sambol", "Papadam", "Seeni sambol"] },
  ],
  International: [
    { course: "Starters", items: ["Cream of mushroom soup", "Garden salad bar", "Chicken spring rolls"] },
    { course: "Mains", items: ["Roast chicken with herb gravy", "Grilled fish in lemon butter", "Beef stroganoff"] },
    { course: "Sides", items: ["Garlic butter potatoes", "Sautéed vegetables", "Penne arrabbiata"] },
  ],
  Desserts: [
    { course: "Traditional", items: ["Watalappan", "Curd & treacle", "Kavum & kokis"] },
    { course: "Western", items: ["Chocolate mousse", "Fresh fruit platter", "Ice cream station"] },
  ],
};
