"use client";

import React from "react";
import Sidebar from "@/components/admin/layout/Layout_SystemAdmin/Sidebar";
import Topbar from "@/components/admin/layout/Layout_SystemAdmin/Topbar";
import EmployeeDashboard from "@/components/admin/settings/EmployeeDashboard";

export default function IndependentEmployeePage() {
  return (
    <div className="fixed inset-0 z-[9999] flex bg-[#f8fafc] w-full h-screen overflow-hidden">
      {/* Sidebar của Phú chiếm 1 phần bên trái */}
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Header của Phú chiếm 1 phần bên trên */}
        <Topbar />

        {/* PHẦN RUỘT: Cuộn độc lập bên trong */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-[#f8fafc]">
          <div className="max-w-[1400px] mx-auto">
            <EmployeeDashboard />
          </div>
        </main>
      </div>
    </div>
  );
}
