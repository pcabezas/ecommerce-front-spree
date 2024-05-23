import { PaymentAttributes } from './interfaces/order';

export const normalizePaymentResponse = (response): PaymentAttributes => {
  return {
    id: response.id,
    ...response.attributes,
    relationships: response.relationships,
  };
};
