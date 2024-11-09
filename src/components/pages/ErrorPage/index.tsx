'use client';

import StyledErrorPage from '@/components/pages/ErrorPage/style';
import AppTitle from '@/components/common/Typography/AppTitle';
import MainParagraph from '@/components/common/Typography/Paragraphs/MainParagraph';

interface IErrorPage {
  errorCode: 403 | 404 | 503;
  desc: string;
}

const ErrorPage = ({ errorCode, desc }: IErrorPage) => {
  return (
    <StyledErrorPage className={'error-container'}>
      <AppTitle level={1} fontWeight={'semibold'} className={'error-title'}>
        {errorCode}
      </AppTitle>
      <MainParagraph>{desc}</MainParagraph>
    </StyledErrorPage>
  );
};

export default ErrorPage;
