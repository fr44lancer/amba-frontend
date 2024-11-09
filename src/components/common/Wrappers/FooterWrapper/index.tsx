import React, { HTMLAttributes, ReactNode } from 'react';
import StyledFooterWrapper from '@/components/common/Wrappers/FooterWrapper/style';

interface IFooterWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const FooterWrapper = ({ children }: IFooterWrapperProps) => {
  return <StyledFooterWrapper>{children}</StyledFooterWrapper>;
};

export default FooterWrapper;
