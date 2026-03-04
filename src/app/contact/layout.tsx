import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pilates Haus - Get in Touch",
  description:
    "Contact Pilates Haus in Pickering, Ontario. Reach out with questions or special requests. Hours: Mon-Fri 7am-8:30pm.",
  keywords: ["contact", "email", "phone", "location", "Pickering"],
  openGraph: {
    title: "Contact | Pilates Haus",
    description:
      "Contact Pilates Haus in Pickering, Ontario. Reach out with any questions.",
    url: "https://pilateshaus.ca/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
