'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledSmallRedButton from '@/components/common/Buttons/SmallRedButton/style';

const SmallRedButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledSmallRedButton {...props}>{children}</StyledSmallRedButton>;
};

export default SmallRedButton;
