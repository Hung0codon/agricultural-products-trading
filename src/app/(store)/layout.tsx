import React from 'react';
import Header from '@/components/store/layout/Header';
import Footer from '@/components/store/layout/Footer';


export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Các trang con (như Trang chủ, Sản phẩm, Thanh toán) sẽ tự động chui vào đây */}
      {children} 
      <Footer />
    </div>
  );
}