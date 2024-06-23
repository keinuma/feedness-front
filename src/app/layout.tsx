import "./globals.css";

export const metadata = {
  title: "RSS Feed Generator",
  description: "Create and view RSS feeds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
