import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo, Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Google Fonts
const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TPI - Think Positive Ideas | Agencia de Marketing Digital",
  description: "Transformamos ideas en experiencias digitales extraordinarias. Somos tu agencia de marketing digital que piensa diferente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${poppins.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
