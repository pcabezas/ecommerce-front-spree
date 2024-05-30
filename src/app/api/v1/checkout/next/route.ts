import { nextCheckoutStep } from '@/app/utils/requests/storefront/update-checkout';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  const { cartToken } = await req.json();
  const response = await nextCheckoutStep(cartToken);
  return NextResponse.json({ response, status: 200 });
}
