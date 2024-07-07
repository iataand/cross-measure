import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/Header";
import { ConfigureAmplifyClientSide } from "@/data-access/index-client";

export const metadata: Metadata = {
  title: "Cross Measure",
  description: "Find your match in music",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ConfigureAmplifyClientSide />
        <Header />
        {children}
      </body>
    </html>
  );
}
