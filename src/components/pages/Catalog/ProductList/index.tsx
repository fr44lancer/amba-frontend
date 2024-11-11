import img1 from '@/assets/img/catalog/pahest/1.jpg';
import img2 from '@/assets/img/catalog/pahest/2.jpg';
import img3 from '@/assets/img/catalog/pahest/3.jpg';
import img4 from '@/assets/img/catalog/pahest/4.jpg';
import img5 from '@/assets/img/catalog/pahest/5.jpg';
import img6 from '@/assets/img/catalog/pahest/6.jpg';
import img7 from '@/assets/img/catalog/pahest/7.jpg';
import img8 from '@/assets/img/catalog/pahest/8.jpg';
import img11 from '@/assets/img/catalog/pahest/11.jpg';
import img12 from '@/assets/img/catalog/pahest/12.jpg';
import img13 from '@/assets/img/catalog/pahest/13.jpg';
import img14 from '@/assets/img/catalog/pahest/14.jpg';

import { HoverImagesEffect } from '@/components/ui/hover-images';

export function ProductList() {
  return <HoverImagesEffect items={images} />;
}

export const images = [
  { image: img1.src },
  { image: img2.src },
  { image: img3.src },
  { image: img4.src },
  { image: img5.src },
  { image: img6.src },
  { image: img7.src },
  { image: img8.src },
  { image: img11.src },
  { image: img12.src },
  { image: img13.src },
  { image: img14.src },
];
