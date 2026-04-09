"use client";

import Sidebar from "@/components/store/layout/Sidebar";
import { usePathname } from "next/navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activeTab = pathname.split("/").pop() || "dashboard";

  return (
    <div className="fixed inset-0 z-[9999] flex bg-[#f8fafc] w-full h-screen overflow-hidden">
      {/* 1. Sidebar bên trái sát mép màn hình */}
      <aside className="w-72 h-full flex-shrink-0 bg-[#f0f9f1] border-r border-emerald-50">
        <Sidebar activeTab={activeTab} />
      </aside>

      {/* 2. Nội dung bên phải */}
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
