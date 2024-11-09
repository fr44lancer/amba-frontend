'use client';

import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import StyledBaseParagraph from '@/components/common/Typography/Paragraphs/BaseParagraph/style';

export interface IBaseParagraphProps extends ParagraphProps {
  fontWeight?: 400 | 500 | 600 | 700;
}

const fontWeightMap: Record<400 | 500 | 600 | 700, string> = {
  400: 'regular',
  500: 'medium',
  600: 'semibold',
  700: 'bold',
};

const BaseParagraph = ({
  children,
  fontWeight = 400,
  className,
  ...props
}: IBaseParagraphProps) => {
  return (
    <StyledBaseParagraph
      className={className + ` font-noto-sans-${fontWeightMap[fontWeight]}`}
      {...props}
    >
      {children}
    </StyledBaseParagraph>
  );
};

export default BaseParagraph;
