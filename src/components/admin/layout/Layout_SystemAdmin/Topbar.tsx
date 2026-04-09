"use client";

import React from "react";
import { Search, Bell, HelpCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shadow-sm">
      {/* 1. Thanh tìm kiếm bên trái */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Tìm kiếm nhân viên, mã số..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-emerald-100 focus:border-emerald-200 transition-all outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 2. Cụm thông báo & Profile bên phải */}
      <div className="flex items-center gap-4">
        {/* Nút hỗ trợ & Thông báo */}
        <div className="flex items-center gap-1 border-r border-gray-100 pr-4">
          <button className="p-2 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-full transition-all">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Thông tin Admin */}
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-800">Admin Harvest</p>
            <p className="text-[10px] uppercase tracking-wider text-emerald-600 font-black">
              Quản trị viên
            </p>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/admin/100"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-50 object-cover shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
