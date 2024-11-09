import { NextResponse } from 'next/server';
import Api from '@/service/api/Api';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;

    const response = await Api.get('/expert/' + slug);

    return NextResponse.json({ ...response.data });
  } catch (error: any) {
    const { status, data } = error;

    return NextResponse.json({ ...data }, { status: status });
  }
}
