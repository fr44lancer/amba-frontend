'use client';

import type { CollapseProps } from 'antd';
import StyledFaqCollapse from '@/components/common/Collapses/FaqCollapse/style';
import AppTitle from '@/components/common/Typography/AppTitle';
import React from 'react';
import { Col, Row } from 'antd';

interface IFaqCollapse extends CollapseProps {
  title: string;
}

const FaqCollapse = ({ title, ...props }: IFaqCollapse) => {
  return (
    <div className={'w-full'}>
      <Row className={'mb-8'}>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <AppTitle level={2} className={'mt-6 mb-6'}>
            {title}
          </AppTitle>
          <StyledFaqCollapse {...props} expandIconPosition={'end'} />
        </Col>
      </Row>
    </div>
  );
};

export default FaqCollapse;
