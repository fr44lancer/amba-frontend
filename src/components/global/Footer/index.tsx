import React from 'react';
import { Col, Layout, Row, Space, Typography } from 'antd';
import {
  EnvironmentOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link, Title } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer
      style={{ backgroundColor: '#001529', color: '#fff', padding: '40px' }}
    >
      <Row justify="space-between" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff' }}>
            AMBA Group
          </Title>
          <Text style={{ color: '#d3d3d3' }}>
            Ընկերությունը՝ մատակարարման և արդյունաբերական կառուցվածքների
            նախագծման մեջ, ապահովում է պահեստավորման լուծումներ, որոնք
            հարմարեցված են բիզնեսի կարիքներին:
          </Text>
        </Col>

        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff' }}>
            Կոնտակտային Տվյալներ
          </Title>
          <Space direction="vertical" size="small">
            <Text style={{ color: '#d3d3d3' }}>
              <EnvironmentOutlined /> Երևան, Խանջյան 35
            </Text>
            <Text style={{ color: '#d3d3d3' }}>
              <PhoneOutlined /> +374 60 27 17 17
            </Text>
            <Text style={{ color: '#d3d3d3' }}>
              <MailOutlined /> ambagroup1@mail.ru
            </Text>
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff' }}>
            Հետևեք Մեզ
          </Title>
          <Space size="middle">
            <Link href="https://facebook.com" target="_blank">
              <FacebookOutlined
                style={{ fontSize: '24px', color: '#d3d3d3' }}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <TwitterOutlined style={{ fontSize: '24px', color: '#d3d3d3' }} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedinOutlined
                style={{ fontSize: '24px', color: '#d3d3d3' }}
              />
            </Link>
          </Space>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '40px' }}>
        <Text style={{ color: '#d3d3d3' }}>
          © {new Date().getFullYear()} AMBA Group. Բոլոր իրավունքները
          պաշտպանված են:
        </Text>
      </Row>
    </Footer>
  );
};

export default AppFooter;
