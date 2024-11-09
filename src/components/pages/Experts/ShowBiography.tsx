import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(26, 132, 124, 0.6);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  color: #ffffff;
  padding: 8px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const ShowBiography = () => {
  return (
    <StyledWrapper className={'view-biography font-noto-sans-medium'}>
      View biography
    </StyledWrapper>
  );
};

export default ShowBiography;
