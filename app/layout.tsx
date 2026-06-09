import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const SITE_URL = "https://www.kcesar.org";
const SITE_NAME = "King County Explorer Search & Rescue";
const SITE_DESCRIPTION =
  "King County Explorer Search & Rescue (ESAR) is an all-volunteer unit that trains youth and adults in wilderness search and rescue and responds to missions across King County, Washington, in support of the King County Sheriff's Office.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | King County ESAR",
  },
  description: SITE_DESCRIPTION,
  applicationName: "King County ESAR",
  alternates: { canonical: "/" },
  icons: { icon: "/kcesar/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: "King County ESAR",
  url: SITE_URL,
  logo: `${SITE_URL}/kcesar/logos/logo_kcesar_1280x1280.png`,
  description: SITE_DESCRIPTION,
  areaServed: "King County, Washington, United States",
  sameAs: [
    "https://www.facebook.com/kingcountyesar",
    "https://www.instagram.com/kingcounty_esar",
  ],
};

const mulish = Mulish({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClass = `flex flex-col min-h-screen ${mulish.className}`;
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xyo6wwn.css"
        ></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={bodyClass}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-esar-green focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-H8XEQFXYFQ" />
    </html>
  );
}
