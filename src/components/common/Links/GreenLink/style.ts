import styled from 'styled-components';
import NextLink from 'next/link';
import { IGreenLinkProps } from '@/components/common/Links/GreenLink/index';

const StyledGreenLink = styled(NextLink)<IGreenLinkProps>`
  color: var(--primaryGreen);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &:hover,
  &:focus {
    color: var(--primaryActiveGreen);
  }
`;

export default StyledGreenLink;
