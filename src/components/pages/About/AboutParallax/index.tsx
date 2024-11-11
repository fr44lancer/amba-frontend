'use client';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';
import img1 from '@/assets/img/about/a1.jpg';
import img2 from '@/assets/img/about/a2.jpg';
import img3 from '@/assets/img/about/a3.jpg';
import img4 from '@/assets/img/about/a4.jpg';
import img5 from '@/assets/img/about/a5.jpg';
import img6 from '@/assets/img/about/a6.jpg';

export function AboutParallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: 'Moonbeam',
    link: '#',
    thumbnail: img1.src,
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: img2.src,
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: img3.src,
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: img4.src,
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: img5.src,
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: img6.src,
  },

  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: img1.src,
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: img2.src,
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: img3.src,
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: img4.src,
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: img5.src,
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: img6.src,
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: img3.src,
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: img4.src,
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: img5.src,
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: img6.src,
  },
];
