import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Mufti Audio Lectures & Wazaif",
    template: "%s | Mufti Audio Lectures",
  },
  description:
    "Listen to daily, weekly, and monthly Wazaif and audio lectures on Islamic teachings, Quranic verses, and spiritual well-being.",
  keywords: [
    "Mufti",
    "Audio Lectures",
    "Islamic Wazaif",
    "Quran",
    "Remembrance of Allah",
    "Hisbulazam",
    "Awail-ul-Khairat",
    "Hisbulbahar",
    "Islamic spirituality",
  ],
  metadataBase: new URL("https://khanqatullah.vercel.app/"), // Replace with your domain
  openGraph: {
    title: "Mufti Audio Lectures & Wazaif",
    description:
      "Explore Islamic audio content including Wazaif, Quranic reflections, and spiritual lectures.",
    url: "https://khanqatullah.vercel.app/",
    siteName: "Mufti Audio Lectures",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Mufti Audio Lectures Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mufti Audio Lectures & Wazaif",
    description:
      "Daily, weekly, and monthly Islamic lectures and Wazaif to bring peace to your heart.",
    images: ["/images/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
