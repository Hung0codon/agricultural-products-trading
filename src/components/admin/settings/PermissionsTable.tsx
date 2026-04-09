"use client";

import React from "react";
import { Shield, History, Lightbulb, Save, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const MODULES = [
  { name: "MODULE ĐƠN HÀNG", permissions: ["Xem đơn hàng", "Sửa đơn hàng"] },
  {
    name: "MODULE SẢN PHẨM",
    permissions: ["Xoá sản phẩm", "Thêm mới sản phẩm"],
  },
  { name: "MODULE KHO", permissions: ["Nhập kho", "Kiểm kê kho"] },
  {
    name: "MODULE QUẢN TRỊ & CMS",
    permissions: ["Quản lý banner", "Phân quyền nhân viên"],
  },
];

const ROLES = [
  { id: "admin", name: "Admin", icon: "👤" },
  { id: "kho", name: "Quản lý kho", icon: "📦" },
  { id: "banhang", name: "Bán hàng", icon: "🛒" },
  { id: "giaohang", name: "Giao hàng", icon: "🚛" },
];

export default function PermissionMatrix() {
  return (
    <div className="space-y-6">
      {/* Header Phân quyền */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">
            <span>Hệ thống</span>
            <span>/</span>
            <span className="text-emerald-600 font-black">Phân quyền</span>
          </nav>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Phân quyền Hệ thống
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Thiết lập ma trận quyền hạn cho các nhóm người dùng.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
            Hủy thay đổi
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-100">
            Lưu thay đổi
          </button>
        </div>
      </div>

      {/* Ma trận Phân quyền */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-emerald-50/30">
              <th className="px-8 py-6 text-left text-[11px] font-black text-emerald-800 uppercase tracking-widest border-b border-emerald-50 w-1/3">
                Danh sách quyền
              </th>
              {ROLES.map((role) => (
                <th
                  key={role.id}
                  className="px-4 py-6 text-center border-b border-emerald-50"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">{role.icon}</span>
                    <span className="text-[11px] font-black text-slate-700 uppercase">
                      {role.name}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {MODULES.map((module, mIdx) => (
              <React.Fragment key={mIdx}>
                {/* Dòng tiêu đề Module */}
                <tr className="bg-gray-50/50">
                  <td
                    colSpan={5}
                    className="px-8 py-3 text-[10px] font-black text-emerald-600 tracking-widest"
                  >
                    {module.name}
                  </td>
                </tr>
                {/* Các dòng quyền hạn */}
                {module.permissions.map((perm, pIdx) => (
                  <tr
                    key={pIdx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-8 py-4 text-sm font-medium text-slate-700">
                      {perm}
                    </td>
                    {ROLES.map((role) => (
                      <td
                        key={role.id}
                        className="px-4 py-4 text-center border-l border-gray-50"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={role.id === "admin"}
                          className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Thẻ ghi chú dưới cùng */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
            <Shield size={20} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Bảo mật đa lớp</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Hệ thống áp dụng RBAC để đảm bảo dữ liệu nông sản luôn được bảo vệ
            tối đa.
          </p>
        </div>
        <div className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
            <History size={20} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Nhật ký thay đổi</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Mọi thay đổi về quyền hạn đều được lưu vết chi tiết (Audit Log) để
            đối soát.
          </p>
        </div>
        <div className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
            <Lightbulb size={20} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Mẹo quản trị</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Nên giới hạn quyền "Xoá" cho quản lý cấp cao để tránh mất dữ liệu
            ngoài ý muốn.
          </p>
        </div>
      </div>
    </div>
  );
}
