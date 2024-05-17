import type { Metadata } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const comfortaaFont = Comfortaa({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Piramid",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaaFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
