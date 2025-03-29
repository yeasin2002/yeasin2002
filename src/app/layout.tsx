import { RootMetadata } from "@/config/rootMetaData";

import { Noice } from "$components/Globals/Noice";
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
        <Noice>{children}</Noice>
      </body>
    </html>
  );
}

export { RootMetadata as metadata };
