import img1 from '@/assets/img/catalog/stelaj/1.jpg';
import img2 from '@/assets/img/catalog/stelaj/2.jpg';
import img3 from '@/assets/img/catalog/stelaj/3.jpg';
import img6 from '@/assets/img/catalog/stelaj/6.jpg';
import img11 from '@/assets/img/catalog/stelaj/11.jpg';
import img12 from '@/assets/img/catalog/stelaj/12.jpg';
import img13 from '@/assets/img/catalog/stelaj/13.jpg';

import { HoverImagesEffect } from '@/components/ui/hover-images';

export function ProductListSt() {
  return <HoverImagesEffect items={images} />;
}

export const images = [
  { image: img1.src },
  { image: img2.src },
  { image: img3.src },
  { image: img6.src },
  { image: img11.src },
  { image: img12.src },
  { image: img13.src },
];
