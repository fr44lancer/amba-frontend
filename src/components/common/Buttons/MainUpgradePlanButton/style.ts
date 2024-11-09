import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledMainUpgradePlanButton = styled(BaseButton)`
  --buttonPadding: 4px 16px;
  --buttonBorderRadius: 4px;

  color: white;
  font-size: var(--space2x);
  line-height: 28px;

  padding: var(--buttonPadding);
  border-radius: var(--buttonBorderRadius);
  border: unset;
  &.ant-btn {
    &.orange {
      height: var(--space4x);
      --buttonPadding: 4px 16px;
      background-color: var(--primaryRed);
      .ant-btn-icon {
        span {
          display: inline-block;
          height: 14px;
        }
        & + span {
          font-size: 14px;
          line-height: 22px;
        }
      }

      &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          background-color: var(--redBtnActiveState);
          color: var(--primaryWhite);
        }

        &:disabled {
          background-color: var(--redBtnDisableState);
        }
      }
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
  }
`;

export default StyledMainUpgradePlanButton;
