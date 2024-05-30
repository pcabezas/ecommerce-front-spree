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
    selectedShippingRate?.shipping_method_id,
  );

  const handleButtonSubmit = async () => {
    if (!selectedShippingMethod) {
      console.error('No shipping method selected');
      return;
    }
    const {
      status,
      response: { ok },
    } = await addShippingMethod(cartToken.value, selectedShippingMethod);
    if (status === 200 && ok) {
      const nextRes = await cartNextStep(cartToken.value);
      router.refresh();
    } else {
      console.log('Error adding shipping method');
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
