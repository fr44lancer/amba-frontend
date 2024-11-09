'use client';

import StyledSmallParagraph from './style';
import { IBaseParagraphProps } from '@/components/common/Typography/Paragraphs/BaseParagraph';

const SmallParagraph = ({ children, ...props }: IBaseParagraphProps) => {
  return <StyledSmallParagraph {...props}>{children}</StyledSmallParagraph>;
};

export default SmallParagraph;
