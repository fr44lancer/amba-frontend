'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledGreenButton from './style';

const GreenButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledGreenButton {...props}>{children}</StyledGreenButton>;
};

export default GreenButton;
