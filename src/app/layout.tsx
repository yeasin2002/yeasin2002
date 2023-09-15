import { Metadata } from "next";
import ThemeProvider from "@/context/ThemeProvider";
import Wrapper from "@/components/Globals/Wrapper";

// styles
import "./globals.css";
import "../styles/keyframe.css";

export const metadata: Metadata = {
  title: "Md Kawsar Islam Yeasin",
  description:
    "Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer, and freelancer from Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 
  <title>Md Kawsar Islam Yeasin</title>
  <meta name="description" content="Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer, and freelancer from Bangladesh.">

 
  <meta property="og:url" content="https://yeasin2002.netlify.app/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Md Kawsar Islam Yeasin">
  <meta property="og:description" content="Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer, and freelancer from Bangladesh.">
  <meta property="og:image" content="">


  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="yeasin2002.netlify.app">
  <meta property="twitter:url" content="https://yeasin2002.netlify.app/">
  <meta name="twitter:title" content="Md Kawsar Islam Yeasin">
  <meta name="twitter:description" content="Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer, and freelancer from Bangladesh.">
  <meta name="twitter:image" content=""> */}
      </head>
      <body id={"my-scrollbar"}>
        <ThemeProvider>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
