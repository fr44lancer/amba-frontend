'use client';
import React from 'react';
import { Col, Row } from 'antd';
import HomeSlider from '@/components/global/HomeSlider';
import { HomeTestimonials } from '@/components/pages/Home/HomeTestimonials';
import { HomeFeatures } from '@/components/pages/Home/HomeFeatures';
import { AppleCardsCarouselDemo } from '@/components/global/HomeServices';
import AppPage from '@/components/common/Layout/AppPage';
import { CategoryList } from '@/components/pages/Catalog/CategoryList';

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <AppPage>
        <Row gutter={[0, 24]}>
          <Col xs={24}></Col>
          <Col xs={24} md={16}>
            <h1 className={'font-bold text-4xl mt-4 md:mt-12'}>Կատալոգ</h1>
            <CategoryList />
          </Col>
          <Col xs={24} md={8}>
            <h1 className={'font-bold text-4xl mt-12'}>Մեր մասին</h1>
            <HomeTestimonials />
          </Col>
          <Col xs={24}>
            <AppleCardsCarouselDemo />
          </Col>
          <Col xs={24}>
            <HomeFeatures />
          </Col>
        </Row>
      </AppPage>
    </>
  );
};

export default Home;
