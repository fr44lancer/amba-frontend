'use client';

import MainParagraph from '@/components/common/Typography/Paragraphs/MainParagraph';

export default function Loading() {
  return (
    <div className={'flex items-center justify-center w-full min-h-screen'}>
      <MainParagraph>Loading...</MainParagraph>
    </div>
  );
}
