import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { developerMeta } from "@/lib/constants";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: `${developerMeta.name} | Portfolio`,
  description: `Portfolio website of ${developerMeta.name} | ${developerMeta.designation}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </head>
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
