'use client';

import React, { HTMLAttributes, ReactNode } from 'react';
import StyledAIContentWrapper from '@/components/common/Wrappers/AIContentWrapper/style';

interface IAIContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const AIContentWrapper = ({ children }: IAIContentWrapperProps) => {
  return <StyledAIContentWrapper>{children}</StyledAIContentWrapper>;
};

export default AIContentWrapper;
