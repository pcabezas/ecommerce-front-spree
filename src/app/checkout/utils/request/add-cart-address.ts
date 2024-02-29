import { BillAddressInterface } from '@/app/utils/interfaces/bill-address';

export const addCartAddress = async (
  cartToken: string,
  address: BillAddressInterface,
) => {
  const res = await fetch(`http://0.0.0.0:3000/api/v1/checkout`, {
    method: 'PATCH',
    body: JSON.stringify({
      cartToken: cartToken,
      order: { bill_address_attributes: address },
    }),
  });
  return res.json();
};
