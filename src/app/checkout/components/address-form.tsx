'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addCartAddress } from '../utils/request/add-cart-address';
import { cartNextStep } from '../utils/request/cart-next-step';
import { useRouter } from 'next/navigation';

export const AddressForm = ({cartToken}) => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    const res = await addCartAddress(cartToken.value, values);
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
      firstname: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      address1: Yup.string()
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
      city: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      phone: Yup.string().max(9, 'Must be 9 characters').required('Required'),
    });
  };
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        zipcode: '8150000',
        phone: '',
        state_name: '',
        alternative_phone: '',
        company: '',
        country_iso: 'CL',
      }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation()}
    >
      <Form>
        <div>
          <label>
            firstname:
            <Field type="text" name="firstname" />
          </label>
          <ErrorMessage name="firstname" component="div" />
        </div>
        <div>
          <label>
            lastname:
            <Field type="text" name="lastname" />
          </label>
          <ErrorMessage name="lastname" component="div" />
        </div>
        <div>
          <label>
            address1:
            <Field type="text" name="address1" />
          </label>
          <ErrorMessage name="address1" component="div" />
        </div>
        <div>
          <label>
            address2:
            <Field type="text" name="address2" />
          </label>
          <ErrorMessage name="address2" component="div" />
        </div>
        <div>
          <label>
            city:
            <Field type="text" name="city" />
          </label>
          <ErrorMessage name="city" component="div" />
        </div>
        <div>
          <label>
            phone:
            <Field type="text" name="phone" />
          </label>
          <ErrorMessage name="phone" component="div" />
        </div>
        <div>
          <label>
            state_name:
            <Field type="text" name="state_name" />
          </label>
          <ErrorMessage name="state_name" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
