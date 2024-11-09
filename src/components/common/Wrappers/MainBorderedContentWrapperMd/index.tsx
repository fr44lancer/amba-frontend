import React, { HTMLAttributes, ReactNode } from 'react';
import StyledMainBorderedContentWrapperMd from '@/components/common/Wrappers/MainBorderedContentWrapperMd/style';

interface IMainBorderedContentWrapperMdProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const MainBorderedContentWrapperMd = ({
  children,
}: IMainBorderedContentWrapperMdProps) => {
  return (
    <StyledMainBorderedContentWrapperMd>
      {children}
    </StyledMainBorderedContentWrapperMd>
  );
};

export default MainBorderedContentWrapperMd;
