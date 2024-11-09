import styled from 'styled-components';
import BaseParagraph from '@/components/common/Typography/Paragraphs/BaseParagraph';

const StyledMainParagraph = styled(BaseParagraph)`
  && {
    color: var(--primaryBlue);
    font-size: 16px;
    line-height: 24px;
  }
`;

export default StyledMainParagraph;
