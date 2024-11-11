'use client';
import React, { useState } from 'react';
import { Button, Col, Drawer, Layout, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import MainMenu from '@/components/common/Navigation/MainMenu';
import StyledNavbar from '@/components/common/Navigation/Navbar/style';
import logo from '@/assets/img/logo.png';
import FixedImage from '@/components/common/Image/FixedImage/FixedImage';
import NextLink from 'next/link';
import ContactsBar from '@/components/common/Navigation/ContactsBar';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <StyledNavbar className="navbar">
      <Layout.Header className="nav-header pt-2">
        <Row justify={'space-between'} align={'middle'}>
          <Col xs={8} md={2}>
            <NextLink href={'/'}>
              <FixedImage src={logo.src} alt={''} width={80} height={32} />
            </NextLink>
          </Col>
          <Col xs={12} className="navbar-menu">
            <div className="leftMenu">
              <MainMenu mode="horizontal" />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined size={32} />
            </Button>
          </Col>
          <Col xs={6}>
            <ContactsBar />
          </Col>
        </Row>
      </Layout.Header>

      <Drawer
        title="Amba Group"
        placement="right"
        closable={true}
        onClose={showDrawer}
        open={visible}
        width={280}
        style={{ zIndex: 99999 }}
      >
        <Row justify={'center'}>
          <Col xs={24}>
            <MainMenu mode={'inline'} />
          </Col>
          <Col xs={24}>
            <ContactsBar />
          </Col>
        </Row>
      </Drawer>
    </StyledNavbar>
  );
};

export default Navbar;
