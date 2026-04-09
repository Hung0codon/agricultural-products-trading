"use client";

import React from "react";
import {
  Users,
  ShieldCheck,
  Calendar,
  LayoutDashboard,
  ScanFace,
  Settings,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const menuItems = [
    { icon: Users, label: "Nhân viên", active: true },
    { icon: ShieldCheck, label: "Phân quyền" },
    { icon: Calendar, label: "Lịch làm việc" },
    { icon: LayoutDashboard, label: "Công việc" },
    { icon: ScanFace, label: "Điểm danh AI" },
  ];

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-100 flex flex-col py-6 shadow-sm">
      {/* Logo & Title */}
      <div className="px-6 mb-10">
        <h1 className="text-lg font-extrabold text-emerald-600 tracking-tight">
          Quản trị hệ thống
        </h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
          Nông nghiệp xanh
        </p>{" "}
        {/* ĐÃ SỬA: Chỗ này phải là thẻ đóng </p> */}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="/admin/system/permissions"
            className={`flex items-center gap-3 px-6 py-3.5 transition-all duration-200 ${
              item.active
                ? "text-emerald-600 font-bold border-r-4 border-emerald-600 bg-emerald-50/50"
                : "text-gray-500 hover:bg-gray-50 hover:text-emerald-500"
            }`}
          >
            <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="px-4 mt-auto space-y-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs shadow-md shadow-emerald-100 hover:bg-emerald-700 transition-all"
        >
          Báo cáo tổng hợp
        </motion.button>

        <div className="pt-4 border-t border-gray-50">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-emerald-600 transition-colors"
          >
            <Settings size={18} />
            <span className="text-[11px] font-bold uppercase">Cài đặt</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-600 transition-colors"
          >
            <LogOut size={18} />
            <span className="text-[11px] font-bold uppercase">Đăng xuất</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
