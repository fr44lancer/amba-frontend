import React from 'react';
import { Col, Row } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { OrderModal } from '@/components/global/OrderModal';

interface ServicesMenuProps {
  mode?: 'vertical' | 'horizontal' | 'inline';
}

const ContactsBar: React.FC<ServicesMenuProps> = ({ mode }) => {
  return (
    <Row gutter={[8, 24]}>
      <Col xs={24} md={12} className={'text-center mt-24 md:mt-0'}>
        <PhoneOutlined style={{ marginRight: 8 }} />
        +374 95 209000
      </Col>
      <Col xs={24} md={12} className={'flex align-middle justify-center'}>
        <OrderModal />
      </Col>
    </Row>
  );
};

export default ContactsBar;
