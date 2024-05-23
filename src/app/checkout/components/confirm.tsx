import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { AddressForm } from './address-form';
import { getCart } from '../utils/request/get-cart';
import { normalizeOrder } from '@/app/utils/normalize-order-response';

interface Props {
  cartToken: CartTokenCookie;
}

const fetchCart = async (cartToken: CartTokenCookie) => {
  const response = await getCart(cartToken.value, ['payments']);
  return response;
};

const Confirm = async ({ cartToken }: Props) => {
  const res = await fetchCart(cartToken);
  const order = normalizeOrder(res.response);
  const payment = order.payments.find((p) => p.state === 'checkout');
  if (payment && payment.public_metadata) {
    const { url, token } = payment.public_metadata;
    return (
      <form method="post" action={url}>
        <input type="hidden" name="token_ws" value={token} />
        <input type="submit" value="Ir a pagar" />
      </form>
    );
  }
  return <h1>Confirm</h1>;
};

export default Confirm;
