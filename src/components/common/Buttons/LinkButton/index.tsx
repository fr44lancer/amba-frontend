'use client';
import React from 'react';
import { IBaseButtonProps } from '../BaseButton';
import StyledLinkButton from '@/components/common/Buttons/LinkButton/style';

interface ILinkButton extends IBaseButtonProps {
  className?: string;
  href?: string;
  target?: string;
}

const LinkButton = ({
  children,
  onClick,
  className,
  href,
  target,
  disabled,
  fontWeight,
}: ILinkButton) => {
  return (
    <StyledLinkButton
      className={`link-item ${className || ''} ${disabled ? 'disabled' : ''} 
        font-noto-sans${fontWeight ? '-' + fontWeight : ''}
        `}
      onClick={onClick}
      target={target}
      href={href || ''}
    >
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;
