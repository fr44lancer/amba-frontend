import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

const StyledMain = styled(Content)`
  &.ant-layout-content {
    margin-top: var(--space7x);
  }
`;

export default StyledMain;
