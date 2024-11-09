'use client';

import { Col, Row } from 'antd';
import React from 'react';
import StyledBaseCollapseLabel from '@/components/common/Collapses/BaseCollapseLabel/style';
import MainParagraph from '@/components/common/Typography/Paragraphs/MainParagraph';

interface IBaseCollapseLabel {
  text: string;
}

const BaseCollapseLabel = ({ text, ...props }: IBaseCollapseLabel) => {
  return (
    <StyledBaseCollapseLabel>
      <Row className={'flex justify-start items-center risk-label w-full'}>
        <Col>
          <MainParagraph fontWeight={500} className={'text-left'}>
            {text}
          </MainParagraph>
        </Col>
      </Row>
    </StyledBaseCollapseLabel>
  );
};

export default BaseCollapseLabel;
