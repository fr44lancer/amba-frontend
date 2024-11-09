import React from 'react';
import { Col, MenuProps, Row } from 'antd';

interface ServicesMenuProps {
  mode: MenuProps['mode'];
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({ mode }) => {
  return (
    <Row justify={'end'}>
      <Col xs={24}>+374 95 209000</Col>
    </Row>
  );
};

export default ServicesMenu;
