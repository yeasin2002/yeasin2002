import { RootMetadata } from "@/config/rootMetaData";
import { Toaster } from "react-hot-toast";

import { fontVariables } from "@/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={fontVariables}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export { RootMetadata as metadata };
