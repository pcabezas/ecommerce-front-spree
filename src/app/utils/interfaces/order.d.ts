export interface OrderAttributes {
  id: number;
  number: string;
  item_total: string;
  total: string;
  ship_total: string;
  adjustment_total: string;
  created_at: string;
  updated_at: string;
  completed_at: string;
  included_tax_total: string;
  additional_tax_total: string;
  display_additional_tax_total: string;
  display_included_tax_total: string;
  tax_total: string;
  currency: string;
  state: string;
  token: string;
  email: string;
  display_item_total: string;
  display_ship_total: string;
  display_adjustment_total: string;
  display_tax_total: string;
  promo_total: string;
  display_promo_total: string;
  item_count: number;
  special_instructions: string;
  display_total: string;
  pre_tax_item_amount: string;
  display_pre_tax_item_amount: string;
  pre_tax_total: string;
  display_pre_tax_total: string;
  shipment_state: string;
  payment_state: string;
  public_metadata: PublicMetadata;
  payments: PaymentAttributes[] | [];
}

export interface PublicMetadata {}

export interface DAT {
  id: string;
  type: string;
}

export interface PaymentAttributes {
  id: number;
  amount: string;
  response_code: null;
  number: string;
  cvv_response_code: null;
  cvv_response_message: null;
  payment_method_id: number;
  payment_method_name: string;
  state: string;
  public_metadata: PublicMetadata;
}
