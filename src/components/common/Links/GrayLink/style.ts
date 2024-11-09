import styled from 'styled-components';
import NextLink from 'next/link';
import { IGrayLinkProps } from '@/components/common/Links/GrayLink/index';

const StyledGrayLink = styled(NextLink)<IGrayLinkProps>`
  && {
    color: var(--secondaryBlue);

    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    &:hover,
    &:focus {
      color: var(--primaryActiveBlue);
    }

    &.primaryGreen {
      color: var(--primaryActiveBlue);
    }
  }
`;

export default StyledGrayLink;
