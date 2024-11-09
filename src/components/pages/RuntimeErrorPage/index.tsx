'use client';

import StyledRuntimeErrorPage from '@/components/pages/RuntimeErrorPage/style';
import AppTitle from '@/components/common/Typography/AppTitle';
import MainParagraph from '@/components/common/Typography/Paragraphs/MainParagraph';
import { Col, Row } from 'antd';
import ReportIssueModal from '@/components/global/Modals/ReportIssueModal';

interface IRuntimeErrorPage {
  errorCode: 403 | 404 | 503;
  desc: string;
}

const RuntimeErrorPage = ({ errorCode, desc }: IRuntimeErrorPage) => {
  return (
    <StyledRuntimeErrorPage className={'error-container'}>
      <Row gutter={[16, 24]}>
        <Col xs={24}>
          <AppTitle level={1} fontWeight={'semibold'} className={'error-title'}>
            {errorCode}
          </AppTitle>
          <MainParagraph>{desc}</MainParagraph>
        </Col>
        <Col xs={24}>
          <MainParagraph className={'mt-10'}>
            Please try refreshing the page.
          </MainParagraph>
          <MainParagraph>
            If the issue persists, feel free to report it, and we’ll take a
            closer look.
          </MainParagraph>
        </Col>
        <Col xs={24}>
          <ReportIssueModal
            initialReported={false}
            modelUid={'global-error'}
            modelType={'general'}
          />
        </Col>
      </Row>
    </StyledRuntimeErrorPage>
  );
};

export default RuntimeErrorPage;
