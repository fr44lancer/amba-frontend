'use client';

import { ReactNode } from 'react';
import StyledBaseCard from '@/components/common/Cards/BaseCard/style';
import { useRouter } from 'next/navigation';

export interface IBaseCard {
  href?: string;
  children: ReactNode;
}
const BaseCard = ({ children, href }: IBaseCard) => {
  const router = useRouter();
  const handleCardClick = (e: any) => {
    if (href) {
      router.push(href);
    }
  };

  return <StyledBaseCard onClick={handleCardClick}>{children}</StyledBaseCard>;
};

export default BaseCard;
