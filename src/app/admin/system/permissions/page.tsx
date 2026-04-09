"use client";

import React from "react";
import Sidebar from "@/components/admin/layout/Layout_SystemAdmin/Sidebar";
import Topbar from "@/components/admin/layout/Layout_SystemAdmin/Topbar";
import PermissionMatrix from "@/components/admin/settings/PermissionsTable";

export default function PermissionPage() {
  return (
    <div className="fixed inset-0 z-[9999] flex bg-[#f8fafc] w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-[1400px] mx-auto">
            <PermissionMatrix />
          </div>
        </main>
      </div>
    </div>
  );
}
