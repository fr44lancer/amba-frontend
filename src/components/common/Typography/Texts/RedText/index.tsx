import StyledRedText from '@/components/common/Typography/Texts/RedText/style';
import { IBaseTextProps } from '@/components/common/Typography/Texts/BaseText';

const RedText = ({ children, ...props }: IBaseTextProps) => {
  return <StyledRedText {...props}>{children}</StyledRedText>;
};

export default RedText;
