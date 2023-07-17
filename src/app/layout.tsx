import ThemeProvider from "@/context/ThemeProvider";
import "./globals.css";

export const metadata = {
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
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
