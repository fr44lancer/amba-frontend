'use client';

import StyledTinyGrayParagraph from '@/components/common/Typography/Paragraphs/TinyGrayParagraph/style';
import { IBaseParagraphProps } from '@/components/common/Typography/Paragraphs/BaseParagraph';

const TinyGrayParagraph = ({ children, ...props }: IBaseParagraphProps) => {
  return (
    <StyledTinyGrayParagraph {...props}>{children}</StyledTinyGrayParagraph>
  );
};

export default TinyGrayParagraph;
