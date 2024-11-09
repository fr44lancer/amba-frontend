import { Collapse } from 'antd';
import styled from 'styled-components';

const StyledAppCollapse = styled(Collapse)`
  border: 1px solid var(--primaryLightGrey);
  border-radius: 8px;
  .ant-collapse-item:not(:last-child) {
    border-bottom: 1px solid var(--primaryLightGrey);
  }

  .ant-collapse-item > .ant-collapse-header {
    padding: 12px;
    align-items: baseline;
  }

  .ant-collapse-header-text {
    font-family: var(--notoSans);
  }
`;

export default StyledAppCollapse;
