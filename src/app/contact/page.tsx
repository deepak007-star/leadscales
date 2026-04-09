import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Get Started — Free Strategy Session",
  description:
    "Book a free marketing strategy session for your home service business. No contracts, no obligations — just a clear plan to grow.",
};

export default function Page() {
  return <ContactPage />;
}
