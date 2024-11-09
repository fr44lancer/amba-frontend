import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLinkButton = styled(NextLink)`
  font-size: var(--space2x);
  font-weight: 600;
  line-height: var(--space3x);
  transition: all 2000ms;
  white-space: nowrap;
  &.primary {
    text-decoration: none;
    &.light-green {
      color: var(--primaryGreen);
      &.disabled {
        color: var(--greenButtonsDisableState);
      }
      &.md {
        font-size: 14px;
        line-height: 22px;
      }
    }
    &.primaryBlue {
      color: var(--primaryBlue);
      &.disabled {
        color: var(--primaryLightBlue);
      }
    }
    &.orange {
      font-size: 12px;
      line-height: 20px;
      color: var(--primaryRed);
      &:hover,
      &:focus {
        color: var(--redBtnActiveState);
      }
      &.disabled {
        color: var(--redBtnDisableState);
      }
    }
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &.disabled {
      pointer-events: none;
      text-decoration: none;
    }
  }
  &.secondary {
    text-decoration: underline;
    font-size: 14px;
    line-height: 22px;
    &.link {
      color: var(--secondaryBlue);
      &.disabled {
        pointer-events: none;
        text-decoration: none;
        color: var(--blue400);
      }
    }
    &.orange {
      color: var(--primaryRed);
      &:hover,
      &:focus {
        color: var(--redBtnActiveState);
        text-decoration: none;
      }
      &.disabled {
        pointer-events: none;
        text-decoration: none;
        color: var(--redBtnDisableState);
      }
    }
    &.light-green {
      text-decoration: none;
      color: var(--primaryGreen);
      &.md {
        font-size: 14px;
        line-height: 22px;
      }
      &.std {
        font-size: var(--space2x);
        line-height: calc(var(--space3x) + 4px);
      }
      &:hover,
      &:focus {
        color: var(--primaryActiveGreen);
      }
      &.disabled {
        color: var(--greenButtonsDisableState);
      }
    }
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

export default StyledLinkButton;
