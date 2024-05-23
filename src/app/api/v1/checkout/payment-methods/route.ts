import { getPaymentMethods } from '@/app/utils/requests/storefront/get-payment-methods';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token: string = searchParams.get('cartToken')!;
  const response = await getPaymentMethods(token);
  return NextResponse.json({ response, status: 200 });
}
