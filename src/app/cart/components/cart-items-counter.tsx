import getCartTokenCookie from '@/app/auth/utils/get-cart-token-cookie';
import getCartItemsCount from '../api/cart-items-count';
import Link from 'next/link';

const CartItemsCounter = async () => {
  const cartToken = getCartTokenCookie();
  if (cartToken == undefined) return false;

  let cartItems = 0;
  const { value } = cartToken;
  cartItems = await getCartItemsCount(value);
  return (
    <div>
      Carro {cartItems}
      {cartItems > 0 && <Link href={'/cart'}>Carro</Link>}
    </div>
  );
};

export default CartItemsCounter;
