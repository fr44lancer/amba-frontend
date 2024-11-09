'use client';
import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledIconButton from './style';

const IconButton = ({ ...props }: IBaseButtonProps) => {
  return <StyledIconButton {...props} />;
};

export default IconButton;
