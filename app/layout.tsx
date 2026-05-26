import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "HIRAD GROUP | گروه هیراد — Luxury Persian Confectionery",
  description:
    "HIRAD GROUP is Iran's premier luxury confectionery brand. Exquisite cakes, pastries, and confections crafted with artistry. Shop HIRAD luxury and HIRANGY modern lines. | گروه هیراد، پیشرو در شیرینی‌پزی لوکس ایران",
  keywords: [
    "HIRAD GROUP",
    "luxury bakery",
    "Persian confectionery",
    "گروه هیراد",
    "شیرینی‌پزی لوکس",
    "HIRANGY",
    "luxury cakes Tehran",
  ],
  openGraph: {
    title: "HIRAD GROUP | Luxury Persian Confectionery",
    description: "Iran's premier luxury confectionery brand",
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
  },
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&family=Noto+Serif+Display:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
