'use client';

import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledRedButton from '@/components/common/Buttons/RedButton/style';

const RedButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledRedButton {...props}>{children}</StyledRedButton>;
};

export default RedButton;
