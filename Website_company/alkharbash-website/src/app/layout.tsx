import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Al Kharbash Investment Co. | Premium Real Estate Investments',
  description: 'Al Kharbash Investment Co. specializes in premium real estate investments, property management, and strategic development projects across the UAE.',
  keywords: 'real estate investment, property management, Dubai real estate, UAE property development, Al Kharbash',
  authors: [{ name: "Al Kharbash Investment Co." }],
  creator: "Al Kharbash Investment Co.",
  publisher: "Al Kharbash Investment Co.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Al Kharbash Investment Co. | Premium Real Estate Investments",
    description: "Al Kharbash Investment Co. specializes in premium real estate investments, property management, and strategic development projects across the UAE.",
    url: "https://alkharbash-investment.com",
    siteName: "Al Kharbash Investment Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/logo/alkharbash-logo-full.svg',
        width: 800,
        height: 150,
        alt: 'Al Kharbash Investment Co.',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Al Kharbash Investment Co. | Premium Real Estate Investments",
    description: "Al Kharbash Investment Co. specializes in premium real estate investments, property management, and strategic development projects across the UAE.",
    images: ['/images/logo/alkharbash-logo-full.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
