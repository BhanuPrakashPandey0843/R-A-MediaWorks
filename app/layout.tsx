import type { Metadata } from "next";
import { playfair, manrope } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider";
import { Toaster } from "sonner";
import { SITE } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL("https://ramediaworks.com"),
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col bg-ivory text-ink">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#0a1428",
                color: "#faf8f3",
                border: "1px solid rgba(255,255,255,0.1)",
              },
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
