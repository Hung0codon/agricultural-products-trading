'use client'

import React, { useState } from 'react';
import { 
  ShoppingCart, User, MapPin, CheckCircle2, 
  Banknote, FileText, ArrowRight, CreditCard
} from 'lucide-react';
import { motion } from 'framer-motion';

const TopNavBar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20">
    <div className="flex justify-between items-center px-8 h-full max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-green-600 tracking-tighter">Verdant Curator</div>
      <div className="hidden md:flex space-x-8">
        <a className="text-gray-500 hover:text-green-600 transition-colors" href="#">Cửa hàng</a>
        <a className="text-gray-500 hover:text-green-600 transition-colors" href="#">Mùa vụ</a>
        <a className="text-gray-500 hover:text-green-600 transition-colors" href="#">Chúng tôi</a>
      </div>
      <div className="flex items-center space-x-6">
        <button className="p-2 hover:bg-green-50 rounded-full transition-colors">
          <ShoppingCart className="w-6 h-6 text-green-600" />
        </button>
        <button className="p-2 hover:bg-green-50 rounded-full transition-colors">
          <User className="w-6 h-6 text-green-600" />
        </button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="w-full py-12 px-8 mt-auto bg-green-50 text-sm border-t border-green-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-semibold text-green-700">© 2026 The Verdant Curator</div>
      <div className="flex space-x-6 text-gray-500">
        <a href="#" className="hover:text-green-600">Chính sách bảo mật</a>
        <a href="#" className="hover:text-green-600">Điều khoản dịch vụ</a>
      </div>
    </div>
  </footer>
);

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cartItems = [
    { name: "Cải Kale Thủy Canh", weight: "500g", qty: 2, price: 45000, img: "https://images.unsplash.com/photo-1524179524541-1aa1ece2bb91?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Xoài Cát Chu Loại 1", weight: "1kg", qty: 1, price: 65000, img: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=200&h=200&auto=format&fit=crop" }
  ];

  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    // Giả lập gọi API
    setTimeout(() => {
      alert("Đặt hàng thành công! Cảm ơn bạn đã tin dùng nông sản sạch.");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <TopNavBar />
      
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Thanh toán đơn hàng</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* CỘT TRÁI: THÔNG TIN */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Địa chỉ */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold">Địa chỉ giao hàng</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((id) => (
                  <div 
                    key={id}
                    onClick={() => setSelectedAddressId(id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedAddressId === id ? 'border-green-600 bg-green-50/30' : 'border-gray-100 hover:border-green-200'}`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-gray-800">{id === 1 ? "Nhà riêng" : "Văn phòng"}</p>
                      {selectedAddressId === id && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">01 Lê Lợi, Quận 1, TP.HCM</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Thanh toán */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Banknote className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold">Phương thức thanh toán</h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {['cod', 'momo', 'vnpay'].map((m) => (
                  <label key={m} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === m ? 'border-green-600 bg-green-50/30' : 'border-gray-100'}`}>
                    <input type="radio" checked={paymentMethod === m} onChange={() => setPaymentMethod(m)} className="w-4 h-4 text-green-600 focus:ring-green-500" />
                    <span className="ml-4 font-medium uppercase text-gray-700">{m === 'cod' ? 'Tiền mặt (COD)' : m}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Ghi chú */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold">Ghi chú</h2>
              </div>
              <textarea 
                value={note} 
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none text-gray-700" 
                placeholder="Lời nhắn cho shipper..." rows={3} 
              />
            </section>
          </div>

          {/* CỘT PHẢI: TỔNG TIỀN */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-green-900/5 border border-green-50 sticky top-28">
              <h2 className="text-xl font-bold mb-6">Chi tiết đơn hàng</h2>
              
              <div className="space-y-4 mb-8">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <img src={item.img} className="w-14 h-14 rounded-xl object-cover" alt={item.name} />
                    <div className="flex-grow">
                      <p className="text-sm font-bold text-gray-800">{item.name}</p>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>SL: {item.qty}</span>
                        <span className="font-bold text-gray-900">{(item.price * item.qty).toLocaleString()}đ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>Phí vận chuyển</span>
                  <span>15.000đ</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Tổng cộng</span>
                  <span className="text-2xl font-black text-green-600">170.000đ</span>
                </div>
              </div>

              <motion.button 
                onClick={handlePlaceOrder}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-8 py-4 rounded-2xl font-bold text-white shadow-lg shadow-green-600/20 flex items-center justify-center space-x-2 transition-all ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
              >
                <span>{isSubmitting ? 'ĐANG XỬ LÝ...' : 'ĐẶT HÀNG NGAY'}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}