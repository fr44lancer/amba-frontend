import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledBlackButton = styled(BaseButton)`
  border: none !important;
  --buttonPadding: var(--space1-5x) var(--space3x);

  border: unset;
  &.ant-btn-default {
    color: var(--primaryWhite);
    background-color: var(--primaryBlue);
    &:not(:disabled) {
      &:not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          background-color: var(--primaryActiveBlue);
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
        background-color: var(--primaryLightBlue);
      }
    }
    &:disabled {
      color: var(--primaryWhite);
      background-color: var(--primaryLightBlue);
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

export default StyledBlackButton;
