import { getCart } from '@/app/utils/requests/storefront/get-cart';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token: string = searchParams.get('cartToken')!;
  const includeParams = searchParams.get('include');
  const includes = includeParams?.split(',');
  const response = await getCart(token, includes);
  return NextResponse.json({ response, status: 200 });
}
