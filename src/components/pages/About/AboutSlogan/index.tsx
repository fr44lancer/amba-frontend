'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { Col, Row } from 'antd';

export const AboutSlogan = () => {
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
        className="text-xl px-0  font-bold text-gray-900 dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Row>
          <Col
            xs={24}
            className="text-xs md:text-2xl px-4  font-bold text-gray-900   leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Պահեստավորման Լավագույն Լուծումները
          </Col>
          <Col xs={24}>
            <Highlight className="text-xl md:text-4xl text-black dark:text-white m-2 p-4">
              AMBA GROUP-ի Հետ
            </Highlight>
          </Col>
          <Col
            xs={24}
            className="text-xs px-4  md:text-2xl font-bold text-gray-900 dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Ձեր Բիզնեսի Աճի Համար
          </Col>
        </Row>
      </motion.h1>
    </HeroHighlight>
  );
};

export default AboutSlogan;
