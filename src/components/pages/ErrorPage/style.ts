import styled from 'styled-components';

const StyledErrorPage = styled.div`
  --errorTitleFontSize: var(--space6x);
  --errorTitleLineHeight: var(--space7x);
  --errorTitleMarginRight: var(--space3x);
  --errorTitlePaddingRight: var(--space3x);
  --errorContainerPadding: 0;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 167px);
  padding: var(--errorContainerPadding);
  .error-title {
    &.app-title {
      font-size: var(--errorTitleFontSize);
      line-height: var(--errorTitleLineHeight);
      border-right: 1px solid var(--primaryBlue);
      padding-right: var(--errorTitleMarginRight);
      margin-right: var(--errorTitlePaddingRight);
      margin-bottom: 0;
      white-space: nowrap;
    }
  }
  .divider {
    padding: 0 var(--space3x);
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.TabletS}) {
    --errorTitleFontSize: var(--space5x);
    --errorTitleLineHeight: var(--space6x);
    --errorTitleMarginRight: var(--space2x);
    --errorTitlePaddingRight: var(--space2x);
    --errorContainerPadding: 0 var(--space1x);
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    --errorTitleFontSize: var(--space5x);
    --errorTitleLineHeight: var(--space6x);
    --errorTitleMarginRight: var(--space2x);
    --errorTitlePaddingRight: var(--space2x);
    --errorContainerPadding: 0 var(--space1x);
  }
`;

export default StyledErrorPage;
