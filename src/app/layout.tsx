import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SIP Juice – Fresh Watermelon Juice | Natural & Refreshing',
  description: 'Sip Juice offers fresh and refreshing watermelon juice made from natural ingredients. Enjoy the perfect healthy drink anytime.',
  keywords: 'sip juice, watermelon juice, fresh juice, healthy juice drink',
  alternates: {
    canonical: 'https://sip-pied.vercel.app/',
  },
  openGraph: {
    title: 'SIP Juice – Fresh Watermelon Juice',
    description: 'Refreshing watermelon juice made with natural ingredients.',
    url: 'https://sip-pied.vercel.app/',
    siteName: 'SIP Juice',
    images: [
      {
        url: 'https://sip-pied.vercel.app/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'SIP Juice - Fresh Watermelon Juice',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'GZNh1C_n1AWl4mZV_40HEz_5A_tdfTDAVVfqqkP2u7s',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
