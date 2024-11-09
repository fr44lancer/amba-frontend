import React from 'react';
import { Menu, MenuProps } from 'antd';

interface ServicesMenuProps {
  mode: MenuProps['mode'];
}

const items1: MenuProps['items'] = [
  'Ստելաժներ',
  'Պահեստներ',
  'Սառնարաններ',
  'Աքսեսուարներ',
  'Սայլակներ',
  'Դրամարկղային\n' + '    սեղաններ\n',
].map((key) => ({
  key,
  label: `${key}`,
}));

const ServicesMenu: React.FC<ServicesMenuProps> = ({ mode }) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
      items={items1}
    />
  );
};

export default ServicesMenu;
