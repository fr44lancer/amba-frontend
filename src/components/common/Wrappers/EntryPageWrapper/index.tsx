'use client';

import React, { HTMLAttributes, ReactNode } from 'react';
import StyledEntryPageWrapper from './style';

interface IEntryPageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const EntryPageWrapper = ({ children }: IEntryPageWrapperProps) => {
  return <StyledEntryPageWrapper>{children}</StyledEntryPageWrapper>;
};

export default EntryPageWrapper;
