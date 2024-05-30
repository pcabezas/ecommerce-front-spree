'use client';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addCartAddress } from '../utils/request/add-cart-address';
import { cartNextStep } from '../utils/request/cart-next-step';
import { useRouter } from 'next/navigation';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
interface Props {
  cartToken: CartTokenCookie;
}

interface AddressFormInterface {
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  city: string;
  zipcode: string;
  phone: string;
  state_name: string;
  alternative_phone: string;
  company: string;
  country_iso: string;
}

export const AddressForm = ({ cartToken }: Props) => {
  const router = useRouter();
  const handleSubmit = async (values: AddressFormInterface) => {
    const {
      status,
      response: { ok },
    } = await addCartAddress(cartToken.value, values);
    if (status === 200 && ok) {
      const nextRes = await cartNextStep(cartToken.value);
      router.refresh();
    } else {
      console.error('Error adding address');
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
