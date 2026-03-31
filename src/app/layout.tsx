import type { Metadata } from "next";
import "./globals.css"; // DÒNG NÀY LÀ MẠNG SỐNG CỦA TAILWIND

export const metadata: Metadata = {
  title: "NôngSản Dashboard",
  description: "Hệ thống quản lý nông sản",
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
