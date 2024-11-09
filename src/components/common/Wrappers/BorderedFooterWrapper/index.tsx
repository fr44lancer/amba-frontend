import React, { HTMLAttributes, ReactNode } from 'react';
import StyledBorderedFooterWrapper from '@/components/common/Wrappers/BorderedFooterWrapper/style';

interface IBorderedFooterWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const BorderedFooterWrapper = ({ children }: IBorderedFooterWrapperProps) => {
  return <StyledBorderedFooterWrapper>{children}</StyledBorderedFooterWrapper>;
};

export default BorderedFooterWrapper;
