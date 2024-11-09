import styled from 'styled-components';

const StyledBaseCard = styled.div`
  --cardMaxWidth: var(--space184x);
  background: var(--primaryWhite);
  max-width: var(--cardMaxWidth);
  width: 100%;
  border-radius: var(--space1x);
  border: 1px solid var(--primaryLightGrey);
  padding: var(--space2x);
  transition: 0.3s;
  cursor: pointer;

  .app-title {
    white-space: break-spaces;
  }

  &:hover,
  &:focus {
    border: 1px solid var(--primaryGreen);
    .app-title {
      color: var(--primaryGreen);
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    padding: 16px 12px;
  }
`;

export default StyledBaseCard;
