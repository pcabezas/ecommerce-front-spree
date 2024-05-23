import { getOrderStatus } from '@/app/utils/requests/storefront/get-order-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token: string = searchParams.get('cartToken')!;
  const orderNumber: string = searchParams.get('orderNumber')!;
  const { data, included } = await getOrderStatus(token, orderNumber, [
    'payments',
  ]);
  const response = { data, included };
  return NextResponse.json({ response, status: 200 });
}
