// Home page content. Everything here is PLACEHOLDER text and photos —
// replace with the real Hotel Umaya details once they are confirmed.

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=80`;

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
  },
  {
    name: "The Garden Room",
    capacity: "Up to 120 guests",
    description: "An intimate space for engagements, homecomings and family celebrations.",
    image: unsplash("photo-1469371670807-013ccf25f16a"),
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
