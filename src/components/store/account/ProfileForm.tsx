"use client";

import { Save } from "lucide-react";
import { motion } from "framer-motion"; // Phú lưu ý đổi 'motion/react' thành 'framer-motion' nếu bị lỗi nhé

export default function ProfileForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-600">Họ và tên</label>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition-all"
            defaultValue="Nguyễn Quang Phú"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-600">Email</label>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition-all"
            defaultValue="quangphu@dtu.edu.vn"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-600">
            Số điện thoại
          </label>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition-all"
            defaultValue="09xx xxx xxx"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-600">Ngày sinh</label>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition-all"
            type="date"
            defaultValue="2004-01-01"
          />
        </div>
      </div>

      <div className="pt-8 mt-10 border-t border-gray-100 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-[#16a34a] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-200 transition-all flex items-center gap-2"
        >
          <Save size={20} />
          Lưu thay đổi
        </motion.button>
      </div>
    </form>
  );
}
