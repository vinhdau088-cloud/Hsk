import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanzi Master",
  description: "Website học tiếng Trung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
