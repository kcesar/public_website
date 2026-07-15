import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "King County Explorer Search & Rescue",
  description:
    "King County Explorer Search & Rescue — volunteer ground search and rescue serving King County, Washington since 1954.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClass = "flex flex-col h-screen font-trade-gothic-next";
  return (
    <html lang="en" data-theme="esar" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xyo6wwn.css"
        ></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/kcesar/favicon.ico" />
      </head>
      <body className={bodyClass}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-H8XEQFXYFQ" />
    </html>
  );
}
