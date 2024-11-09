import React, { HTMLAttributes, ReactNode } from 'react';
import StyledFixedFooter from '@/components/common/Layout/FixedFooter/style';

interface IFixedFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const FixedFooter = ({ children }: IFixedFooterProps) => {
  return <StyledFixedFooter>{children}</StyledFixedFooter>;
};

export default FixedFooter;
