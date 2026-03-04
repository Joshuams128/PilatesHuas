import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pilates Haus - Reformer Pilates Studio in Pickering, Ontario",
  description:
    "Elevated Reformer Pilates in Pickering, Ontario. Experience transformative classes with expert instructors. Book your session today.",
  keywords: [
    "pilates",
    "reformer pilates",
    "Pickering",
    "Ontario",
    "fitness",
    "workout",
    "classes",
    "strength training",
  ],
  authors: [
    {
      name: "Pilates Haus",
    },
  ],
  creator: "Pilates Haus",
  publisher: "Pilates Haus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://pilateshaus.ca",
    siteName: "Pilates Haus",
    title: "Pilates Haus - Reformer Pilates Studio in Pickering, Ontario",
    description:
      "Elevated Reformer Pilates in Pickering, Ontario. Experience transformative classes with expert instructors.",
    images: [
      {
        url: "https://pilateshaus.ca/images/marjanphotgraphy1_MAR0020.jpg",
        width: 1200,
        height: 630,
        alt: "Pilates Haus Studio",
        type: "image/jpeg",
      },
    ],
  },
  metadataBase: new URL("https://pilateshaus.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
