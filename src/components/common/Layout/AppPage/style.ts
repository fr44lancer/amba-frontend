import styled from 'styled-components';

const StyledPage = styled.div`
  --pagePadding: var(--space2x);
  --pageTitleMarginBottom: var(--space3x);
  --pageContentPadding: var(--space3x);

  padding: var(--pagePadding);
  .page-title {
    margin-bottom: var(--pageTitleMarginBottom);
  }
  .page-content {
    padding: var(--pageContentPadding);

    &.bg-white {
      border-radius: 8px;
      border: 1px solid #e5e7eb;
    }
    &.no-padding {
      padding: 0;
      &-x {
        padding-left: 0;
        padding-right: 0;
      }
      &-y {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
  @media only screen and (min-width: ${(props) =>
      props.theme.mediaSizes.DesktopXL}) {
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.DesktopXLMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.DesktopL}) {
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.DesktopLMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.DesktopM}) {
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.DesktopMMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.DesktopS}) {
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.DesktopSMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.DesktopXS}) {
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.DesktopXSMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.Tablet}) {
    --pagePadding: var(--space2x) var(--space1x);
    --pageContentPadding: var(--space3x) var(--space2x);
    .page-section {
      margin: 0;
      .title-wrapper {
        padding: 0 var(--space1x);
      }
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletMin}) and (min-width: ${(props) =>
      props.theme.mediaSizes.TabletS}) {
    --pagePadding: var(--space2x) var(--space1x);
    --pageContentPadding: var(--space3x) var(--space2x);
    .page-section {
      margin: 0;
      .title-wrapper {
        padding: 0 var(--space1x);
      }
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    --pagePadding: var(--space2x) 16px;
    --pageContentPadding: var(--space3x) 16px;
    .page-section {
      margin: 0;
      .title-wrapper {
        padding: 0 var(--space1x);
      }
    }
  }
`;

export default StyledPage;
