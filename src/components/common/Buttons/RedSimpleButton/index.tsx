import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledRedSimpleButton from '@/components/common/Buttons/RedSimpleButton/style';

const RedSimpleButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledRedSimpleButton {...props}>{children}</StyledRedSimpleButton>;
};

export default RedSimpleButton;
