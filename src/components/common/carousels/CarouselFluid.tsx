'use client';

import { Carousel as AntCarousel } from 'antd';
import styled from 'styled-components';
import React from 'react';

const CarouselContainer = styled.div`
  &&& {
    .slick-slide {
      display: flex;
      overflow: hidden;
      margin: 16px 8px;
      border-radius: 6px;
      color: #fff;
      height: inherit !important;
    }

    .slick-list {
      overflow: hidden;
      .slick-track {
        overflow: hidden;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: start;
      }
    }

    .slick-slide > div {
      overflow: hidden;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }

    .ant-carousel .slick-dots li button {
      height: 0px;
    }

    .ant-carousel .slick-dots li {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #7d7f8b;
      margin-right: 4px;
    }

    .ant-carousel .slick-dots li.slick-active {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #1a847c;
    }
  }
`;

interface CarouselProps {
  children: React.ReactNode;
  rtl?: boolean;
}

const CarouselFluid = ({ children, rtl = false }: CarouselProps) => {
  const settings = {
    dots: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    cssEase: 'linear',
    easing: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    rtl,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 10,
          speed: 50000,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <AntCarousel {...settings}>{children}</AntCarousel>
    </CarouselContainer>
  );
};

export default CarouselFluid;
