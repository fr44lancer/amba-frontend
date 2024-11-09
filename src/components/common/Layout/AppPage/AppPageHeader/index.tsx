'use client';

import React from 'react';
import StyledAppPageHeader from './style';
import AppTitle from '@/components/common/Typography/AppTitle';
import { Col, Row } from 'antd';

interface IAppPageHeaderProps {
  pageTitle?: string;
  backLink?: string;
}

const AppPageHeader = ({ pageTitle, backLink }: IAppPageHeaderProps) => {
  return (
    <StyledAppPageHeader>
      <Row gutter={12} align={'middle'}>
        {pageTitle && (
          <Col>
            {' '}
            <AppTitle level={1} fontWeight={'medium'} className={'mb-0'}>
              {pageTitle}
            </AppTitle>
          </Col>
        )}
      </Row>
    </StyledAppPageHeader>
  );
};

export default AppPageHeader;
