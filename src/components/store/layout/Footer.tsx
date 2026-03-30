import React from 'react';
import {  MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ECFDF5] border-t border-gray-100 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-tight mb-6 block">
            Verdant Curator
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
            Nơi tôn vinh giá trị nông sản Việt qua từng bữa ăn sạch, an lành cho mọi gia đình.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-[#b69aa6] transition-all shadow-sm">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className=" w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-[#b69aa6] transition-all shadow-sm">
          <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className=" w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-[#b69aa6] transition-all shadow-sm">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-gray-900 mb-6">Hệ thống</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Nguồn cung bền vững</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Hệ thống đối tác</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-gray-900 mb-6">Chính sách</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Chính sách giao hàng</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Bảo mật thông tin</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Hoàn trả hàng</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-gray-900 mb-6">Liên hệ</h4>
          <div className="space-y-4 text-sm text-gray-500">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>123 Đường Nông Nghiệp, Quận 1, TP.HCM</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>1900 1234 (8:00 - 21:00)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>hello@verdantcurator.vn</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400">
          © 2024 Verdant Curator. Nurturing the land, serving the people.
        </p>
      </div>
    </footer>
  );
}