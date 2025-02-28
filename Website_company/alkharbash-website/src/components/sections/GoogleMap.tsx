"use client";

import React, { useRef, useEffect, useState } from 'react';

interface GoogleMapProps {
  apiKey?: string;
  location: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  location = { lat: 25.2048, lng: 55.2708 }, // Default to Dubai coordinates
  zoom = 15
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Location</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Visit our office in the heart of Dubai&apos;s Business Bay district to discuss investment opportunities.
          </p>
        </div>
        
        <div className={`relative overflow-hidden rounded-xl shadow-xl ${isVisible ? 'animate-slide-in-bottom' : ''}`}>
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            {/* 
              In a real implementation, you would use the @react-google-maps/api library.
              For now, we'll use an iframe as a placeholder.
            */}
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey || 'YOUR_API_KEY'}&q=${location.lat},${location.lng}&zoom=${zoom}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Kharbash Investment Co. Location"
              className="w-full h-full"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Al Kharbash Investment Co.</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Business Bay, Dubai, UAE</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>P.O. Box 12345</span>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=25.2048,55.2708" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center group"
              >
                <span>Get Directions</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${isVisible ? 'animate-slide-in-bottom delay-100' : ''}`}>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Business Hours</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${isVisible ? 'animate-slide-in-bottom delay-200' : ''}`}>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Contact Information</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@alkharbash-investment.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book an appointment</span>
              </li>
            </ul>
          </div>
          
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${isVisible ? 'animate-slide-in-bottom delay-300' : ''}`}>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Parking Information</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Complimentary valet parking is available for all visitors. 
              Public parking is also available in the Business Bay area.
            </p>
            <div className="mt-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Nearest Metro: Business Bay Station</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap; 