import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Class | Pilates Haus - Reserve Your Spot",
  description:
    "Book your reformer pilates class at Pilates Haus in Pickering, Ontario. View class schedule and reserve your spot easily.",
  keywords: ["book class", "reserve class", "pilates booking", "schedule"],
  openGraph: {
    title: "Book a Class | Pilates Haus",
    description: "Reserve your reformer pilates class at Pilates Haus.",
    url: "https://pilateshaus.ca/book-now",
    type: "website",
  },
};

export default function BookNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
