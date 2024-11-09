import { ReactNode } from 'react';
import StyledMain from '@/components/common/Layout/AppMain/style';

interface IAppMain {
  children?: ReactNode;
}
const AppMain = ({ children }: IAppMain) => {
  return <StyledMain>{children}</StyledMain>;
};

export default AppMain;
