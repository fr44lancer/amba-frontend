import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledRGreenSimpleButton from '@/components/common/Buttons/GreenSimpleButton/style';

const GreenSimpleButton = ({ children, ...props }: IBaseButtonProps) => {
  return (
    <StyledRGreenSimpleButton {...props}>{children}</StyledRGreenSimpleButton>
  );
};

export default GreenSimpleButton;
