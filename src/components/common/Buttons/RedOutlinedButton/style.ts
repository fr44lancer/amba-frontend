import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledRedOutlinedButton = styled(BaseButton)`
  --buttonPadding: var(--space1-5x) var(--space3x);
  color: var(--primaryRed);
  background-color: transparent;
  border: 1px solid var(--primaryRed) !important;
  height: 32px;
  font-weight: 500;
  span {
    font-size: var(--space2x);
    line-height: var(--space3x);
  }

  &.ant-btn-default {
    &:not(:disabled) {
      &:not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          color: var(--primaryWhite);
          background-color: var(--redBtnActiveState);
          border-color: var(--redBtnActiveState);
        }
      }
    }
  }
  &:hover,
  &:active,
  &:focus {
    color: var(--primaryWhite);
    background-color: var(--redBtnActiveState);
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

export default StyledRedOutlinedButton;
