'use client';

import React, { ReactNode } from 'react';
import StyledPage from './style';
import AppSection from '@/components/common/Layout/AppSection';
import AppPageHeader from '@/components/common/Layout/AppPage/AppPageHeader';

interface IAppPage {
  pageTitle?: string;
  classname?: string;
  contentClassName?: string;
  children?: ReactNode;
  backLink?: string;
}

const AppPage = ({
  pageTitle,
  children,
  classname = '',
  contentClassName = '',
  backLink,
}: IAppPage) => {
  return (
    <StyledPage className={classname + ' page_container'}>
      <AppSection className={'page-section'}>
        {(pageTitle || backLink) && (
          <AppPageHeader pageTitle={pageTitle} backLink={backLink} />
        )}
        <div className={`page-content ${contentClassName}`}>{children}</div>
      </AppSection>
    </StyledPage>
  );
};

export default AppPage;
