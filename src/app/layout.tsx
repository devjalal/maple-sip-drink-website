import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maple SIP Juice – Best Healthy Watermelon Juice | Wedding & Bottled Drinks',
  description: 'Maple SIP Juice offers the best healthy and refreshing watermelon juice. Perfect for weddings, events, and daily bottled hydration. Made from 100% natural ingredients.',
  keywords: 'maple sip juice, sip juice, best healthy juice, wedding juices, bottle drinks, watermelon juice, natural refreshing drink',
  alternates: {
    canonical: 'https://sip-pied.vercel.app/',
  },
  openGraph: {
    title: 'Maple SIP Juice – Fresh, Healthy & Natural Watermelon Juice',
    description: 'Refreshing bottled watermelon juice for daily health or special events like weddings. Discover Maple SIP Juice.',
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
