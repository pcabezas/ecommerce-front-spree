import { CartData } from './interfaces/cart';
import { OrderAttributes, PaymentAttributes } from './interfaces/order';
import { normalizePaymentResponse } from './normalize-payment-response';

export const normalizeOrder = (response: CartData): OrderAttributes => {
  const {
    data: { id, attributes },
    included,
  } = response;
  let payments: PaymentAttributes[] = [];

  included?.forEach((value) => {
    switch (value.type) {
      case 'payment':
        payments.push(normalizePaymentResponse(value));
        break;
      default:
        break;
    }
  });

  return {
    id,
    ...attributes,
    payments: payments,
  };
};
