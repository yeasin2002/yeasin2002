import { RootMetadata } from "@/config/rootMetaData";
import "../styles/keyframe.css";
import "./globals.css";

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

export { RootMetadata as metadata };
