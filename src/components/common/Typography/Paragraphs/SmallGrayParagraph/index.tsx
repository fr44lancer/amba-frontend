'use client';

import StyledSmallGrayParagraph from '@/components/common/Typography/Paragraphs/SmallGrayParagraph/style';
import { IBaseParagraphProps } from '@/components/common/Typography/Paragraphs/BaseParagraph';

const SmallGrayParagraph = ({ children, ...props }: IBaseParagraphProps) => {
  return (
    <StyledSmallGrayParagraph {...props}>{children}</StyledSmallGrayParagraph>
  );
};

export default SmallGrayParagraph;
