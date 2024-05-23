import {
  PaymentMethodAttributes,
  PaymentMethodData,
} from './interfaces/payment-methods';

export const normalizePaymentMethodResponse = (
  response: PaymentMethodData,
): PaymentMethodAttributes => {
  return {
    id: response.id,
    ...response.attributes,
  };
};
