import { OrderAttributes, PaymentAttributes } from './interfaces/order';
import { normalizePaymentResponse } from './normalize-payment-response';

export const normalizeOrder = (response): OrderAttributes => {
  const { data, included } = response;
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
    id: data.id,
    ...data.attributes,
    payments,
  };
};
