'use client';
import React from 'react';
import { Col, Form, Input, Row, Space, Typography } from 'antd';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import AppPage from '@/components/common/Layout/AppPage';
import BlackButton from '@/components/common/Buttons/BlackButton';

const { Title, Text } = Typography;
export const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission here
  };
  return (
    <>
      <AppPage>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
          Կապ մեզ հետ
        </Title>

        <Row gutter={[32, 32]}>
          {/* Contact Info Column */}
          <Col xs={24} md={12}>
            <Space direction="vertical" size="large">
              <div>
                <Title level={4}>Մեր Տեղեկությունները</Title>
                <Text>
                  Եթե հարցեր ունեք կամ ցանկանում եք ավելին իմանալ մեր
                  ծառայությունների մասին, խնդրում ենք կապ հաստատել մեզ հետ։
                </Text>
              </div>

              <Space direction="vertical" size="middle">
                <Text>
                  <EnvironmentOutlined /> Երևան, Խանջյան 35
                </Text>
                <Text>
                  <PhoneOutlined /> +374 60 27 17 17
                </Text>
                <Text>
                  <MailOutlined /> ambagroup1@mail.ru
                </Text>
              </Space>
            </Space>
          </Col>

          {/* Contact Form Column */}
          <Col xs={24} md={12}>
            <Form
              layout="vertical"
              onFinish={onFinish}
              style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <Form.Item
                label="Անուն"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Խնդրում ենք մուտքագրել ձեր անունը',
                  },
                ]}
              >
                <Input placeholder="Ձեր անունը" />
              </Form.Item>

              <Form.Item
                label="Էլ. հասցե"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Խնդրում ենք մուտքագրել ձեր էլ. հասցեն',
                  },
                  {
                    type: 'email',
                    message: 'Խնդրում ենք մուտքագրել վավեր էլ. հասցե',
                  },
                ]}
              >
                <Input placeholder="Ձեր էլ. հասցեն" />
              </Form.Item>

              <Form.Item
                label="Հեռախոս"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Խնդրում ենք մուտքագրել ձեր հեռախոսահամարը',
                  },
                ]}
              >
                <Input placeholder="Ձեր հեռախոսահամարը" />
              </Form.Item>

              <Form.Item
                label="Հաղորդագրություն"
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Խնդրում ենք մուտքագրել ձեր հաղորդագրությունը',
                  },
                ]}
              >
                <Input.TextArea placeholder="Ձեր հաղորդագրությունը" rows={4} />
              </Form.Item>

              <Form.Item>
                <BlackButton htmlType="submit" block>
                  Ուղարկել
                </BlackButton>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </AppPage>
    </>
  );
};

export default Contact;
