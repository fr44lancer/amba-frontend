'use client';
import React from 'react';
import { Col, Row } from 'antd';
import AppPage from '@/components/common/Layout/AppPage';
import { AboutParallax } from '@/components/pages/About/AboutParallax';

export const AboutUs = () => {
  return (
    <>
      <AppPage>
        <Row gutter={[0, 24]}>
          <Col xs={24} md={24}>
            <AboutParallax />
          </Col>
        </Row>
      </AppPage>
    </>
  );
};

export default AboutUs;
