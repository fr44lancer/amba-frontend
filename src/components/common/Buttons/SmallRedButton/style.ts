import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledSmallRedButton = styled(BaseButton)`
  color: var(--primaryWhite);
  border: 1px solid var(--brightRedColor);

  --buttonPadding: var(--space0-5x) var(--space2x);
  background-color: var(--brightRedColor);
  font-size: calc(var(--space2x) - 2px);
  line-height: calc(var(--space3x) - 2px);
  &.ant-btn-default {
    &:not(:disabled) {
      &:not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          border: 1px solid var(--redBtnActiveState);
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
        border: 1px solid var(--redBtnDisableState);
        color: var(--primaryWhite);
        background-color: var(--redBtnDisableState);
      }
    }
    &:disabled {
      border: 1px solid var(--redBtnDisableState);
      color: var(--primaryWhite);
      background-color: var(--redBtnDisableState);
    }
  }

  //span {
  //}

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    width: 100%;
  }
`;

export default StyledSmallRedButton;
