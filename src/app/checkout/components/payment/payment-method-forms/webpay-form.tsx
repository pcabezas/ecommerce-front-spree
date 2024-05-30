'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { PaymentMethodAttributes } from '@/app/utils/interfaces/payment-methods';
import { createPayment } from '../../../utils/request/create-payment';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { cartNextStep } from '@/app/checkout/utils/request/cart-next-step';
import { useRouter } from 'next/navigation';
import { normalizeOrder } from '@/app/utils/normalize-order-response';
import { createWebpayToken } from '@/app/checkout/utils/request/create-webpay-token';

interface Props {
  cartToken: CartTokenCookie;
  paymentMethod: PaymentMethodAttributes;
}

interface FormValuesInterface {
  payment_method_id: number;
}

const WebpayForm = ({ cartToken, paymentMethod }: Props) => {
  const router = useRouter();
  const schemaValidation = () => {
    return Yup.object({
      payment_method_id: Yup.number().required('Required'),
    });
  };
  const handleSubmit = async (values: FormValuesInterface) => {
    const { status, response } = await createPayment(
      cartToken.value,
      values.payment_method_id,
    );
    if (status !== 200 || (status === 200 && !response.ok)) {
      console.error('Error on create payment', response);
      return;
    }
    const order = normalizeOrder(response);
    const payment = order.payments.find(
      (p) => p.payment_method_name === 'WebPay',
    );
    if (payment) {
      const {
        status: tokenStatus,
        response: { ok },
      } = await createWebpayToken(cartToken.value, payment.id);
      if (tokenStatus === 200 && ok) {
        const nextRes = await cartNextStep(cartToken.value);
      } else {
        console.error('Error on create webpay token', tokenStatus);
      }
    }
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

export default WebpayForm;
