'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledBlackButton from './style';

const BlackButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledBlackButton {...props}>{children}</StyledBlackButton>;
};

export default BlackButton;
