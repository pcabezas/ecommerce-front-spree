import getCartTokenCookie from './get-cart-token-cookie';
import getCartToken from '../../utils/requests/storefront/get-cart-token';
import setCartTokenCookie from './set-cart-token-cookie';

/**
 * Checks if the cart token cookie exists. If not, retrieves a new cart token and sets it as a cookie.
 * @returns {Promise<boolean>} A promise that resolves to true if the cart token cookie exists or is successfully set, false otherwise.
 */
export const checkCartTokenCookie = async (): Promise<boolean> => {
  try {
    let token = getCartTokenCookie();
    if (token != undefined) return true;

    token = await getCartToken();
    if (token == undefined) {
      throw new Error('Error getting cart token.');
    }
    setCartTokenCookie(token.value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const forceToRefreshCartTokenCookie = async (): Promise<boolean> => {
  try {
    const token = await getCartToken();
    if (token == undefined) {
      throw new Error('Error getting cart token.');
    }
    setCartTokenCookie(token.value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
