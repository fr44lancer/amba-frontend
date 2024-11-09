import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledGraySimpleButton from '@/components/common/Buttons/GraySimpleButton/style';

const GraySimpleButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledGraySimpleButton {...props}>{children}</StyledGraySimpleButton>;
};

export default GraySimpleButton;
