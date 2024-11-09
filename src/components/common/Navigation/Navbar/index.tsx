'use client';
import React, { useState } from 'react';
import { Button, Col, Drawer, Layout, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import MainMenu from '@/components/common/Navigation/MainMenu';
import ServicesMenu from '@/components/common/Navigation/ServicesMenu';
import StyledNavbar from '@/components/common/Navigation/Navbar/style';
import logo from '@/assets/img/logo.png';
import FixedImage from '@/components/common/Image/FixedImage/FixedImage';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <StyledNavbar className="navbar">
      <Layout>
        <Layout.Header className="nav-header p-2">
          <Row justify={'space-between'} align={'middle'}>
            <Col xs={8} md={2}>
              <FixedImage src={logo.src} alt={''} width={80} height={32} />
            </Col>
            <Col xs={16} className="navbar-menu">
              <div className="leftMenu">
                <MainMenu mode="horizontal" />
              </div>
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>

              <Drawer
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <MainMenu mode={'inline'} />
                <ServicesMenu mode={'inline'} />
              </Drawer>
            </Col>
            <Col xs={4}>
              <div className="rightMenu">
                <ServicesMenu mode={'horizontal'} />
              </div>
            </Col>
          </Row>
        </Layout.Header>
      </Layout>
    </StyledNavbar>
  );
};

export default Navbar;
