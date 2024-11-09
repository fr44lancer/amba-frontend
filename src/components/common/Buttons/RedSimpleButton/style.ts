import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledRedSimpleButton = styled(BaseButton)`
  &.ant-btn {
    color: var(--secondaryRed);
    font-size: var(--space2x);
    line-height: 28px;
    background-color: transparent;
    padding: unset;
    height: unset;
    border: unset;

    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
      svg {
        path {
          fill: var(--secondaryRed);
        }
      }

      &:active,
      &:hover,
      &:focus {
        background: transparent;
        color: var(--redBtnActiveState);
        svg {
          path {
            fill: var(--redBtnActiveState);
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

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
  }
`;

export default StyledRedSimpleButton;
