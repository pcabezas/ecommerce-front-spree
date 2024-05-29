import styles from './styles.module.css';
import getCartTokenCookie from '@/app/auth/utils/get-cart-token-cookie';
import getCartItemsCount from '../../utils/requests/storefront/cart-items-count';
import Link from 'next/link';
import { getCountItems } from '../utils/requests/get-count-items';
import { normalizeCartItemsCount } from '@/app/utils/normalize-cart-item-count-response';

const CartItemsCounter = async () => {
  const cartToken = getCartTokenCookie();
  if (cartToken == undefined) return false;

  let cartItems = 0;
  const { value } = cartToken;
  const {
    status,
    response: { data, ok },
  } = await getCountItems(value);
  if (status !== 200 || (status === 200 && !ok)) {
    throw new Error('Error getting cart items count', data);
  }
  const cart = normalizeCartItemsCount(data);
  cartItems = cart.item_count;
  return (
    <div className={styles.CartCounterContainer}>
      Cart Items {cartItems}
      {cartItems > 0 && <Link href={'/cart'}>Carro</Link>}
    </div>
  );
};

export default CartItemsCounter;
