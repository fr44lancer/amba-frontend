import { Carousel as AntCarousel } from 'antd';
import styled from 'styled-components';
import React from "react";

const CarouselContainer = styled.div`
  .slick-slide {
    display: flex;     
    overflow: hidden;
    margin: 0 8px;
    border-radius: 4px;
    color: #fff;
  }

  .slick-list {
    overflow: hidden;
    scroll-behavior: smooth; /* Add smooth scrolling */
  }
  
  .slick-track  {
    overflow: hidden;
    height: auto;
    display: flex;
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

 
`;

interface CarouselProps {
    children: React.ReactNode;
    rtl?: boolean;
}

const CarouselImages = ({ children, rtl = false }: CarouselProps) => {
    const settings = {
        dots: false,
        pauseOnHover: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        cssEase:'linear',
        easing: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        rtl
    };

    return (
        <CarouselContainer >
            <AntCarousel {...settings}>{children}</AntCarousel>
        </CarouselContainer>
    );
};

export default CarouselImages;
