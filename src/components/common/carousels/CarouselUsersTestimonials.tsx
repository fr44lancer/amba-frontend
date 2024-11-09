import { Carousel as AntCarousel } from 'antd';
import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { Settings } from '@ant-design/react-slick';

const CarouselContainer = styled.div`
  &&& {
    background: #ffffff;

    .slick-slide {
      display: flex;
      overflow: hidden;
    }
    .slick-list {
      display: flex;
      scroll-behavior: smooth;
    }
    .slick-track {
      display: flex;
      align-items: stretch;
      //  align-self: stretch;
      height: auto;
    }

    .slick-slide {
      display: flex !important;
      height: auto;
    }
    .slick-slide > div {
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 12px;
    }

    .slick-dots-bottom {
      bottom: -40px;
    }

    .ant-carousel {
      .slick-dots {
        li {
          width: 12px;
          height: 12px;
          background: #d1e6e5;
          border-radius: 50%;
          button {
            width: 100%;
            height: 100%;
            background: #d1e6e5;
            border-radius: 50%;
          }

          &.slick-active {
            button {
              background: #1a847c;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .slick-track {
        padding: 0 0;
        justify-content: start;
      }

      .slick-slide > div {
        padding: 0 4px;
      }

      .slick-prev,
      .slick-next {
        display: none !important;
        &:before {
          display: none !important;
        }
      }
    }
  }
`;

interface CarouselProps extends Settings {
  children: React.ReactNode;
  rtl?: boolean;
}

const CarouselUsersTestimonials = ({
  children,
  rtl = false,
}: CarouselProps) => {
  const settings = {
    dots: true,
    pauseOnHover: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    cssEase: 'linear',
    easing: 'linear',
    slidesToShow: 3,
    slidesToScroll: 3,
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

export default CarouselUsersTestimonials;
