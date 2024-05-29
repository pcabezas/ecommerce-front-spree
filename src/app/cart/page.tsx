import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '../utils/constants';
import Link from 'next/link';
import { getCart } from '../checkout/utils/request/get-cart';
import { normalizeOrder } from '../utils/normalize-order-response';

const Cart = async () => {
  const cartToken = cookies().get(CART_COOKIE_NAME)!;
  const { status, response } = await getCart(cartToken.value, []);
  const { data, ok } = response;
  if (status !== 200 || (status === 200 && !ok)) {
    throw new Error('Error getting Cart data', data);
  }
  const { total, item_total, ship_total, adjustment_total, state } =
    normalizeOrder(response);
  return (
    <div>
      <div>
        Item Total: <span>{item_total}</span>
      </div>
      <div>
        Ship Total: <span>{ship_total}</span>
      </div>
      <div>
        Adjustments Total: <span>{adjustment_total}</span>
      </div>
      <div>
        Total: <span>{total}</span>
      </div>
      <div>
        <Link href={`/checkout/${state}`}>Ir a pagar</Link>
      </div>
    </div>
  );
};

export default Cart;
