'use client';
import React from 'react';
import { Col, Row } from 'antd';
import HomeSlider from '@/components/global/HomeSlider';
import { HomeTestimonials } from '@/components/pages/Home/HomeTestimonials';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { HomeFeatures } from '@/components/pages/Home/HomeFeatures';

export const Home = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <HomeSlider />
      </Col>
      <Col xs={24} className={'px-8 md:px-24'}>
        <Row align={'top'} gutter={60}>
          <Col xs={24} md={18}>
            <h1 className={'font-bold text-4xl mt-4 md:mt-12'}>Կատալոգ</h1>
            <ProductList />
          </Col>
          <Col xs={24} md={6}>
            <h1 className={'font-bold text-4xl mt-12'}>Մեր մասին</h1>
            <HomeTestimonials />
          </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <HomeFeatures />
      </Col>
    </Row>
  );
};

export default Home;
