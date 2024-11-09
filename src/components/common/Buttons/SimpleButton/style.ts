import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledSimpleButton = styled(BaseButton)`
  --buttonPadding: 4px 16px;
  --buttonBorderRadius: 4px;

  color: white;
  font-size: var(--space2x);
  line-height: 28px;

  padding: var(--buttonPadding);
  border-radius: var(--buttonBorderRadius);
  border: unset;
  &.ant-btn {
    font-size: var(--space2x);
    line-height: var(--space3x);
    border: unset;
    font-weight: 500;
    --buttonPadding: 0;
    color: var(--primaryBlue);
    background-color: transparent;
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
      border: unset;

      svg {
        path {
          fill: var(--primaryBlue);
        }
      }

      &:active,
      &:hover,
      &:focus {
        color: var(--primaryGreen);
        background: transparent;
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

export default StyledSimpleButton;
