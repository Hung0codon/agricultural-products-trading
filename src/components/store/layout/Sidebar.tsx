"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  MapPin,
  Package,
  Heart,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activeTab }: { activeTab: string }) {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "overview",
      label: "Tổng quan",
      icon: LayoutDashboard,
      href: "/account",
    },
    {
      id: "orders",
      label: "Đơn hàng của tôi",
      icon: Package,
      href: "/account/orders",
    },
    {
      id: "profile",
      label: "Hồ sơ cá nhân",
      icon: User,
      href: "/account/profile",
    },
    {
      id: "addresses",
      label: "Địa chỉ giao hàng",
      icon: MapPin,
      href: "/account/addresses",
    },
    {
      id: "wishlist",
      label: "Yêu thích",
      icon: Heart,
      href: "/account/wishlist",
    },
  ];

  return (
    <div className="flex flex-col h-full p-6 bg-[#f0f9f1]">
      <Link href="/" className="mb-10">
        <h1 className="text-xl font-black text-emerald-800 tracking-tight">
          Nông Sản Việt
        </h1>
      </Link>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                isActive
                  ? "bg-white text-emerald-700 shadow-sm border border-emerald-100"
                  : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-emerald-100">
        <button className="flex items-center gap-3 px-4 py-3 text-red-400 font-bold hover:text-red-600 w-full transition-colors text-sm">
          <LogOut size={20} />
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
