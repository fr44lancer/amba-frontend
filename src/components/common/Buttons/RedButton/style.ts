import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledRedButton = styled(BaseButton)`
  color: var(--primaryWhite);
  border: none !important;

  --buttonPadding: var(--space1-5x) var(--space3x);
  background-color: var(--primaryRed);
  &.ant-btn-default {
    &:not(:disabled) {
      &:not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          background-color: var(--redBtnActiveState);
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
        background-color: var(--redBtnDisableState);
      }
    }
    &:disabled {
      color: var(--primaryWhite);
      background-color: var(--redBtnDisableState);
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

export default StyledRedButton;
