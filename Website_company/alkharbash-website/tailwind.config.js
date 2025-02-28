/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3B82F6', // blue-500
          violet: '#8B5CF6', // violet-500
          dark: '#111827', // gray-900
          light: '#F9FAFB', // gray-50
          accent: '#6366F1', // indigo-500
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  corePlugins: {
    container: true,
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.card': {
          backgroundColor: '#1F2937', // gray-800
          borderRadius: '0.5rem',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid #374151', // gray-700
        },
      });
    },
  ],
}; 