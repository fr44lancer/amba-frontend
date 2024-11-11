import React from 'react';
import { Menu, MenuProps } from 'antd';
import NextLink from 'next/link';

interface MainMenuProps {
  mode: MenuProps['mode'];
}

const MainMenu: React.FC<MainMenuProps> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="explore">
        <NextLink href={'/'}>Գլխավոր</NextLink>
      </Menu.Item>
      <Menu.Item key="features">
        <NextLink href={'/about-us'}>Մեր մասին</NextLink>
      </Menu.Item>
      <Menu.Item key="about">
        <NextLink href={'/catalog'}>Տեսականի</NextLink>
      </Menu.Item>
      <Menu.Item key="services">Ծառայություններ</Menu.Item>
      <Menu.Item key="contact">
        {' '}
        <NextLink href={'/contact'}>Հետադարձ կապ</NextLink>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
