import { BillAddressInterface } from './bill-address';
import { CartInterface } from './cart';
import CartAddItem from './cart-add-item';
import { PaymentAttributes } from './order';
import { ProductAttr } from './product';
import { ShipmentAttributes, ShippingRateAttributes } from './shipping-rates';

export interface StorefrontResponse {
  data:
    | CartInterface
    | CartAddItem
    | ProductAttr
    | ShipmentAttributes
    | ShippingRateAttributes
    | PaymentAttributes
    | BillAddressInterface
    | undefined;
  included?: Array<any>;
  ok: boolean;
}
