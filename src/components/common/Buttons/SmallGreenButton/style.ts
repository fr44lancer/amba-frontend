import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledSmallGreenButton = styled(BaseButton)`
  --buttonPadding: 4px 16px;

  &.ant-btn-default {
    border: none !important;
    color: var(--primaryWhite);
    background-color: var(--primaryGreen);
    &:not(:disabled) {
      &:not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          background-color: var(--primaryActiveGreen);
          color: var(--primaryWhite);
        }
      }
    }
  }
  &.ant-btn-default,
  &.ant-btn-default {
    &.ant-btn-disabled {
      &:disabled {
        color: var(--primaryWhite);
        background-color: var(--greenButtonsDisableState);
      }
    }
    &:disabled {
      color: var(--primaryWhite);
      background-color: var(--greenButtonsDisableState);
    }
  }

  span {
    font-size: 14px;
    line-height: 22px;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    width: 100%;
  }
`;

export default StyledSmallGreenButton;
