import styled from 'styled-components';

const StyledBaseCollapseLabel = styled.div`
  width: 100%;

  @media only screen and (max-width: ${(props) =>
      props.theme.mediaSizes.TabletSMin}) {
  }
`;

export default StyledBaseCollapseLabel;
