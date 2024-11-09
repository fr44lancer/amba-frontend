'use client';

import React from 'react';
import { ButtonProps } from 'antd';
import StyledBaseButton from './style';

export interface IBaseButtonProps extends Omit<ButtonProps, 'icon'> {
  iconFontSize?: number;
  iconColor?: string;
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

const BaseButton = ({
  children,
  iconFontSize,
  iconColor,
  fontWeight,
  ...props
}: IBaseButtonProps) => {
  const fontWeightClassName = `font-noto-sans-${fontWeight}`;

  return (
    <StyledBaseButton
      {...props}
      className={fontWeightClassName + ' ' + props.className}
    >
      {children}
    </StyledBaseButton>
  );
};

export default BaseButton;
