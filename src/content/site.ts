// Verified business details. Only facts from the business card belong here.
export const business = {
  name: "ANGIE Kitchen & Catering",
  shortName: "ANGIE",
  phoneDisplay: "561.305.3809",
  phoneHref: "tel:+15613053809",
  smsHref: "sms:+15613053809",
  email: "valsaina26@gmail.com",
  emailHref: "mailto:valsaina26@gmail.com",
  mainMessage: "You can call me for all the cooking you need & want.",
  offer: "From 1 person to 1000 people feel free to text or call.",
  leadTime: "Please place orders 2 weeks in advance.",
};

// Prefix for public files when the site is served from a sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Replaceable images. To swap one, drop a file into public/images/
// (JPG, PNG, or WebP) and update its `src`, `alt`, `width`, and `height` here.
// Photos below were generated with Higgsfield as stand-ins for real food photos.
export const heroImage = {
  src: `${basePath}/images/hero.jpg`,
  alt: "Overhead view of a catering spread: rice and peas with grilled jerk-style chicken and fried plantains, a bowl of stew, grilled shrimp, tomatoes, and scotch bonnet peppers.",
  width: 1800,
  height: 1600,
};

export const aboutImage = {
  src: `${basePath}/images/ingredients.jpg`,
  alt: "Fresh tomatoes, green bell pepper, scotch bonnet peppers, onion, garlic, thyme, scallions, and bowls of spices on a wooden board.",
  width: 1600,
  height: 1194,
};

// The gallery shows 3 columns on large screens when the count is a multiple
// of 3, otherwise 2 columns.
export const galleryImages = [
  {
    src: `${basePath}/images/buffet.jpg`,
    alt: "Buffet line of chafing trays filled with grilled chicken, rice and peas, fried plantains, and stewed meat, lit by candles.",
    caption: "Buffet trays for a crowd",
    width: 1600,
    height: 1194,
  },
  {
    src: `${basePath}/images/plated-meal.jpg`,
    alt: "Plate of rice and peas with grilled jerk-style chicken, fried plantains, thyme, and a lime wedge.",
    caption: "Plated meals",
    width: 1540,
    height: 1155,
  },
  {
    src: `${basePath}/images/stew.jpg`,
    alt: "Dark bowls of brown stew chicken with carrots and thyme beside a bowl of white rice.",
    caption: "Family-style bowls",
    width: 1600,
    height: 1194,
  },
  {
    src: `${basePath}/images/plantains.jpg`,
    alt: "Cream bowl piled with caramelized fried sweet plantains sprinkled with flaky salt.",
    caption: "Sides and extras",
    width: 1600,
    height: 1194,
  },
];
