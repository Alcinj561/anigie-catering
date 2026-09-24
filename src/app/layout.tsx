import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "ANIGIE Kitchen & Catering | Made-to-order catering for 1 to 1,000 guests",
  description:
    "Made-to-order cooking and catering from ANIGIE Kitchen & Catering. From 1 person to 1000 people, call or text 561.305.3809.",
};

export const viewport: Viewport = {
  themeColor: "#1b1714",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
