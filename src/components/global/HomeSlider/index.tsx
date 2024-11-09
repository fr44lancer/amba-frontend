'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { ImagesSlider } from '@/components/ui/images-slider';
import img1 from '@/assets/img/hero/1.jpg';
import img2 from '@/assets/img/hero/2.jpg';
import img4 from '@/assets/img/hero/4.jpg';
import HomePageText from '@/components/global/HomePageText';
import { OrderModal } from '@/components/global/OrderModal';

export const HomeSlider = () => {
  const images = [img1.src, img2.src, img4.src];
  return (
    <ImagesSlider className="h-[30rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <HomePageText />
        </motion.p>
        <OrderModal />
      </motion.div>
    </ImagesSlider>
  );
};

export default HomeSlider;
