'use client';

import StyledTinyParagraph from './style';
import { IBaseParagraphProps } from '@/components/common/Typography/Paragraphs/BaseParagraph';

const TinyParagraph = ({ children, ...props }: IBaseParagraphProps) => {
  return <StyledTinyParagraph {...props}>{children}</StyledTinyParagraph>;
};

export default TinyParagraph;
