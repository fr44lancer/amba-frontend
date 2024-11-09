'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledSmallGreyButton from './style';

const SmallGreyButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledSmallGreyButton {...props}>{children}</StyledSmallGreyButton>;
};

export default SmallGreyButton;
