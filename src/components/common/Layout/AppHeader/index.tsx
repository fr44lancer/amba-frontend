import StyledHeader from '@/components/common/Layout/AppHeader/style';
import { Col, Row } from 'antd';
import MainMenu from '@/components/common/Navigation/MainMenu';

const AppHeader = () => {
  return (
    <StyledHeader>
      <Row justify={'center'} align={'middle'}>
        <Col xs={12}>
          <MainMenu />
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default AppHeader;
