import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitStrong",
  description: "Fitstrong - Acadêmia e Treinamento Personalizado",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "fitness",
    "musculação",
    "crossfit",
    "treino",
    "bodybuilding",
    "academia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
