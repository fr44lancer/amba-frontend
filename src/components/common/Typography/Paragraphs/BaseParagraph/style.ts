import styled from 'styled-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const StyledBaseParagraph = styled(Paragraph)`
  && {
    margin-bottom: 0;
  }
`;

export default StyledBaseParagraph;
