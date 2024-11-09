'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledSmallGreenOutlinedButton from '@/components/common/Buttons/SmallGreenOutlinedButton/style';

const SmallGreenOutlinedButton = ({ children, ...props }: IBaseButtonProps) => {
  return (
    <StyledSmallGreenOutlinedButton {...props}>
      {children}
    </StyledSmallGreenOutlinedButton>
  );
};

export default SmallGreenOutlinedButton;
