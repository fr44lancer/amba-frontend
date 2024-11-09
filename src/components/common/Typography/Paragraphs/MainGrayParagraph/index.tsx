'use client';

import StyledMainGrayParagraph from './style';
import { IBaseParagraphProps } from '@/components/common/Typography/Paragraphs/BaseParagraph';

const MainGrayParagraph = ({ children, ...props }: IBaseParagraphProps) => {
  return (
    <StyledMainGrayParagraph {...props}>{children}</StyledMainGrayParagraph>
  );
};

export default MainGrayParagraph;
