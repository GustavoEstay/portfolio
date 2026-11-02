import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Estay · Software Engineer, AI-native",
  description:
    "Software engineer who builds with AI. 5 years of React and TypeScript at Mercado Libre, 2 years of AI-driven engineering.",
  openGraph: {
    title: "Gustavo Estay · Software Engineer, AI-native",
    description: "Software engineer who builds with AI, from the interface to the API.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#14161c" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
