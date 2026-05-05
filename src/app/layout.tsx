import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Toaster } from 'sonner';

// import { ThankYouDialog } from '@/features/contact-form/ui/thank-you-dialog';
import { cn } from '@/shared/lib/utils/cn';
import Footer from '@/shared/ui/components/footer/Footer';
import Header from '@/shared/ui/components/header/Header';

import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coinsmax',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(outfit.variable, 'antialiased')}>
        <Header />
        {children}
        <Toaster />
        {/*<ThankYouDialog />*/}
        <Footer />
      </body>
    </html>
  );
}
