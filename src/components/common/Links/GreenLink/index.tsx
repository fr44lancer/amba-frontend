import { IAppLinkProps } from '@/components/common/Links/AppLink';
import StyledGreenLink from '@/components/common/Links/GreenLink/style';

export interface IGreenLinkProps extends IAppLinkProps {}

const GreenLink = ({ children, ...props }: IGreenLinkProps) => {
  return <StyledGreenLink {...props}>{children}</StyledGreenLink>;
};

export default GreenLink;
