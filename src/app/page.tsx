import { Metadata } from 'next';
import AppPage from '@/components/common/Layout/AppPage';
import React from 'react';
import CarouselSingleTestimonial from '@/components/common/carousels/CarouselSingleTestimonial';
import img1 from '@/assets/img/hero/1.jpg';
import img2 from '@/assets/img/hero/2.jpg';
import img4 from '@/assets/img/hero/4.jpg';
import img5 from '@/assets/img/hero/5.jpg';
import FixedImage from '@/components/common/Image/FixedImage/FixedImage';
import { HomePageText } from '@/components/global/HomePageText';

export const metadata: Metadata = {
  title: 'Amba',
  description: 'Amba Group',
};

export default async function HomePage() {
  return (
    <AppPage contentClassName={'no-padding'}>
      <HomePageText />
      <CarouselSingleTestimonial>
        <FixedImage src={img1.src} alt={''} width={700} height={500} />
        <FixedImage src={img2.src} alt={''} width={700} height={500} />
        <FixedImage src={img4.src} alt={''} width={700} height={500} />
        <FixedImage src={img5.src} alt={''} width={700} height={500} />
        <FixedImage src={img5.src} alt={''} width={700} height={500} />
      </CarouselSingleTestimonial>
    </AppPage>
  );
}
