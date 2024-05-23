import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '../utils/constants';
import Link from 'next/link';
import { getCart } from '../checkout/utils/request/get-cart';

const Cart = async () => {
  const cartToken = cookies().get(CART_COOKIE_NAME)!;
  const {
    response: {
      data: {
        attributes: { total, item_total, ship_total, adjustment_total, state },
      },
    },
  } = await getCart(cartToken.value, []);
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
