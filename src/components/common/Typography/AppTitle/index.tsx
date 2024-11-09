'use client';

import { ReactNode } from 'react';
import { Typography } from 'antd';
import StyledTitle from './style';

const { Title } = Typography;

interface IAppTitle {
  level?: 1 | 2 | 3 | 4 | 5;
  children?: ReactNode;
  className?: string;
  fontWeight?: 'medium' | 'semibold';
}

const AppTitle = ({
  level,
  children,
  className,
  fontWeight = 'medium',
}: IAppTitle) => {
  return (
    <StyledTitle>
      <Title
        className={`app-title font-noto-sans${
          fontWeight ? '-' + fontWeight : ''
        } ${className || ''} h${level}`}
        level={level}
      >
        {children}
      </Title>
    </StyledTitle>
  );
};

export default AppTitle;
