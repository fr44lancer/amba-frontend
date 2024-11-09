'use client';
import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledSimpleButton from './style';

const SimpleButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledSimpleButton {...props}>{children}</StyledSimpleButton>;
};

export default SimpleButton;
