import { ReactNode } from 'react';
import AppTitle from '@/components/common/Typography/AppTitle';
import StyledEmptyState from '@/components/common/Layout/EmptyState/style';
import MainParagraph from '@/components/common/Typography/Paragraphs/MainParagraph';

interface IEmptyState {
  icon: IconProp;
  title?: string;
  description?: string;
  hasButtons?: boolean;
  actionButton?: ReactNode;
}

const EmptyState = ({
  icon,
  title,
  description,
  hasButtons,
  actionButton,
}: IEmptyState) => {
  return (
    <StyledEmptyState className={'empty-state'}>
      <AppTitle className={'empty-state-title'} level={2} fontWeight={'medium'}>
        {title}
      </AppTitle>
      <MainParagraph className={'my-6'}>{description}</MainParagraph>
      {hasButtons && <div className={'btns-wrapper'}>{actionButton}</div>}
    </StyledEmptyState>
  );
};

export default EmptyState;
