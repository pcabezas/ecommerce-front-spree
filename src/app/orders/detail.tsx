import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { getOrderStatus } from '../cart/utils/requests/get-order-status';
interface Props {
  cartToken: CartTokenCookie;
  orderNumber: string;
}
const fetchOrderStatus = async (
  cartToken: CartTokenCookie,
  orderNumber: string,
) => {
  const {
    response: { data: cartData },
  } = await getOrderStatus(cartToken.value, orderNumber);
  return cartData;
};

const Detail = async ({ cartToken, orderNumber }: Props) => {
  const cartData = await fetchOrderStatus(cartToken, orderNumber);
  return <div>{JSON.stringify(cartData)}</div>;
};

export default Detail;
