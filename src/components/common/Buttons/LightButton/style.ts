import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledLightButton = styled(BaseButton)`
  && {
    --buttonPadding: var(--space1-5x) var(--space3x);
    color: var(--primaryBlue);
    background-color: transparent;
    &.ant-btn-default {
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      color: var(--primaryBlue);
      background-color: #f3f3f3;
      border: 1px solid var(--primaryLightGrey);
      &.ant-btn-default:not(:disabled):not(
          .ant-btn-default:not(:disabled).ant-btn-disabled
        ):hover {
        color: var(--primaryBlue);
      }
      &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          color: var(--primaryBlue);
          background: var(--primaryLightGrey);
          border-color: #e5e7eb;
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
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    width: 100%;
  }
`;

export default StyledLightButton;
