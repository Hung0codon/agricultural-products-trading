'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Nếu dùng bản mới nhất hãy đổi thành 'motion/react'
import { 
  ShoppingBag, 
  ReceiptText, 
  CheckCircle2, 
  Truck, 
  MessageCircle,
  Leaf,
  Droplets,
  Sprout,
  PackageCheck
} from "lucide-react";

const RECOMMENDATIONS = [
  {
    id: 1,
    name: "Sen đá Ruby",
    price: "120.000đ",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400",
    icon: <Leaf className="w-4 h-4" />
  },
  {
    id: 2,
    name: "Bộ Hạt Giống Thảo Mộc",
    price: "85.000đ",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400",
    icon: <Sprout className="w-4 h-4" />
  },
  {
    id: 3,
    name: "Bình Tưới Vintage",
    price: "250.000đ",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400",
    icon: <Droplets className="w-4 h-4" />
  },
  {
    id: 4,
    name: "Phân Bón Hữu Cơ",
    price: "45.000đ",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400",
    icon: <PackageCheck className="w-4 h-4" />
  }
];

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary/20">
      
      <main className="grow flex items-center justify-center px-6 py-12 md:py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Cột trái: Nội dung thông báo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <span className=" bg-[#D5E3FD] inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                Giao dịch thành công
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
                Đặt hàng thành <br className="hidden md:block" /> công
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md">
                Cảm ơn bạn đã tin tưởng **Verdant Curator**. Đơn hàng của bạn đang được chuẩn bị để mang hơi thở thiên nhiên đến không gian của bạn.
              </p>
            </div>

            {/* Thẻ thông tin đơn hàng */}
            <div className="bg-[#EFF6EA] backdrop-blur-sm p-6 md:p-8 rounded-3xl border-l-8 border-primary shadow-sm space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Mã đơn hàng</span>
                <span className="font-bold text-primary text-2xl tracking-tighter">#VC-2026-8892</span>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-black/5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Thời gian</span>
                  <span className="text-on-surface font-semibold">17:58, 31 Tháng 3, 2026</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Phương thức</span>
                  <span className="text-on-surface font-semibold">Ví điện tử MoMo</span>
                </div>
              </div>
            </div>

            {/* Nút bấm điều hướng */}
            <div className=" flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <button className="bg-[#007F36] w-full bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 group">
                  <ShoppingBag className=" w-5 h-5 group-hover:scale-110 transition-transform" />
                  Tiếp tục mua sắm
                </button>
              </Link>
              <button className="bg-[#E3EADF] flex-1  text-on-surface px-8 py-4 rounded-2xl font-bold border border-emerald-100 hover:bg-emerald-50 transition-all flex items-center justify-center gap-3">
                <ReceiptText className="w-5 h-5" />
                Xem đơn hàng
              </button>
            </div>
          </motion.div>

          {/* Cột phải: Hình ảnh Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-yellow-200 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center border border-white/50 overflow-hidden">
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="w-32 h-32 bg-primary rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-primary/30"
                >
                  <CheckCircle2 className="text-white w-16 h-16" strokeWidth={3} />
                </motion.div>
                <h2 className="text-4xl font-black text-primary tracking-tight">Tuyệt vời!</h2>
              </div>

              {/* Badge Trạng thái nổi */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-emerald-50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Vận chuyển</p>
                  <p className="text-sm font-bold">Chờ xử lý</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Gợi ý sản phẩm */}
      <section className="max-w-6xl mx-auto w-full px-6 mb-20">
        <div className="bg-white/40 rounded-[3rem] p-8 md:p-12 border border-white">
          <div className="flex items-center gap-3 mb-10">
            <Sprout className="text-primary w-6 h-6" />
            <h3 className="text-2xl font-bold">Thêm mầm xanh cho vườn nhà</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {RECOMMENDATIONS.map((item, idx) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-4/5 rounded-4xl overflow-hidden mb-4 bg-emerald-50 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-bold text-sm text-on-surface">{item.name}</h4>
                <p className="text-primary font-bold">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}