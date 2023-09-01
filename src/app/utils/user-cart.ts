import getCart from '../auth/api/get-cart';
import CartTokenCookie from './interfaces/cart-token-cookie';

export const checkUserCart = async (cartToken: CartTokenCookie | undefined) => {
  if (cartToken === undefined) {
    await getCart();
  }
};
