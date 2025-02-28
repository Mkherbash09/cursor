'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/logo/alkharbash-logo-icon.svg" 
                  alt="Al Kharbash Investment Co." 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-medium text-gray-900">Al Kharbash</h1>
                <p className="text-sm text-gray-500">Investment Co.</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link href="#services" scroll={false} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Services
              </Link>
              <Link href="#about" scroll={false} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                About
              </Link>
              <Link href="#contact" scroll={false} className="px-4 py-2 rounded border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 relative">
                  <Image 
                    src="/images/logo/alkharbash-logo-icon.svg" 
                    alt="Al Kharbash Investment Co." 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">Al Kharbash</h3>
                  <p className="text-sm text-gray-500">Investment Co.</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Premium real estate investments and property development in the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>123 Business Bay</li>
                <li>Dubai, UAE</li>
                <li>+971 4 123 4567</li>
                <li>info@alkharbash-investment.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Al Kharbash Investment Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 
