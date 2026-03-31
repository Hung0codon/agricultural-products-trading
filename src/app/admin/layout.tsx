import React from "react";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminTopbar from "@/components/admin/layout/AdminTopbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar cố định bên trái */}
      <AdminSidebar />

      {/* Cột phải chứa Topbar và Nội dung */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar />

        {/* Main content có thể cuộn */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50/50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
