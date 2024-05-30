'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { cartNextStep } from '../utils/request/cart-next-step';
import { addEmailToCart } from '../utils/request/add-email-cart';
import { useRouter } from 'next/navigation';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
interface Props {
  cartToken: CartTokenCookie;
}

interface GuestUserFormInterface {
  email: string;
}

export const GuestUserForm = ({ cartToken }: Props) => {
  const router = useRouter();

  const handleSubmit = async (values: GuestUserFormInterface) => {
    const {
      status,
      response: { ok },
    } = await addEmailToCart(cartToken.value, values);
    if (status === 200 && ok) {
      const nextRes = await cartNextStep(cartToken.value);
      router.refresh();
    } else {
      console.error('Error adding email to cart');
    }
  };

  const schemaValidation = () => {
    return Yup.object({
      email: Yup.string().email().required('handleSubmitRequired'),
    });
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation()}
    >
      <Form>
        <div>
          <label>
            email:
            <Field type="text" name="email" />
          </label>
          <ErrorMessage name="email" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
