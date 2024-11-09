import { createGlobalStyle } from 'styled-components';

const AntdReset = createGlobalStyle`
  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:focus-visible,
  .ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:focus-visible,
  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-title:focus-visible,
  .ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-title:focus-visible {
    outline: none!important;
  }

  .ant-menu-dark .ant-menu-item:not(.ant-menu-item-disabled):focus-visible,
 .ant-menu-dark>.ant-menu .ant-menu-item:not(.ant-menu-item-disabled):focus-visible,
  .ant-menu-dark .ant-menu-submenu-title:not(.ant-menu-item-disabled):focus-visible,
 .ant-menu-dark>.ant-menu .ant-menu-submenu-title:not(.ant-menu-item-disabled):focus-visible {
    outline: none!important;
  }
  
  textarea:hover,
  input:hover,
  textarea:focus-visible,
  input:focus-visible,
  textarea:focus,
  input:focus {
    outline: none!important;
  }

  a:focus-visible,
  button:focus-visible,
  .ant-btn:not(:disabled):focus-visible {
    outline: none!important;
  }
  
  .pricing-feature-popover-overlay {
    max-width: 220px;
  }


  .ant-form-item .ant-form-item-feedback-icon-success {
    color:var(--primaryGreen) !important;
  }

  .ant-upload-list-item-actions.picture, .ant-upload-list-item-actions.picture:hover {
    background: transparent !important;
  }
  .ant-upload-list-item-actions.picture button, .ant-upload-list-item-actions.picture button:hover {
    background: transparent !important;
  }
  


  .ant-upload-list-item-actions.picture .icon {
    color: var(--primaryGreen) !important;
  }

  .ant-progress.ant-progress-status-success .ant-progress-text {
    color: var(--primaryGreen) !important;
  }

`;

export default AntdReset;
