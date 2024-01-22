import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '@/app/utils/constants';

const setCartTokenCookie = (token: string) => {
  cookies().set(CART_COOKIE_NAME, token);
};

export default setCartTokenCookie;
