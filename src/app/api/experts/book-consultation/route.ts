import { NextResponse } from 'next/server';
import Api from '@/service/api/Api';
import { IBookConsultationForm } from '@/types/interfaces';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const bookConsultationFormData: IBookConsultationForm =
      await request.json();

    const response = await Api.post(
      '/expert/book-consultation',
      bookConsultationFormData,
    );

    return NextResponse.json({ ...response.data });
  } catch (error: any) {
    const { status, data } = error;

    return NextResponse.json({ ...data }, { status: status });
  }
}
