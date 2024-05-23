'use client';

import { PaymentMethodAttributes } from '@/app/utils/interfaces/payment-methods';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { useState } from 'react';
import CheckForm from './payment-method-forms/check-form';
import WebpayForm from './payment-method-forms/webpay-form';

interface Props {
  cartToken: CartTokenCookie;
  paymentMethods: PaymentMethodAttributes[];
}

const PaymentMethodsList = ({ cartToken, paymentMethods }: Props) => {
  const [selectedMethod, setSelectedMethod] = useState({});
  const handleChangePaymentMethod = (event) => {
    const selected = paymentMethods.find((e) => e.id == event.target.value);
    if (selected) setSelectedMethod(selected);
  };

  const defineSelecterMethodForm = () => {
    const key = selectedMethod?.name?.toLowerCase();
    switch (key) {
      case 'check':
        return (
          <CheckForm cartToken={cartToken} paymentMethod={selectedMethod} />
        );
      case 'webpay':
        return (
          <WebpayForm cartToken={cartToken} paymentMethod={selectedMethod} />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <h1>Hola Payments</h1>
      {paymentMethods.map((pm) => (
        <label key={pm.id}>
          <input
            type="radio"
            name="payment_method_id"
            value={pm.id}
            onChange={handleChangePaymentMethod}
          />
          {pm.name}
        </label>
      ))}
      {defineSelecterMethodForm()}
    </div>
  );
};

export default PaymentMethodsList;
