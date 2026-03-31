import React from "react";
import {
  Search,
  Bell,
  Download,
  Banknote,
  ShoppingBag,
  Users,
  AlertCircle,
  TrendingUp,
  History,
  Plus,
} from "lucide-react";
import prisma from "@/lib/prisma";

// ==========================================
// 1. BACKEND LOGIC: Kéo Data thật từ Database
// ==========================================
async function getDashboardData() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  // A. Tính Doanh thu & Tổng đơn hàng hôm nay
  const todayOrders = await prisma.don_hang.findMany({
    where: {
      ngay_tao: { gte: today },
      trang_thai: { notIn: ["DA_HUY", "TRA_HANG"] }, // Bỏ qua đơn hủy/trả
    },
    select: { tong_tien: true },
  });
  const revenueToday = todayOrders.reduce(
    (sum: number, order: any) => sum + Number(order.tong_tien || 0),
    0,
  );
  const newOrdersCount = todayOrders.length;

  // B. Khách hàng mới trong tháng
  const newCustomersCount = await prisma.nguoi_dung.count({
    where: { ngay_tao: { gte: startOfMonth } },
  });

  // C. Lấy 4 đơn hàng "CHỜ XÁC NHẬN" mới nhất
  const recentOrders = await prisma.don_hang.findMany({
    where: { trang_thai: "CHO_XAC_NHAN" },
    orderBy: { ngay_tao: "desc" },
    take: 4,
    include: {
      nguoi_dung: {
        include: { ho_so_nguoi_dung: true },
      },
    },
  });

  // D. Sản phẩm sắp hết hàng (Tồn kho < 10)
  const lowStockItems = await prisma.ton_kho_tong.findMany({
    where: { so_luong: { lt: 10 } },
    take: 3,
    include: {
      lo_hang: {
        include: {
          bien_the_san_pham: { include: { san_pham: true } },
        },
      },
    },
  });

  const totalLowStockCount = await prisma.ton_kho_tong.count({
    where: { so_luong: { lt: 10 } },
  });

  return {
    revenueToday,
    newOrdersCount,
    newCustomersCount,
    recentOrders,
    lowStockItems,
    totalLowStockCount,
  };
}

// ==========================================
// 2. FRONTEND LOGIC: Render Giao diện
// ==========================================
export default async function OverviewPage() {
  // Lấy data từ DB (Chạy ngầm trên server)
  const data = await getDashboardData();

  // Hàm format tiền VNĐ
  const formatVND = (amount: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-[#f8fcf8] min-h-screen">
      {/* --- TOPBAR BÊN TRONG --- */}
      <div className="flex items-center justify-between gap-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 hidden md:block">
          Tổng quan
        </h2>
        <div className="relative group w-full max-w-sm ml-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-green-600 transition-colors" />
          <input
            type="text"
            placeholder="Tìm kiếm dữ liệu..."
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-sm font-bold text-green-700 border border-green-200 cursor-pointer">
            A
          </div>
        </div>
      </div>

      {/* --- TIÊU ĐỀ CHÍNH --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Chào buổi sáng, Admin
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {new Intl.DateTimeFormat("vi-VN", { dateStyle: "full" }).format(
              new Date(),
            )}
          </p>
        </div>
        <button className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium transition-colors w-fit">
          <Download size={17} />
          Xuất báo cáo
        </button>
      </div>

      {/* --- LƯỚI 4 CỘT KPI (ĐỔ DATA DB) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-medium text-gray-500">
              Doanh thu hôm nay
            </p>
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <Banknote size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {formatVND(data.revenueToday)}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-medium text-gray-500">Đơn hàng mới</p>
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <ShoppingBag size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {data.newOrdersCount}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-medium text-gray-500">Khách hàng mới</p>
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <Users size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {data.newCustomersCount}
            </h3>
            <p className="text-xs text-gray-400 mt-1">Trong tháng này</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-40 border-red-100">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-medium text-gray-500">
              Sản phẩm hết hàng
            </p>
            <div className="p-2 rounded-lg bg-red-100 text-red-600">
              <AlertCircle size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-600">
              {data.totalLowStockCount}
            </h3>
            {data.totalLowStockCount > 0 && (
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-red-50 text-red-500 text-[10px] font-bold rounded">
                CẦN NHẬP THÊM
              </span>
            )}
          </div>
        </div>
      </div>

      {/* --- LƯỚI BIỂU ĐỒ & ĐƠN HÀNG (ĐỔ DATA DB) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-[400px]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Doanh thu 7 ngày gần nhất
              </h2>
              <p className="text-sm text-gray-500">
                Chưa tích hợp thư viện Chart
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed text-gray-400">
            Nơi đặt Recharts / Chart.js
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[400px] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Đơn hàng cần xử lý
            </h2>
            <a
              href="/admin/orders"
              className="text-sm font-medium text-green-600 hover:text-green-700"
            >
              Xem tất cả
            </a>
          </div>
          <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2 flex-1">
            {data.recentOrders.length > 0 ? (
              data.recentOrders.map((order: any) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg border border-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 border border-gray-200">
                      #{order.id}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 truncate w-28">
                        {order.nguoi_dung?.ho_so_nguoi_dung?.ho_ten ||
                          "Khách vãng lai"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatVND(Number(order.tong_tien))}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-medium bg-yellow-50 text-yellow-700 rounded-md border border-yellow-100 whitespace-nowrap">
                    Chờ xác nhận
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center mt-10">
                Không có đơn hàng mới.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
