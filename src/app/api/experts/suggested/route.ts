import { NextRequest, NextResponse } from 'next/server';
import Api from '@/service/api/Api';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filterIds = searchParams.get('filterIds');

  try {
    const response = await Api.get(
      '/expert/filtered-experts?filterId=' + filterIds,
    );

    return NextResponse.json({ ...response.data });
  } catch (error: any) {
    const { status, data } = error;

    return NextResponse.json({ ...data }, { status: status });
  }
}
