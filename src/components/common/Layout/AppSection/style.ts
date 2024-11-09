import styled from 'styled-components';

const StyledSection = styled.section`
  --sectionMargin: 0 var(--space2x);
  --sectionPaddingBottom: 0;
  width: 100%;
  margin: var(--sectionMargin);
  padding-bottom: var(--sectionPaddingBottom);

  @media only screen and (min-width: ${(props) =>
      props?.theme?.mediaSizes?.DesktopXS}) {
    max-width: 1240px;
    --sectionMargin: 0 auto;
  }
`;

export default StyledSection;
