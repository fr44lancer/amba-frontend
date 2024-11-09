'use client';

import StyledLink from '@/components/common/Links/AppLink/style';
import { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

export type IAppLinkProps = {
  children?: ReactNode;
  className?: string;
  target?: string;
} & LinkProps;

const AppLink = ({ children, className, target, ...props }: IAppLinkProps) => {
  return (
    <StyledLink {...props} className={className} target={target}>
      {children}
    </StyledLink>
  );
};

export default AppLink;
