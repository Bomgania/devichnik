import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Devichnik Beauty Studio | Салон краси ЖК «Львівський»',
  description:
    'Devichnik Beauty Studio — сучасний простір краси у Петропавлівській Борщагівці (ЖК «Львівський»). Складні техніки фарбування Airtouch, догляди JOICO K-PAK і BRAÉ, манікюр, педикюр, ламінування вій та брів.',
  keywords: [
    'салон краси Петропавлівська Борщагівка',
    'Devichnik Beauty Studio',
    'салон краси ЖК Львівський',
    'Airtouch Київ',
    'фарбування волосся',
    'манікюр Петропавлівська Борщагівка',
    'ламінування вій',
    'онлайн запис салон краси',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#181716] antialiased selection:bg-[#E7D7C1] selection:text-[#181716]">
        {children}
      </body>
    </html>
  );
}
