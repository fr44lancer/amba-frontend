import React, { HTMLAttributes, ReactNode } from 'react';
import StyledMainBorderedContentWrapperLg from '@/components/common/Wrappers/MainBorderedContentWrapperLg/style';

interface IMainBorderedContentWrapperLgProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const MainBorderedContentWrapperLg = ({
  children,
}: IMainBorderedContentWrapperLgProps) => {
  return (
    <StyledMainBorderedContentWrapperLg>
      {children}
    </StyledMainBorderedContentWrapperLg>
  );
};

export default MainBorderedContentWrapperLg;
