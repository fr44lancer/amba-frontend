import styled from 'styled-components';
import NextLink from 'next/link';
import { IAppLinkProps } from '@/components/common/Links/AppLink/index';

const StyledAppLink = styled(NextLink)<IAppLinkProps>`
  && {
    color: var(--primaryGreen);
    &:hover,
    &:focus {
      color: var(--primaryActiveGreen);
    }

    &.primaryGreen {
      color: var(--primaryGreen);
    }
  }
`;

export default StyledAppLink;
