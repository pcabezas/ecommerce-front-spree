import getCartTokenCookie from './get-cart-token-cookie';
import getCartToken from './get-cart-token';
import setCartTokenCookie from './set-cart-token-cookie';

const checkCartTokenCookie = async () => {
  try {
    let token = getCartTokenCookie();
    if (token != undefined) return true;

    if (token == undefined) {
      token = await getCartToken();
      setCartTokenCookie(token);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default checkCartTokenCookie;
