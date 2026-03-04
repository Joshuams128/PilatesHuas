import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Pilates Haus - Class Packages & Rates",
  description:
    "View our flexible pilates class packages and pricing. Drop-in rates, monthly memberships, and special intro offers available.",
  keywords: ["pricing", "packages", "rates", "membership", "class packs"],
  openGraph: {
    title: "Pricing | Pilates Haus",
    description: "View our flexible pilates class packages and pricing.",
    url: "https://pilateshaus.ca/pricing",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
