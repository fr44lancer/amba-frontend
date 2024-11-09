'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledSmallGreenButton from './style';

const SmallGreenButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledSmallGreenButton {...props}>{children}</StyledSmallGreenButton>;
};

export default SmallGreenButton;
