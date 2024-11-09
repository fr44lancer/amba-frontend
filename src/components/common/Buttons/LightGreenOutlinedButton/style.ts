import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledLightGreenOutlinedButton = styled(BaseButton)`
  --buttonPadding: var(--space1-5x) var(--space3x);
  color: var(--primaryGreen);
  background-color: transparent;
  &.ant-btn-default {
    font-weight: 500;
    color: var(--primaryGreen);
    border-color: var(--secondaryWhite);
    background-color: transparent;
    border: 1px solid var(--greenButtonsDisableState);
    &.ant-btn-default:not(:disabled):not(
        .ant-btn-default:not(:disabled).ant-btn-disabled
      ):hover {
      color: var(--primaryGreen);
    }
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
      &:active,
      &:hover,
      &:focus {
        color: var(--primaryGreen);
        background-color: var(--secondaryWhite);
        border-color: var(--secondaryWhite);
      }
      svg {
        path {
          fill: var(--primaryGreen);
        }
      }
    }
    &:disabled {
      color: var(--primaryLightBlue);
      background-color: transparent;
      border-color: var(--secondaryWhite);
      svg {
        path {
          fill: var(--primaryLightBlue);
        }
      }
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    width: 100%;
  }
`;

export default StyledLightGreenOutlinedButton;
