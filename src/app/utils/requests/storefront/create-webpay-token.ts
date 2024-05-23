import { CartInterface } from '@/app/utils/interfaces/cart';
import { PaymentAttributes } from '../../interfaces/order';

export const createWebpayToken = async (
  cartToken: string,
  payment_id: number,
): Promise<CartInterface> => {
  const payload = {
    webpay: { payment_id },
  };
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = `/webpay/payment/init-transaction`;
  const response = await fetch(endpointDomain + action, {
    method: 'PUT',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': cartToken,
    },
    body: JSON.stringify(payload),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};
