import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { getShippingRates } from '../utils/request/get-shipping-rates';
import { ShippingRateAttributes } from '@/app/utils/interfaces/shipping-rates';
import DeliveryShippingRate from './delivery-shipping-rate';
import DeliveryForm from './delivery-form';

interface Props {
  cartToken: CartTokenCookie;
}
const Delivery = async ({ cartToken }: Props) => {
  const {
    response: { included },
  } = await getShippingRates(cartToken.value);
  const shippingRates = included.filter((e) => e.type == 'shipping_rate');
  const shippingRatesAttr: ShippingRateAttributes[] = shippingRates.map(
    (e) => e.attributes,
  );

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
