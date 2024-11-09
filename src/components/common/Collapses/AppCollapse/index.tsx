'use client';

import type { CollapseProps } from 'antd';
import StyledAppCollapse from '@/components/common/Collapses/AppCollapse/style';

interface IAppCollapse extends CollapseProps {}

const AppCollapse = ({ ...props }: IAppCollapse) => {
  return <StyledAppCollapse {...props} expandIconPosition={'end'} />;
};

export default AppCollapse;
