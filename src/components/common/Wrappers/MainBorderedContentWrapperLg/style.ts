import styled from 'styled-components';

const StyledMainBorderedContentWrapperLg = styled.div`
  border-radius: 8px;
  border: 1px solid var(--primaryLightGrey);
  padding: 24px;
  background-color: var(--primaryWhite);

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export default StyledMainBorderedContentWrapperLg;
