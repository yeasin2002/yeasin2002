import { RootMetadata } from "@/config/rootMetaData";
import "../styles/keyframe.css";
import "./globals.css";
import { Noice } from "$components/Globals/Noice";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="overflow-x-hidden"
        style={{ background: "#000000", color: "white" }}
      >
        <Noice>{children}</Noice>
      </body>
    </html>
  );
}

export { RootMetadata as metadata };
