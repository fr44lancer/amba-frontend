'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledRedOutlinedButton from '@/components/common/Buttons/RedOutlinedButton/style';

const RedOutlinedButton = ({ children, ...props }: IBaseButtonProps) => {
  return (
    <StyledRedOutlinedButton {...props}>{children}</StyledRedOutlinedButton>
  );
};

export default RedOutlinedButton;
