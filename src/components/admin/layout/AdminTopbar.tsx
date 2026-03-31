import React from "react";
import { Search, Bell, User } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Title (Có thể truyền động dựa trên route, ở đây để fix theo UI) */}
      <h2 className="text-xl font-bold text-gray-900 hidden md:block">
        Tổng quan
      </h2>

      {/* Right Section: Search & Actions */}
      <div className="flex items-center gap-6 ml-auto">
        {/* Search */}
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-green-600 transition-colors" />
          <input
            type="text"
            placeholder="Tìm kiếm dữ liệu..."
            className="pl-9 pr-4 py-2 bg-gray-50/80 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:bg-white transition-all w-[280px]"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          <button className="p-1.5 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors border border-gray-200">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
