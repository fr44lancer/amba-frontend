'use client';

import { ReactNode } from 'react';
import StyledSection from '@/components/common/Layout/AppSection/style';

interface ISection {
  children: ReactNode;
  className?: string;
}

const AppSection = ({ children, className = '' }: ISection) => {
  return <StyledSection className={className}> {children}</StyledSection>;
};

export default AppSection;
