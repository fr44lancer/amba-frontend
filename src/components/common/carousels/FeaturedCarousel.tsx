'use client';

import React, { useId } from 'react';
import styled from 'styled-components';
import { Carousel as AntCarousel } from 'antd';

const CarouselContainer = styled.div`
  &&& {
    .slick-slide {
      display: flex;
      overflow: hidden;
      margin: 0 32px;
      border-radius: 4px;
      color: #fff;
      width: 150px !important;
    }

    .slick-list {
      overflow: hidden;
      scroll-behavior: smooth; /* Add smooth scrolling */
    }

    .slick-track {
      overflow: hidden;
      height: auto;
      display: flex !important;
      justify-content: center;
      align-items: center;
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
    .slick-initialized .slick-slide {
      z-index: 1;
    }

    @media (max-width: 768px) {
      .slick-slide {
        margin: 0 12px;
        width: 85px !important;
      }
    }
  }
`;

interface CarouselProps {
  children: React.ReactNode;
  rtl?: boolean;
}

const FeaturedCarousel = ({ children, rtl = false }: CarouselProps) => {
  const carouselId = useId();
  const settings = {
    dots: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: false,
    speed: 3500,
    fade: false,
    cssEase: 'linear',
    easing: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 3500,
          dots: false,
          fade: false,
          swipe: true,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <AntCarousel id={carouselId} {...settings}>
        {children}
      </AntCarousel>
    </CarouselContainer>
  );
};

export default FeaturedCarousel;
