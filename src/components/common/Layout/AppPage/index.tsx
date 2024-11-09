'use client';

import React, { ReactNode } from 'react';
import StyledPage from './style';

interface IAppPage {
  children?: ReactNode;
}

const AppPage = ({ children }: IAppPage) => {
  return <StyledPage>{children}</StyledPage>;
};

export default AppPage;
