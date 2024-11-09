import styled from 'styled-components';
import BaseParagraph from '@/components/common/Typography/Paragraphs/BaseParagraph';

const StyledTinyParagraph = styled(BaseParagraph)`
  && {
    color: var(--primaryBlue);
    font-size: 12px;
    line-height: 20px;
  }
`;

export default StyledTinyParagraph;
