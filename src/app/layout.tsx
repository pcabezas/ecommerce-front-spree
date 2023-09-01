import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Session } from './auth/components/session';
import { cookies } from 'next/headers';
import CartTokenCookie from './utils/interfaces/cart-token-cookie';

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
  const nextCookies = cookies();
  const tokenCart: CartTokenCookie | undefined =
    nextCookies.get('spree_cart_token');

  return (
    <html lang="en">
      <Session cartToken={tokenCart}></Session>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
