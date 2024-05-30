import { BillAddressInterface } from '@/app/utils/interfaces/bill-address';

export const addCartAddress = async (
  cartToken: string,
  address: BillAddressInterface,
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
    method: 'PATCH',
    body: JSON.stringify({
      cartToken: cartToken,
      order: { bill_address_attributes: address },
    }),
  });
  return res.json();
};
