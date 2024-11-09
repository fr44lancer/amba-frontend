import styled from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  --guestLayoutPadding: 0 40px;

  &.ant-layout {
    background: var(--layoutBgColor);
    min-height: 100dvh;
    .app-main-layout {
      background: var(--layoutBgColor);
      z-index: 1;
    }
    &.guest-layout {
      width: 100%;
      height: 100%;
      padding: var(--guestLayoutPadding);
      border-radius: var(--space1x);
    }
    &.layout-mobile {
      .app-sidebar {
        transition: 0.4s;
        &.ant-layout-sider-has-trigger {
          padding-bottom: 0;
        }
        .ant-layout-sider-trigger {
          display: none;
        }
      }
      .app-main-layout {
        margin-left: 0;
      }
    }
  }

  @media only screen and (min-width: ${(props) =>
      props?.theme?.mediaSizes?.DesktopXS}) {
    &.guest-layout {
      padding: 0;
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    &.guest-layout {
      background: var(--primaryWhite);
      min-height: unset;
    }
  }
`;

export default StyledLayout;
