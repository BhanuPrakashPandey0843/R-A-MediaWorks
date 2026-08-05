import { Inter, Playfair_Display } from "next/font/google";

/**
 * Editorial serif for headings — elegant, high-contrast, luxury feel.
 * Variable font, so no explicit weight list is required.
 */
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

/**
 * Clean, modern sans for body copy, navigation, and UI chrome — pairs with
 * Playfair Display for a premium editorial feel, per brand guidelines.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
