'use client';

import { Carousel as AntCarousel } from 'antd';
import styled from 'styled-components';
import React, { ReactNode } from 'react';

const CarouselContainer = styled.div`
  &&& {
    background: #ffffff;
    border-radius: 20px;

    .slick-dots {
      bottom: -36px;
    }
    .slick-slide {
      display: flex;
      overflow: hidden;
      margin: 0 8px;
      border-radius: 4px;
      color: #fff;
    }

    .slick-list {
      overflow: hidden;
      scroll-behavior: smooth;
    }

    .slick-track {
      overflow: hidden;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 30px;
    }

    .slick-slide > div {
      width: 100%;
      overflow: hidden;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 80px;
    }

    .slick-prev,
    .slick-next {
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: #fff;
      width: 18px;
      height: 18px;
      font-size: 18px;
      color: #1a847c;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 90;
    }

    .slick-prev:hover,
    .slick-next:hover {
      color: #26b3aa;
    }

    .slick-prev {
      left: 40px;
    }

    .slick-next {
      right: 40px;
    }

    .ant-carousel .slick-dots li button {
      height: 0px;
    }

    .ant-carousel .slick-dots li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #7d7f8b;
      margin-right: 4px;
    }

    .ant-carousel .slick-dots li.slick-active {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #1a847c;
    }

    @media (max-width: 768px) {
      .slick-track {
        padding: 0px 0px;
        justify-content: start;
        align-items: start;
      }

      .slick-slide > div {
        padding: 0px 4px;
      }

      .slick-prev,
      .slick-next {
        display: none !important;
      }
    }
  }
`;

interface CarouselProps {
  children: React.ReactNode;
  rtl?: boolean;
}

const ExpertMobileCarousel = ({ children, rtl = false }: CarouselProps) => {
  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...props
  }: {
    currentSlide?: number;
    slideCount?: number;
    children: ReactNode;
  }) => <span {...props}>{children}</span>;

  const settings = {
    dots: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    cssEase: 'linear',
    easing: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    rtl,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 150,
          dots: true,
          fade: false,
          swipe: true,
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

export default ExpertMobileCarousel;
