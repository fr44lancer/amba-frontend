'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledGreenOutlinedButton from './style';

const GreenOutlinedButton = ({ children, ...props }: IBaseButtonProps) => {
  return (
    <StyledGreenOutlinedButton {...props}>{children}</StyledGreenOutlinedButton>
  );
};

export default GreenOutlinedButton;
