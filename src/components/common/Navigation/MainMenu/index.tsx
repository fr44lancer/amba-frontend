import React from 'react';
import { Menu, MenuProps } from 'antd';

interface MainMenuProps {
  mode: MenuProps['mode'];
}

const MainMenu: React.FC<MainMenuProps> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="explore">Գլխավոր</Menu.Item>
      <Menu.Item key="features">Մեր մասին</Menu.Item>
      <Menu.Item key="about">Կատալոգ</Menu.Item>
      <Menu.Item key="about">Ծառայություններ</Menu.Item>
      <Menu.Item key="contact">Հետադարձ կապ</Menu.Item>
    </Menu>
  );
};

export default MainMenu;
