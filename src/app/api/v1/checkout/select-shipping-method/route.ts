import { updateShippingMethod } from '@/app/utils/requests/storefront/update-checkout';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  const { cartToken, shipping_method_id } = await req.json();
  const response = await updateShippingMethod(cartToken, {
    shipping_method_id,
  });
  return NextResponse.json({ response, status: 200 });
}
