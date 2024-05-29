import { getProducts } from '@/app/utils/requests/storefront/get-products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const includeParams = searchParams.get('include');
  const includes = includeParams?.split(',');
  const response = await getProducts(includes);
  return NextResponse.json({ response, status: 200 });
}
