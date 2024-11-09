import styled from 'styled-components';

const StyledAppPageHeader = styled.div`
  margin-bottom: 24px;

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
    margin-bottom: 16px;
  }
`;

export default StyledAppPageHeader;
