import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledGreenButton = styled(BaseButton)`
  --buttonPadding: var(--space1-5x) var(--space3x);

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
    font-size: 16px;
    line-height: 28px;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    width: 100%;
  }
`;

export default StyledGreenButton;
