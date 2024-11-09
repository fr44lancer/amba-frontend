'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { Col, Row } from 'antd';

export const HomePageText = () => {
  const words = ['չափսերի', 'գույնի', 'ձևի', 'բարձրության'];
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4  font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Row>
          <Col
            xs={24}
            className="text-xl px-4  font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Բարձրակարգ պահեստային լուծումներ՝
          </Col>
          <Col xs={24}>
            <Highlight className="text-4xl text-black dark:text-white m-2 p-4">
              տարբեր չափսերի, գույնի, ձևի և բարձրության,
            </Highlight>
          </Col>
          <Col
            xs={24}
            className="text-xl px-4  font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
          >
            {' '}
            ցանկացած բիզնեսի համար:
          </Col>
        </Row>
      </motion.h1>
    </HeroHighlight>
  );
};

export default HomePageText;
