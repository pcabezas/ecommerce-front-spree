import { getCart } from '@/app/cart/utils/get-cart';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token: string = searchParams.get('cartToken')!;
  const data = await getCart(token);
  return NextResponse.json({ data, status: 200 });
}
