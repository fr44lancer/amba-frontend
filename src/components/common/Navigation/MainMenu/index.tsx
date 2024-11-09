'use client'
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { isMobile } from 'react-device-detect';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Գլխավոր',
    key: 'mail',
  },
  {
    label: 'Մեր մասին',
    key: 'app',
  },
  {
    label: 'Հետադարձ կապ',
    key: 'SubMenu',
  },
];

const MainMenu: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]}   mode={
    isMobile ? 'inline' : 'horizontal'
  } items={items} />;
};

export default MainMenu;