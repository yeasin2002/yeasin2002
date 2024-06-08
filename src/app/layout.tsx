import type { Metadata } from "next";
import "../styles/keyframe.css";
import "./globals.css";

import ogImg from "@/assets/others/OG.png";

export const metadata: Metadata = {
  title: "Md Kawsar Islam Yeasin",
  description:
    "Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer  from Bangladesh.",
  authors: [{ name: "Md Kawsar Islam Yeasin" }],
  category: "Software Development",
  keywords: [
    "Md Kawsar Islam Yeasin",
    "Software Developer",
    "Web Developer",
    "yeasin",
    "yeasin2002",
    "Md Kawsar Islam Yeasin",
    "kawsar",
    "Md kawsar",
    "dev yeasin",
  ],

  openGraph: {
    title: "Md Kawsar Islam Yeasin",
    description:
      "Portfolio of  Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer,  from Bangladesh.",
    type: "website",
    locale: "en_IE",
    url: "https://yeasin2002.vercel.app/",
    siteName: "Md Kawsar Islam Yeasin",
    emails: "mdkawsarislam2002@gmail.com",
    countryName: "Bangladesh",
    images: [
      {
        url: ogImg.src,
        width: 1200,
        height: 630,
        alt: "Md Kawsar Islam Yeasin",
      },
    ],
  },
  metadataBase: new URL("https://yeasin2002.netlify.app"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="overflow-x-hidden"
        style={{
          background: "#000000",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
