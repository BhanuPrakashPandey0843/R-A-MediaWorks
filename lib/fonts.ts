import { Manrope, Playfair_Display } from "next/font/google";

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
 * Clean geometric sans for body copy, navigation, and UI chrome.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
