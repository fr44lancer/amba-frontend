import styled from 'styled-components';

const StyledNavbar = styled.div`
  /* Navbar */

  .navbar {
    padding-bottom: 1px;
    border-bottom: solid 1px #e8e8e8;
    background-color: white;
    box-shadow:
      0 3px 6px -2px rgba(0, 0, 0, 0.12),
      0 6px 16px -11px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    margin-bottom: 20px;
    z-index: 99990;
  }

  .nav-header {
    background-color: #f8f9f8;
    border-bottom: 0;
    padding: 0 4px 0 24px;
    margin: 0px auto;
    max-width: 1380px;
    width: 100%;
    height: 88px;
  }

  .logo {
    width: 200px;
  }

  .logo a {
    display: inline-block;
    font-size: 20px;
    text-transform: capitalize;
  }

  .navbar-menu {
    width: calc(100% - 200px);
    max-width: 1240px;
  }
  .navbar-menu .ant-layout-header {
    padding: 0 20px;
  }

  .navbar-menu .ant-menu-horizontal {
    border-bottom: 0;
  }

  .navbar-menu .ant-menu-item {
    padding-bottom: 0px;
  }

  .menuButton {
    float: right;
    height: 32px;
    padding: 0px;
    margin-top: 14px;
    display: none;
    background: none;
    margin-right: 10px;
  }

  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  .username {
    display: none;
    margin-left: 8px;
  }

  @media (max-width: 767px) {
    .nav-header {
      height: 52px;
    }

    .menuButton {
      margin-top: 0px;
      display: block;
      margin-right: 10px;
    }

    .leftMenu,
    .rightMenu {
      display: none;
    }

    .logo a {
      margin-left: -10px;
    }

    .ant-drawer-title > .brand-font {
      margin-bottom: 0;
    }

    .username {
      display: inline-block;
    }
  }

  /* Navbar End */
`;

export default StyledNavbar;
