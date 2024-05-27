import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { comfortaaFont } from "./components/ui/fonts";

export const metadata: Metadata = {
  title: "Piramid",
  description: "Piramid",
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
