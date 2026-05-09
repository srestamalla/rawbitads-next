import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions governing your use of the Rawbitads advertising platform.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the Rawbitads platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use the platform. These terms apply to all users, including advertisers, publishers, agencies, and visitors.",
  },
  {
    title: "Platform Use",
    body: "Rawbitads grants you a limited, non-exclusive, non-transferable license to use the platform for your advertising and monetization activities. You agree not to misuse the platform, attempt to gain unauthorized access, reverse engineer any part of the service, or use it in any way that violates applicable laws.",
  },
  {
    title: "Account Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use. Rawbitads is not liable for any losses arising from unauthorized access to your account.",
  },
  {
    title: "Advertising Content",
    body: "You are solely responsible for the content of your advertisements. All creatives must comply with our advertising policies, applicable laws, and industry standards. Rawbitads reserves the right to reject, suspend, or remove any advertisement that violates our policies or that we deem inappropriate.",
  },
  {
    title: "Payments and Billing",
    body: "Advertisers agree to pay for all campaigns run on the platform based on the agreed pricing model (CPC, CPM, CPA, etc.). Payments are due in advance unless otherwise agreed. Rawbitads reserves the right to suspend campaigns if payment obligations are not met. All fees are non-refundable unless stated otherwise.",
  },
  {
    title: "Publisher Payouts",
    body: "Publishers will receive payouts based on verified traffic and performance metrics tracked by our platform. Rawbitads reserves the right to withhold or adjust payouts in cases of suspected fraud, invalid traffic, or policy violations. Minimum payout thresholds and payment schedules are set out in your account dashboard.",
  },
  {
    title: "Intellectual Property",
    body: "All content, trademarks, software, and materials on the Rawbitads platform are owned by or licensed to Rawbit Ads. You may not reproduce, distribute, or create derivative works without prior written permission. You retain ownership of your own ad creatives and campaign data.",
  },
  {
    title: "Prohibited Activities",
    body: "You may not use the platform to run ads for illegal products or services, engage in click fraud or traffic manipulation, distribute malware or deceptive content, violate third-party intellectual property rights, or engage in any activity that harms the platform or its users.",
  },
  {
    title: "Limitation of Liability",
    body: "Rawbitads is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including loss of revenue, loss of data, or business interruption. Our total liability in any matter is limited to the amounts paid by you in the three months preceding the claim.",
  },
  {
    title: "Termination",
    body: "Rawbitads may suspend or terminate your account at any time for breach of these terms, suspected fraud, or for any other reason at our discretion. You may terminate your account by contacting support. Upon termination, all outstanding balances become immediately due.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these Terms and Conditions at any time. We will notify you of material changes via email or platform notice. Continued use of the platform after changes are posted constitutes your acceptance of the updated terms.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of Nepal. Any disputes arising under these terms shall be resolved through good-faith negotiation or, if necessary, through the competent courts of Kathmandu, Nepal.",
  },
  {
    title: "Contact",
    body: "For questions about these Terms and Conditions, contact us at admin@rawbitads.com or write to Rawbit Ads, Kathmandu, Nepal.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container pt-16 pb-12 lg:pt-24 lg:pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">// Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.04] max-w-4xl text-balance">
            Terms and Conditions
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
