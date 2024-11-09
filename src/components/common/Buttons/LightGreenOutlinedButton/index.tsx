'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledLightGreenOutlinedButton from './style';

const LightGreenOutlinedButton = ({ children, ...props }: IBaseButtonProps) => {
  return (
    <StyledLightGreenOutlinedButton {...props}>
      {children}
    </StyledLightGreenOutlinedButton>
  );
};

export default LightGreenOutlinedButton;
