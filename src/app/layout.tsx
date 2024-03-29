import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Session } from './auth/components/session';
import CartItemsCounter from './cart/components/cart-items-counter';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Session />
      <body className={inter.className}>
        <div>
          <Link href={'/'}>Home</Link>
        </div>
        <CartItemsCounter />
        {children}
      </body>
    </html>
  );
}
