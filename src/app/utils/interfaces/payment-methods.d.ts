export interface PaymentMethodData {
  id: number;
  type: string;
  attributes: PaymentMethodAttributesResponse;
}

interface PaymentMethodAttributesResponse {
  type: string;
  name: string;
  description: string;
  preferences: Preferences;
}

export interface PaymentMethodAttributes {
  id: number;
  type: string;
  name: string;
  description: string;
  preferences: Preferences;
}

interface Preferences {
  dummy_key?: string;
}
