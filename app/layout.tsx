import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/components/providers";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Portfolio - Desenvolvedor Front-End",
  description: "Professional Front-End Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
