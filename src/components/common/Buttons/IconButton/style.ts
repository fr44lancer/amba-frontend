import styled from 'styled-components';
import BaseButton from '@/components/common/Buttons/BaseButton';

const StyledIconButton = styled(BaseButton)`
  && {
    --buttonPadding: 4px 16px;
    --buttonBorderRadius: 4px;

    font-size: 14px;
    padding: var(--buttonPadding);
    border-radius: var(--buttonBorderRadius);
    border: unset;
    &.ant-btn {
      &.primaryBlue {
        font-weight: 500;
        --buttonPadding: 8px 16px;
        background-color: var(--primaryBlue);
        &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
          &:active,
          &:hover,
          &:focus {
            background-color: var(--primaryActiveBlue);
            color: var(--primaryWhite);
          }
          &:disabled {
            background-color: var(--primaryLightBlue);
          }
          svg {
            color: var(--primaryWhite);
          }
        }
      }

      &.primaryGreen {
        font-weight: 500;
        --buttonPadding: 8px 16px;
        background-color: var(--primaryGreen);
        &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
          &:active,
          &:hover,
          &:focus {
            background-color: var(--primaryActiveGreen);
            color: var(--primaryWhite);
          }
          &:disabled {
            background-color: var(--primaryGreen);
          }
          svg {
            color: var(--primaryWhite);
          }
        }
      }

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
        &.md {
          height: var(--space5x);
          --buttonPadding: var(--space1x) var(--space2x);
          .ant-btn-icon {
            & + span {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
        &.solid {
          border: unset;
          border-color: unset;
          background: unset;
          color: var(--primaryRed);
          .icon {
            color: var(--primaryRed);
          }
          &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
            &:active,
            &:hover,
            &:focus {
              background: unset;
              color: var(--redBtnActiveState);
              border-color: unset;
            }

            &:disabled {
              background-color: var(--redBtnDisableState);
            }
          }
          .wave-motion {
            display: none;
          }
        }
        &.link-btn {
          background: unset;
          text-decoration: underline;
          padding: 0;
        }
      }
      &.light-blue {
        font-weight: 500;
        --buttonPadding: 7px 18px;
        color: var(--primaryBlue);
        border-color: var(--secondaryWhite);
        background-color: transparent;
        border: 0px solid var(--secondaryWhite);
        &.ant-btn-default:not(:disabled):not(
            .ant-btn-default:not(:disabled).ant-btn-disabled
          )
          :hover {
          color: var(--primaryBlue);
        }
        &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
          &:active,
          &:hover,
          &:focus {
            color: var(--primaryBlue);
          }
          svg {
            path {
              fill: var(--primaryBlue);
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
      &.simple {
        font-size: 16px;
        line-height: 24px;
        border: unset;
        font-weight: 500;
        --buttonPadding: 0;
        color: var(--primaryBlue);
        background-color: transparent;
        &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
          svg {
            path {
              fill: var(--primaryBlue);
            }
          }
          &:active,
          &:hover,
          &:focus {
            color: var(--primaryGreen);
            svg {
              path {
                fill: var(--primaryGreen);
              }
            }
          }

          &.error {
            color: var(--primaryRed);
            svg {
              path {
                fill: var(--primaryRed);
              }
            }
            &:active,
            &:hover,
            &:focus {
              color: var(--redBtnActiveState);
              svg {
                path {
                  fill: var(--redBtnActiveState);
                }
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
      &.back-button {
        padding: 4px 16px 4px 0px;
        &.ant-btn-default {
          &:not(:disabled) {
            &:not(.ant-btn-disabled) {
              width: fit-content;
              .icon {
                color: var(--primaryGreen);
              }
              &:hover {
                color: var(--primaryActiveGreen);
                border-color: unset;
                .icon {
                  color: var(--primaryActiveGreen);
                }
              }
            }
          }
          &:disabled {
            background: transparent;
            .icon {
              color: var(--greenButtonsDisableState);
            }
          }
        }
      }

      &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
        &:active,
        &:hover,
        &:focus {
          color: var(--primaryGreen);
          background-color: transparent;
        }
        &:disabled {
          color: var(--primaryGrey);
        }
      }
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    &.mobile-w-full {
      width: calc(100% - var(--space2x));
      margin: 0px auto;
      display: block;
    }
  }
`;

export default StyledIconButton;
