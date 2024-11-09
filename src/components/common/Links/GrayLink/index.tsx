'use client';

import { IAppLinkProps } from '@/components/common/Links/AppLink';
import StyledGrayLink from '@/components/common/Links/GrayLink/style';

export interface IGrayLinkProps extends IAppLinkProps {}

const GrayLink = ({
  children,
  className,
  target,
  ...props
}: IGrayLinkProps) => {
  return (
    <StyledGrayLink {...props} className={className} target={target}>
      {children}
    </StyledGrayLink>
  );
};

export default GrayLink;
