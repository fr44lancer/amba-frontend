'use client';

import { IAppLinkProps } from '@/components/common/Links/AppLink';
import StyledRedLink from '@/components/common/Links/RedLink/style';

export interface IRedLinkProps extends IAppLinkProps {}

const RedLink = ({ children, className, target, ...props }: IRedLinkProps) => {
  return (
    <StyledRedLink {...props} className={className} target={target}>
      {children}
    </StyledRedLink>
  );
};

export default RedLink;
