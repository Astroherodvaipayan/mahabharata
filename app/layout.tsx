import "../global.css";
import { Inter } from "@next/font/google";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Mahabharata",
    template: "%s | Mahabharata",
  },
  description: "redisovering the power of bharat",
  openGraph: {
    title: "Mahabharata",
    description: "Mahabharata - redisovering the power of bharat",
    url: "https://mahabharata.org",
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "#",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Analytics />
      </head>
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
