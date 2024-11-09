import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledGraySimpleButton = styled(BaseButton)`
  &.ant-btn {
    color: var(--secondaryBlue);
    font-size: var(--space2x);
    line-height: 28px;
    background-color: transparent;
    padding: unset;
    height: unset;
    border: unset;

    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
      svg {
        path {
          fill: var(--secondaryBlue);
        }
      }

      &:active,
      &:hover {
        background: transparent;
        color: var(--primaryGreen);
        svg {
          path {
            fill: var(--primaryGreen);
          }
        }
      }
    }
    &:disabled {
      color: var(--secondaryBlue);
      background: unset;
      svg {
        path {
          fill: var(--secondaryBlue);
        }
      }
    }
  }
`;

export default StyledGraySimpleButton;
