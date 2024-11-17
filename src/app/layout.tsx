import "./globals.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "thedlcrimson.io",
    template: "%s | thedlcrimson.io",
  },
  description: "I just do what I want",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const ethno = LocalFont({
  src: "./fonts/ethnocentric-rg.otf",
  variable: "--font-ethno",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ethno.variable} ${calSans.variable} ${inter.className} antialiased dark`}
    >
      <head></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
