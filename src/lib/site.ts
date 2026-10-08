// Shared site details, used by the navbar, footer and contact page.
// Placeholder values are marked TODO until the real details arrive.

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/halls", label: "Our Halls" },
  { href: "/weddings-events", label: "Weddings & Events" },
  { href: "/menus", label: "Menus & Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const contact = {
  address: "TODO: Hotel Umaya address", // TODO
  phones: ["+94 00 000 0000"], // TODO
  email: "info@hotelumaya.lk", // TODO
  whatsapp: "94000000000", // TODO: number without "+" or spaces
};
