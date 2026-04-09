"use client";

import { Plus, Home, Briefcase, Edit2, Trash2, MapPin } from "lucide-react";
import { motion } from "motion/react";

// 1. Component AddressCard của Phú (đã tinh chỉnh nhẹ để khớp màu hệ thống)
interface AddressCardProps {
  name: string;
  phone: string;
  address: string;
  isDefault?: boolean;
  type: "home" | "work";
}

function AddressCard({
  name,
  phone,
  address,
  isDefault,
  type,
}: AddressCardProps) {
  const Icon = type === "home" ? Home : Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 relative overflow-hidden group border border-emerald-50 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
    >
      {isDefault && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDefault ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`}
            >
              <Icon size={24} fill={isDefault ? "currentColor" : "none"} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500 font-medium">{phone}</p>
            </div>
          </div>
          {isDefault && (
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Mặc định
            </span>
          )}
        </div>

        <p className="text-gray-600 leading-relaxed text-sm mb-8 h-10 line-clamp-2">
          {address}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
          {!isDefault ? (
            <button className="text-emerald-600 border border-emerald-200 px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-emerald-50 transition-colors">
              Đặt làm mặc định
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-600 font-bold text-xs transition-colors py-2 px-3 rounded-lg hover:bg-emerald-50">
              <Edit2 size={14} />
              Chỉnh sửa
            </button>
            <button className="flex items-center gap-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 font-bold text-xs transition-colors py-2 px-3 rounded-lg">
              <Trash2 size={14} />
              Xoá
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 2. Trang chính AddressesPage
export default function AddressesPage() {
  const sampleAddresses: AddressCardProps[] = [
    {
      name: "Nhà riêng",
      phone: "090 123 4567",
      address: "123 Đường Lê Lợi, Phường Hải Châu 1, Quận Hải Châu, Đà Nẵng",
      isDefault: true,
      type: "home",
    },
    {
      name: "Văn phòng Duy Tân",
      phone: "0236 3 111 222",
      address: "03 Quang Trung, Quận Hải Châu, TP. Đà Nẵng",
      isDefault: false,
      type: "work",
    },
  ];

  return (
    <main className="p-10">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-emerald-900 tracking-tight">
            Địa chỉ giao hàng
          </h2>
          <p className="text-gray-500 mt-1">
            Quản lý các địa điểm nhận hàng của bạn
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all"
        >
          <Plus size={20} />
          Thêm địa chỉ mới
        </motion.button>
      </header>

      {/* Grid danh sách địa chỉ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sampleAddresses.map((addr, index) => (
          <AddressCard key={index} {...addr} />
        ))}

        {/* Nút giả để thêm nhanh địa chỉ */}
        <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-emerald-300 hover:text-emerald-600 transition-all min-h-[250px]">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-emerald-50">
            <MapPin size={24} />
          </div>
          <span className="font-bold">Thêm địa chỉ nhận hàng khác</span>
        </button>
      </div>
    </main>
  );
}
