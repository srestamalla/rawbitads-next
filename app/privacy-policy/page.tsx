import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Rawbitads collects, uses, and protects your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly, such as when you create an account, launch a campaign, or contact our support team. This includes your name, email address, company name, billing details, and campaign data. We also collect usage data automatically, including IP addresses, browser type, device information, and pages visited.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to provide and improve our advertising platform, process payments, send transactional and promotional communications, prevent fraud, comply with legal obligations, and deliver campaign performance analytics. We do not sell your personal data to third parties.",
  },
  {
    title: "Cookies and Tracking",
    body: "Rawbitads uses cookies and similar tracking technologies to operate the platform, measure campaign performance, and improve user experience. You can control cookie preferences through your browser settings. Disabling certain cookies may affect platform functionality.",
  },
  {
    title: "Data Sharing",
    body: "We may share your data with trusted third-party service providers who assist in operating our platform (e.g., payment processors, cloud infrastructure). These providers are contractually required to protect your data. We may also disclose data when required by law or to protect our rights.",
  },
  {
    title: "Data Retention",
    body: "We retain your personal data for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your data by contacting us.",
  },
  {
    title: "Your Rights",
    body: "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at admin@rawbitads.com. We will respond to your request within the timeframe required by applicable law.",
  },
  {
    title: "Security",
    body: "We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a notice on our platform. Continued use of Rawbitads after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact",
    body: "For any privacy-related questions or requests, please contact us at admin@rawbitads.com or write to us at Rawbit Ads, Kathmandu, Nepal.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container pt-16 pb-12 lg:pt-24 lg:pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.04] max-w-4xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-6 text-muted-foreground">Last updated: May 2026</p>
        </section>

        <section className="container pb-24 lg:pb-32">
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-2xl mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
