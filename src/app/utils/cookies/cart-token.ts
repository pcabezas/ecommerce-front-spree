import { cookies } from 'next/headers';
import CartTokenCookie from '../interfaces/cart-token-cookie';
import { CART_COOKIE_NAME } from '../constants';

export const cookieCartToken = (): CartTokenCookie | undefined => {
  const cookieStore = cookies();
  const cock = cookieStore.getAll();
  console.log("all cookies", cock)
  return cookieStore.get(CART_COOKIE_NAME);
};
