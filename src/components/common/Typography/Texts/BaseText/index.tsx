import { TextProps } from 'antd/lib/typography/Text';
import StyledBaseText from '@/components/common/Typography/Texts/BaseText/style';

export interface IBaseTextProps extends TextProps {}

const BaseText = ({ children, ...props }: IBaseTextProps) => {
  return <StyledBaseText {...props}>{children}</StyledBaseText>;
};

export default BaseText;
