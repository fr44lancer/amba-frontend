import { NextResponse } from 'next/server';
import Api from '@/service/api/Api';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const response = await Api.get('/expert');

    return NextResponse.json({ ...response.data });
  } catch (error: any) {
    const { status, data } = error;

    return NextResponse.json({ ...data }, { status: status });
  }
}
