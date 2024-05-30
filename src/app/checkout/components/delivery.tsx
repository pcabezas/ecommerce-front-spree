import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { getShippingRates } from '../utils/request/get-shipping-rates';
import {
  ShippingRateAttributes,
  ShippingRateData,
} from '@/app/utils/interfaces/shipping-rates';
import DeliveryForm from './delivery-form';
import { IncludedInterface } from '@/app/utils/interfaces/include';

interface Props {
  cartToken: CartTokenCookie;
}

const Delivery = async ({ cartToken }: Props) => {
  const {
    status,
    response: { data, included, ok },
  } = await getShippingRates(cartToken.value);
  let shippingRatesAttr: ShippingRateAttributes[] = [];
  if (status === 200 && ok) {
    const shippingRates = included.filter(
      (e: IncludedInterface) => e.type == 'shipping_rate',
    );
    shippingRatesAttr = shippingRates.map(
      (e: ShippingRateData) => e.attributes,
    );
  } else {
    console.error('Error getting Shipping Rates');
  }

  return (
    <div>
      <DeliveryForm
        cartToken={cartToken}
        shippingRates={shippingRatesAttr}
      ></DeliveryForm>
    </div>
  );
};

export default Delivery;
