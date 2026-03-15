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
