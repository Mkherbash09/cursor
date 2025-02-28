'use client'

import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

export default function Home() {
  // Services data
  const services = [
    {
      id: 1,
      title: 'Premium Real Estate Investments',
      description: 'We identify and develop high-value real estate opportunities across the UAE, focusing on prime locations that deliver exceptional returns.',
      icon: '🏢',
    },
    {
      id: 2,
      title: 'Property Management',
      description: 'Our comprehensive property management services ensure your investments are maintained to the highest standards.',
      icon: '🔑',
    },
    {
      id: 3,
      title: 'Development Projects',
      description: 'Strategic development projects that shape the future of Dubai&apos;s skyline, combining luxury, functionality, and innovation.',
      icon: '🏗️',
    },
    {
      id: 4,
      title: 'Investment Advisory',
      description: 'Expert investment advisory tailored to your financial goals, helping you navigate the complexities of property investment.',
      icon: '📊',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 md:py-32 text-center">
        <div className="mb-12 relative w-full max-w-3xl h-28 md:h-36">
          <Image 
            src="/images/logo/alkharbash-logo-full.svg" 
            alt="Al Kharbash Investment Co." 
            fill
            priority
            className="object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 max-w-2xl">
          Premium Real Estate Investment
        </h1>
        
        <p className="text-xl text-gray-600 max-w-xl mb-10">
          Exceptional property investments and development opportunities across the UAE
        </p>
        
        <a 
          href="#contact" 
          className="px-8 py-3 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50 transition-colors"
        >
          Get in Touch
        </a>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-600">
            Al Kharbash Investment Co. specializes in premium real estate investments, property management, and strategic development projects across the UAE. With a focus on quality and excellence, we deliver exceptional value to our investors and partners.
          </p>
        </div>
        
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            {/* Replace with an actual image when available */}
            <p className="text-gray-500">Company Image</p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of real estate investment and management services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in our services? Get in touch with our team and we'll help you explore the best investment opportunities.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Map Section - Simple version */}
      <section className="py-10 border-t border-gray-100">
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            {/* Replace with an actual map when available */}
            <p className="text-gray-500">Map Location</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
