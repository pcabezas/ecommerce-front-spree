import { ShippingRateAttributes } from '@/app/utils/interfaces/shipping-rates';

interface Props {
  shippingRate: ShippingRateAttributes;
}

const DeliveryShippingRate = ({ shippingRate }: Props) => {
  return (
    <div>
      <span>{shippingRate.name}</span>
      <div>
        <span>Cost {shippingRate.display_final_price}</span>
      </div>
      <div>
        <span>Selected: {shippingRate.selected ? 'si' : 'no'}</span>
      </div>
    </div>
  );
};

export default DeliveryShippingRate;
