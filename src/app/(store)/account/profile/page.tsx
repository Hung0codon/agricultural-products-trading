"use client";

import { Bell, Edit2 } from "lucide-react";
import { motion } from "framer-motion";
import ProfileForm from "@/components/store/account/ProfileForm";

export default function ProfilePage() {
  return (
    <main className="p-10">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-emerald-900 tracking-tight font-headline">
            Hồ sơ cá nhân
          </h2>
          <p className="text-gray-500 font-body mt-1">
            Quản lý thông tin tài khoản và bảo mật của bạn
          </p>
        </div>
        <button className="bg-white p-2 rounded-full text-emerald-600 hover:bg-emerald-50 shadow-sm transition-colors cursor-pointer">
          <Bell size={24} />
        </button>
      </header>

      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100"
        >
          {/* Avatar Section */}
          <div className="flex items-center gap-8 mb-12 border-b border-gray-50 pb-8">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-4xl text-emerald-700 font-black shadow-inner">
                P
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md border border-emerald-100">
                <Edit2 size={14} className="text-emerald-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ảnh đại diện
              </h3>
              <div className="flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-emerald-700 transition-all"
                >
                  Thay đổi ảnh
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold hover:bg-gray-200 transition-all"
                >
                  Xóa ảnh
                </motion.button>
              </div>
            </div>
          </div>

          {/* NHÚNG FORM VÀO ĐÂY */}
          <ProfileForm />
        </motion.div>
      </div>
    </main>
  );
}
