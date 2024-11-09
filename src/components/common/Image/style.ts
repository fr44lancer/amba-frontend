import styled from 'styled-components';

const StyledImage = styled.div`
  .image-cont {
    position: relative;
    width: 100%;

    .image {
      position: absolute;
      top: 0;
      left: 0;
      object-position: center;
      width: 100%;
      height: 100%;
      z-index: 1;

      &.contain {
        object-fit: contain;
      }

      &.cover {
        object-fit: cover;
      }
    }
    &.select-img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

export default StyledImage;
