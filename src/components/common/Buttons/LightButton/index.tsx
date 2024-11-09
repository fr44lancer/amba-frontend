import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledLightButton from '@/components/common/Buttons/LightButton/style';

const LightButton = ({ children, ...props }: IBaseButtonProps) => {
  return <StyledLightButton {...props}>{children}</StyledLightButton>;
};

export default LightButton;
