import styled from 'styled-components';
import BaseParagraph from '@/components/common/Typography/Paragraphs/BaseParagraph';

const StyledSmallParagraph = styled(BaseParagraph)`
  && {
    color: var(--primaryBlue);
    font-size: 14px;
    line-height: 22px;
  }
`;

export default StyledSmallParagraph;
