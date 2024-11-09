import StyledHeader from '@/components/common/Layout/AppHeader/style';
import { Col, Row } from 'antd';
import Navbar from '@/components/common/Navigation/Navbar';

const AppHeader = () => {
  return (
    <StyledHeader>
      <Row justify={'center'} align={'middle'}>
        <Col xs={12}>
          <Navbar />
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default AppHeader;
