import styled from 'styled-components';
import { Button } from 'antd';

const StyledBaseButton = styled(Button)`
  --buttonPadding: 3px 18px;
  --buttonBorderRadius: 4px;

  &.ant-btn-default {
    &:not(:disabled) {
      &:not(&.ant-btn-disabled) {
        :hover {
          color: inherit;
          border-color: unset;
        }
      }
    }
  }

  &.ant-btn {
    height: unset;
    transition: all var(--trTime);
    transition-timing-function: unset;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: var(--buttonPadding);
    border-radius: var(--buttonBorderRadius);
    cursor: pointer;
    font-weight: 500;
    white-space: nowrap;
    &:disabled {
      pointer-events: none;
    }
    .wave-motion {
      display: none;
    }
  }

  &.ant-btn-default {
    box-shadow: none;
  }
`;

export default StyledBaseButton;
