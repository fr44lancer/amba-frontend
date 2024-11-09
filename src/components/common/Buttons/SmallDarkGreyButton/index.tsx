'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledSmallDarkGreyButton from './style';

const SmallDarkGreyButton = ({ children, ...props }: IBaseButtonProps) => {
  return (
    <StyledSmallDarkGreyButton {...props}>{children}</StyledSmallDarkGreyButton>
  );
};

export default SmallDarkGreyButton;
