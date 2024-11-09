import styled from 'styled-components';

const StyledTitle = styled.div`
  .ant-typography {
    color: var(--primaryBlue);
    &.h1 {
      font-size: var(--h1);
      line-height: var(--lineHeightH1);
    }
    &.h2 {
      font-size: var(--h2);
      line-height: var(--lineHeightH2);
    }
    &.h3 {
      font-size: var(--h3);
      line-height: var(--lineHeightH3);
    }
    &.h4 {
      font-size: var(--h4);
      line-height: var(--lineHeightH4);
    }

    &.green {
      color: var(--primaryGreen);
    }
  }
`;

export default StyledTitle;
