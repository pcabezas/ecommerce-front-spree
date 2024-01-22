import { CART_COOKIE_NAME } from '@/app/utils/constants';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { cookies } from 'next/headers';

const getCartTokenCookie = (): CartTokenCookie | undefined => {
  const token = cookies().get(CART_COOKIE_NAME);
  return token;
};

export default getCartTokenCookie;
