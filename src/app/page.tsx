import { Metadata } from 'next';
import AppPage from '@/components/common/Layout/AppPage';
import React from 'react';
import CarouselSingleTestimonial from '@/components/common/carousels/CarouselSingleTestimonial';
import img1 from '@/assets/img/hero/1.jpg';
import img2 from '@/assets/img/hero/2.jpg';
import img4 from '@/assets/img/hero/4.jpg';
import img5 from '@/assets/img/hero/5.jpg';
import FixedImage from '@/components/common/Image/FixedImage/FixedImage';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Amba',
  description: 'Amba Group',
};

export default async function HomePage() {
  return (
    <>
      <AppPage contentClassName={'no-padding'}>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            With insomnia, nothing&apos;s real. Everything is far away.
            Everything is a{' '}
            <Highlight className="text-black dark:text-white">
              պահեստային լուծումներ
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <CarouselSingleTestimonial>
          <FixedImage src={img1.src} alt={''} width={700} height={500} />
          <FixedImage src={img2.src} alt={''} width={700} height={500} />
          <FixedImage src={img4.src} alt={''} width={700} height={500} />
          <FixedImage src={img5.src} alt={''} width={700} height={500} />
          <FixedImage src={img5.src} alt={''} width={700} height={500} />
        </CarouselSingleTestimonial>
      </AppPage>
    </>
  );
}
