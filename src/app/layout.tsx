import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SIP Juice – Fresh Watermelon Juice Drink',
  description: 'SIP Juice is a refreshing watermelon juice drink made from fresh fruits. Discover SIP Juice online.',
  openGraph: {
    title: 'SIP Juice – Fresh Watermelon Drink',
    description: 'Enjoy fresh SIP Juice made from watermelon.',
    url: 'https://sip-pied.vercel.app/',
    siteName: 'SIP Juice',
    type: 'website',
  },
  verification: {
    google: 'google9f722d60581a6476',
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
