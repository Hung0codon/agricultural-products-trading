'use client'

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-[#FDFEFC] fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? ' backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between ">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-tight">
            Verdant Curator
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">Trang chủ</Link>
            <Link href="/products" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Sản phẩm</Link>
            <Link href="/farmers" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Nhà vườn</Link>
            <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Câu chuyện</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Tìm kiếm nông sản..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body outline-none"
            />
          </div>
          <button className="p-2 text-gray-500 hover:text-primary transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-500 hover:text-primary transition-colors">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}