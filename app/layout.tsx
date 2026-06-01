import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keystone AI — AI into Coaching",
  description:
    "We assess your readiness, build the AI systems that transform your coaching enterprise, and operate them at scale. From coaching enterprise to managed service provider.",
  metadataBase: new URL("https://keystone-ai.example"),
  openGraph: {
    title: "Keystone AI — AI into Coaching",
    description:
      "Assess. Build. Operate. The coaching operating system company.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-navy-900 font-sans text-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
