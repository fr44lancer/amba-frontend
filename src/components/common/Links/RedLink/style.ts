import styled from 'styled-components';
import NextLink from 'next/link';
import { IRedLinkProps } from '@/components/common/Links/RedLink/index';

const StyledRedLink = styled(NextLink)<IRedLinkProps>`
  && {
    color: var(--brightRedColor);

    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    &:hover,
    &:focus {
      color: var(--redBtnActiveState);
    }

    &.primaryGreen {
      color: var(--primaryGreen);
    }
  }
`;

export default StyledRedLink;
