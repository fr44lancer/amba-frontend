import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledSmallGreenOutlinedButton = styled(BaseButton)`
  --buttonPadding: 4px 16px;
  color: var(--primaryGreen);
  background-color: transparent;
  border: 1px solid var(--primaryGreen) !important;
  &.ant-btn-default {
    svg {
      path {
        fill: var(--primaryGreen);
      }
    }

    &:not(:disabled) {
      &:not(.ant-btn-disabled) {
        &:hover,
        &:active,
        &:focus {
          color: var(--primaryWhite);
          background-color: var(--primaryGreen);
          border-color: var(--primaryGreen);
        }
      }
    }
  }

  &:hover,
  &:active,
  &:focus {
    color: var(--primaryWhite);
    background-color: var(--primaryGreen);

    svg {
      path {
        fill: var(--primaryWhite);
      }
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

export default StyledSmallGreenOutlinedButton;
