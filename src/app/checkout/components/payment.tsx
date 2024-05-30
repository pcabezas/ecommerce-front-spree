import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { getPaymentMethods } from '../utils/request/get-payment-methods';
import { normalizePaymentMethodResponse } from '@/app/utils/normalize-payment-methods-response';
import { getCart } from '../utils/request/get-cart';
import PaymentMethodsList from './payment/payment-method-list';
import {
  PaymentMethodAttributes,
  PaymentMethodData,
} from '@/app/utils/interfaces/payment-methods';
import { StandardResponse } from '@/app/utils/interfaces/standard-response';

interface Props {
  cartToken: CartTokenCookie;
}
const fetchCart = async (
  cartToken: CartTokenCookie,
): Promise<StandardResponse> => {
  const {
    response: { data: cartData },
  } = await getCart(cartToken.value, ['payments']);
  return cartData;
};

const fetchPaymentMethod = async (
  cartToken: CartTokenCookie,
): Promise<PaymentMethodAttributes[]> => {
  const {
    response: { data },
  } = await getPaymentMethods(cartToken.value);
  const paymentMethods = data.map((d: PaymentMethodData) =>
    normalizePaymentMethodResponse(d),
  );
  return paymentMethods;
};

const Payment = async ({ cartToken }: Props) => {
  const cartData = fetchCart(cartToken);
  const paymentMethodData = fetchPaymentMethod(cartToken);
  const [cart, paymentMethods] = await Promise.all([
    cartData,
    paymentMethodData,
  ]);

  return (
    <div>
      <PaymentMethodsList
        cartToken={cartToken}
        paymentMethods={paymentMethods}
      />
    </div>
  );
};

export default Payment;
