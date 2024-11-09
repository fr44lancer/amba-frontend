import { Collapse } from 'antd';
import styled from 'styled-components';

const StyledFaqCollapse = styled(Collapse)`
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 0;
  width: 100%;

  .ant-collapse-item {
    border-bottom: 1px solid #e5e7eb;
    padding: 12px;
  }

  .ant-collapse-item > .ant-collapse-header {
    padding: 12px 0px;
  }

  .ant-collapse-header-text {
    font-family: var(--notoSans);
  }
  .ant-collapse-content-box ul {
    list-style: square;
    color: var(--primaryGreen);
    padding-left: 16px;
  }

  ol li::marker,
  ul li::marker {
    color: var(--primaryGreen);
    float: left;
  }

  ol li,
  ul li {
    color: var(--primaryBlue);
    margin-bottom: 8px;
  }

  ol li p,
  ul li p {
    display: inline;
  }

  ol li strong,
  ul li strong {
    //color: var(--primaryGreen);
  }
`;

export default StyledFaqCollapse;
