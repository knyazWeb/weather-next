import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Exo } from "next/font/google";
import { Suspense } from "react";
const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather next",
  description: "Weather app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
