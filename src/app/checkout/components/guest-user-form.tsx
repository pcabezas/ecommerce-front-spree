'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { cartNextStep } from '../utils/request/cart-next-step';
import { addEmailToCart } from '../utils/request/add-email-cart';
import { useRouter } from 'next/navigation';

export const GuestUserForm = ({ cartToken }) => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    const res = await addEmailToCart(cartToken.value, values);
    if (res.status == 200) {
      const nextRes = await cartNextStep(cartToken.value);
      console.log(nextRes);
      router.refresh();
    } else {
      console.log(res);
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
