import React from "react";
import Link from "next/link";

export default function StoreHomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Trang chủ Nông Sản
      </h1>
      <p className="mb-6">Đang xây dựng giao diện cửa hàng...</p>
      <Link
        href="/admin/overview"
        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
      >
        Đi tới trang Admin
      </Link>
    </div>
  );
}
