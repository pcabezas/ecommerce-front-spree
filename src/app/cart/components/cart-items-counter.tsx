import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import getCartItemsCount from '../api/cart-items-count';

const CartItemsCounter = async ({
  cartToken,
}: {
  cartToken: CartTokenCookie | undefined;
}) => {
  let cartItems = 0;
  if (cartToken) {
    cartItems = await getCartItemsCount(cartToken.value);
  }
  return <div>Carro {cartItems}</div>;
};

export default CartItemsCounter;
