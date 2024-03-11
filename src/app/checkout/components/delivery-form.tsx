'use client';

import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { ShippingRateAttributes } from '@/app/utils/interfaces/shipping-rates';
import DeliveryShippingRate from './delivery-shipping-rate';
import { useState } from 'react';
import { addShippingMethod } from '../utils/request/add-shipping-method';
import { cartNextStep } from '../utils/request/cart-next-step';
import { useRouter } from 'next/navigation';

interface Props {
  cartToken: CartTokenCookie;
  shippingRates: ShippingRateAttributes[];
}
const DeliveryForm = ({ cartToken, shippingRates }: Props) => {
  const router = useRouter();
  const selectedShippingRate = shippingRates.find((e) => e.selected);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    selectedShippingRate.shipping_method_id,
  );

  const handleButtonSubmit = async () => {
    const res = await addShippingMethod(
      cartToken.value,
      selectedShippingMethod,
    );
    if (res.status == 200) {
      const nextRes = await cartNextStep(cartToken.value);
      console.log(nextRes);
      router.refresh();
    } else {
      console.log(res);
    }
  };

  return (
    <div>
      {shippingRates.map((e) => (
        <DeliveryShippingRate
          key={e.name}
          shippingRate={e}
        ></DeliveryShippingRate>
      ))}
      <div>
        <input type="button" onClick={handleButtonSubmit} value="continuar" />
      </div>
    </div>
  );
};

export default DeliveryForm;
