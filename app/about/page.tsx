import type { Metadata } from "next";
import AboutContent from "@/components/site/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rawbitads is built as a self-serve performance platform for advertisers, affiliates, and agencies that need scale, speed, and measurable ROI.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About | Rawbitads",
    description:
      "Rawbitads is built as a self-serve performance platform for advertisers, affiliates, and agencies that need scale, speed, and measurable ROI.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
