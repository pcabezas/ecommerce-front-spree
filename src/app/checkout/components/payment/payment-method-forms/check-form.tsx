'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { PaymentMethodAttributes } from '@/app/utils/interfaces/payment-methods';
import { createPayment } from '../../../utils/request/create-payment';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { cartNextStep } from '@/app/checkout/utils/request/cart-next-step';
import { useRouter } from 'next/navigation';

interface Props {
  cartToken: CartTokenCookie;
  paymentMethod: PaymentMethodAttributes;
}

const CheckForm = ({ cartToken, paymentMethod }: Props) => {
  const router = useRouter();
  const schemaValidation = () => {
    return Yup.object({
      payment_method_id: Yup.number().required('Required'),
    });
  };

  const handleSubmit = async (values) => {
    const response = await createPayment(
      cartToken.value,
      values.payment_method_id,
    );
    const nextRes = await cartNextStep(cartToken.value);
    router.refresh();
  };

  return (
    <Formik
      initialValues={{
        payment_method_id: paymentMethod.id,
      }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation()}
    >
      <Form>
        <div>
          <ErrorMessage name="payment_method_id" component="div" />
        </div>
        <div id="my-radio-group">{paymentMethod.name}</div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default CheckForm;
