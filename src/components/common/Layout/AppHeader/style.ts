import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  --headerHeight: var(--space7x);
  --headerPadding: 12px 8px 12px 0;
  --headerBgColor: #f8f9f8;

  .dashboard-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .app-text {
      color: var(--primaryBlue);
      font-weight: 500;
    }

    &:hover {
      .ant-typography {
        color: var(--primaryGreen);
      }

      .home-button {
        background-color: var(--primaryGreen);
        .icon {
          color: var(--primaryWhite);
        }
      }
    }

    .home-button {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      background: #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--primaryGreen);
        .icon {
          color: var(--primaryWhite);
        }
      }
    }
  }

  &.ant-layout-header {
    height: var(--headerHeight);
    background: var(--primaryWhite);
    padding: var(--headerPadding);
    border-bottom: 1px solid var(--primaryGrey);
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: 900;
    background: var(--headerBgColor);
    .content-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .orange {
        margin-right: var(--space1-5x);
      }
      .bell-icon-btn {
        background: transparent;
        border: unset;
        padding: 0;
        width: 21px;
        height: 24px;
        margin-right: var(--space2-5x);
        svg {
          width: 100%;
          height: 100%;
          color: var(--secondaryBlue);
        }
      }
      .ant-badge {
        margin-right: var(--space1x);
      }
      .user-avatar {
        background: transparent;
        svg {
          color: var(--secondaryBlue);
        }
      }
    }
  }
`;

export default StyledHeader;
