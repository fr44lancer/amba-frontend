'use client';

import StyledMainParagraph from './style';
import { IBaseParagraphProps } from '@/components/common/Typography/Paragraphs/BaseParagraph';

//TODO: check StyledAppRadioGroupWithTitles

const MainParagraph = ({ children, ...props }: IBaseParagraphProps) => {
  return <StyledMainParagraph {...props}>{children}</StyledMainParagraph>;
};

export default MainParagraph;
