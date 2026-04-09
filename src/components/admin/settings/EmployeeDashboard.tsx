"use client";

import React from "react";
import {
  UserPlus,
  Search,
  Filter,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CalendarDays,
  FileClock,
} from "lucide-react";
import { motion } from "framer-motion";

// --- DỮ LIỆU MẪU ---
const MOCK_EMPLOYEES = [
  {
    id: 1,
    name: "Nguyễn Minh Tuấn",
    email: "tuan.nm@verdant.vn",
    employeeCode: "VH-2024-001",
    department: "Kho vận",
    position: "Trưởng kho",
    phone: "090 123 4567",
    status: "Đang làm",
    avatar: "https://picsum.photos/seed/1/100",
  },
  {
    id: 2,
    name: "Phan Thị Lan",
    email: "lan.pt@verdant.vn",
    employeeCode: "VH-2024-042",
    department: "Kế toán",
    position: "Kế toán tổng hợp",
    phone: "091 888 9999",
    status: "Nghỉ phép",
    avatar: "https://picsum.photos/seed/2/100",
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    email: "nam.lh@verdant.vn",
    employeeCode: "VH-2023-115",
    department: "Giao hàng",
    position: "Tài xế",
    phone: "098 765 4321",
    status: "Đã nghỉ",
    avatar: "https://picsum.photos/seed/3/100",
  },
];

const DASHBOARD_STATS = {
  attendanceRate: 98.4,
  attendanceTrend: "+1.2% so với tháng trước",
  onLeaveCount: 12,
  onLeaveNote: "Dự kiến quay lại: Ngày mai",
  pendingProfilesCount: 5,
  pendingProfilesNote: "Ứng viên mới từ chiến dịch Thu hoạch",
};

// --- COMPONENT BADGE TRẠNG THÁI ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: any = {
    "Đang làm": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Nghỉ phép": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Đã nghỉ": "bg-gray-100 text-gray-500 border-gray-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${status === "Đang làm" ? "bg-emerald-500 animate-pulse" : status === "Nghỉ phép" ? "bg-yellow-500" : "bg-gray-400"}`}
      ></span>
      {status}
    </span>
  );
};

export default function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      {/* 1. Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">
            <span>Hệ thống</span>
            <ChevronRight size={12} />
            <span className="text-emerald-600 font-black">Quản lý Nhân sự</span>
          </nav>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Quản lý Nhân viên
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Theo dõi và điều phối đội ngũ nông nghiệp xanh.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-100 transition-all text-sm"
        >
          <UserPlus size={18} /> Thêm nhân viên mới
        </motion.button>
      </section>

      {/* 2. Filter Bar */}
      <div className="bg-white rounded-2xl p-5 flex flex-wrap items-center gap-4 border border-gray-100 shadow-sm">
        <div className="flex-1 min-w-[240px]">
          <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest ml-1">
            Tìm kiếm
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Tên, mã nhân viên..."
              className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-emerald-100 outline-none"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
              size={18}
            />
          </div>
        </div>
        <div className="w-full md:w-48">
          <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest ml-1">
            Phòng ban
          </label>
          <select className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-emerald-100 outline-none text-gray-600">
            <option>Tất cả</option>
            <option>Kho vận</option>
            <option>Giao hàng</option>
          </select>
        </div>
        <button className="mt-6 p-2.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all">
          <Filter size={18} />
        </button>
      </div>

      {/* 3. Bảng danh sách */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-4">Nhân viên</th>
                <th className="px-6 py-4">Mã số</th>
                <th className="px-6 py-4">Chức vụ</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_EMPLOYEES.map((emp) => (
                <tr
                  key={emp.id}
                  className="hover:bg-emerald-50/20 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm"
                      />
                      <div>
                        <p className="font-bold text-sm text-slate-800">
                          {emp.name}
                        </p>
                        <p className="text-[11px] text-gray-400">{emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono font-bold text-gray-500">
                    {emp.employeeCode}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-600">
                    {emp.position}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={emp.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-white rounded-lg transition-all shadow-none hover:shadow-sm border border-transparent hover:border-gray-100">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Thẻ thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: <TrendingUp size={18} />,
            title: "Tỉ lệ chuyên cần",
            val: `${DASHBOARD_STATS.attendanceRate}%`,
            note: DASHBOARD_STATS.attendanceTrend,
            color: "bg-emerald-50 text-emerald-600",
          },
          {
            icon: <CalendarDays size={18} />,
            title: "Đang nghỉ phép",
            val: DASHBOARD_STATS.onLeaveCount,
            note: DASHBOARD_STATS.onLeaveNote,
            color: "bg-amber-50 text-amber-600",
          },
          {
            icon: <FileClock size={18} />,
            title: "Chờ duyệt hồ sơ",
            val: `0${DASHBOARD_STATS.pendingProfilesCount}`,
            note: DASHBOARD_STATS.pendingProfilesNote,
            color: "bg-slate-100 text-slate-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4 opacity-70">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color}`}
              >
                {stat.icon}
              </div>
              <h3 className="font-bold uppercase text-[9px] tracking-widest">
                {stat.title}
              </h3>
            </div>
            <p className="text-3xl font-black text-slate-900">{stat.val}</p>
            <p className="text-[10px] font-medium text-gray-400 mt-1 italic">
              {stat.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
