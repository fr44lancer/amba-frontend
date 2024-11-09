'use client';

import type { CollapseProps } from 'antd';
import StyledBaseCollapse from '@/components/common/Collapses/BaseCollapse/style';

interface IBaseCollapse extends CollapseProps {}

const BaseCollapse = ({ ...props }: IBaseCollapse) => {
  return <StyledBaseCollapse {...props} />;
};

export default BaseCollapse;
