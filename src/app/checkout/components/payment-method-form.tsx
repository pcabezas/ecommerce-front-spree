'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { PaymentMethodAttributes } from '@/app/utils/interfaces/payment-methods';
import { createPayment } from '../utils/request/create-payment';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';

interface Props {
  cartToken: CartTokenCookie;
  paymentMethods: PaymentMethodAttributes[];
}

const PaymentMethodForm = ({ cartToken, paymentMethods }: Props) => {
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
  };

  return (
    <Formik
      initialValues={{
        payment_method_id: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation()}
    >
      <Form>
        <div>
          <ErrorMessage name="payment_method_id" component="div" />
        </div>
        <div id="my-radio-group">Picked</div>
        <div role="group" aria-labelledby="my-radio-group">
          {paymentMethods.map((pm) => (
            <label key={pm.id}>
              <Field type="radio" name="payment_method_id" value={pm.id} />
              {pm.name}
            </label>
          ))}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default PaymentMethodForm;
