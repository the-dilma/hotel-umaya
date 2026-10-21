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
  // TODO: replace with the hotel's name + town as it appears on Google Maps.
  mapQuery: "Colombo, Sri Lanka",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" }, // TODO
    { days: "Saturday – Sunday", time: "9:00 AM – 4:00 PM" }, // TODO
  ],
};

export const whatsappLink = `https://wa.me/${contact.whatsapp}`;
export const phoneLink = `tel:${contact.phones[0].replace(/\s/g, "")}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`;
