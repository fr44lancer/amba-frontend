import { DrawerProps } from 'antd';
import StyledAppDrawer from './style';

const AppDrawer = ({ ...props }: DrawerProps) => {
  return <StyledAppDrawer {...props} />;
};

export default AppDrawer;
