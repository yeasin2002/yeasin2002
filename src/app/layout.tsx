import "./globals.css";

export const metadata = {
  title: "Md Kawsar Islam Yeasin",
  description:
    "Portfolio of Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer,web designer,programmer, and freelancer from  in Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
