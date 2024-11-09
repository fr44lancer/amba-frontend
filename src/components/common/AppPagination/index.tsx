'use client';

import StyledPagination from '@/components/common/AppPagination/style';
import { PaginationProps } from 'antd';

interface IPagination extends PaginationProps {}

const AppPagination = ({ ...props }: IPagination) => {
  return <StyledPagination {...props} />;
};

export default AppPagination;
