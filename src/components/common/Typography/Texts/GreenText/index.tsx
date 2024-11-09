import StyledGreenText from '@/components/common/Typography/Texts/GreenText/style';
import { IBaseTextProps } from '@/components/common/Typography/Texts/BaseText';

const GreenText = ({ children, ...props }: IBaseTextProps) => {
  return <StyledGreenText {...props}>{children}</StyledGreenText>;
};

export default GreenText;
