import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const caros = localFont({
  src: [
    {
      path: "../public/fonts/Caros-ExtraLight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Caros-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Caros.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Caros-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-caros",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inxtinct One",
  description: "Your Digital Life Secured by One Powerful Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caros.variable} antialiased`}>{children}</body>
    </html>
  );
}
