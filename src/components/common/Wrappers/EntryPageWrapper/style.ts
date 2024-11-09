import styled from 'styled-components';

const StyledEntryPageWrapper = styled.div`
  min-height: calc(100dvh - 168px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 64px;
    align-items: flex-start;
  }
`;

export default StyledEntryPageWrapper;
