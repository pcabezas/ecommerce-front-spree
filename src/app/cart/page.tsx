import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '../utils/constants';

const getCart = async (cartToken: string) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/cart?cartToken=${cartToken}`,
  );
  return res.json();
};

const Cart = async () => {
  const cartToken = cookies().get(CART_COOKIE_NAME)!;
  const {
    data: { total, item_total, ship_total, adjustment_total },
  } = await getCart(cartToken.value);
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
    </div>
  );
};

export default Cart;
