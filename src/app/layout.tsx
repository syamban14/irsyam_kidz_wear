import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const beVietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irsyam Kidz Wear | Pakaian Anak Modern & Katun Organik",
  description: "Toko pakaian anak modern berbahan katun organik pilihan, lembut di kulit, dan dirancang untuk kenyamanan bermain si kecil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
