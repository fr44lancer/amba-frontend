import styled from 'styled-components';

const StyledEmptyState = styled.div`
  --emptyStateWidth: var(--space72x);
  &.empty-state {
    padding-top: var(--space10x);
    max-width: var(--emptyStateWidth);
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .filter-icon {
      color: var(--primaryBlue);
      margin-bottom: var(--space2x);
    }
    .empty-state-title {
      margin: 0;
    }

    .btns-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .link-item {
        margin-right: var(--space2x);
      }
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    &.empty-state {
      .filter-icon {
        margin-bottom: 0;
        width: var(--space3-5x);
        height: var(--space3-5x);
      }
      .empty-state-title {
        margin-bottom: 0;
      }

      .btns-wrapper {
        flex-direction: column;
        .link-item {
          margin-right: 0;
          margin-bottom: 16px;
        }
      }
    }
  }
`;

export default StyledEmptyState;
