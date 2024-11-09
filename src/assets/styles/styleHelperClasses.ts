import { createGlobalStyle } from 'styled-components';

const StyleHelperClasses = createGlobalStyle`
  
  * {
    font-family: var(--notoSans)!important;
  }
  
  
  //! Font families
  .font-noto-sans {
    font-family: var(--notoSans)!important;

    &-medium {
      font-family: var(--notoSans)!important;
      font-weight: 500 !important;
    }

    &-semibold {
      font-family: var(--notoSans)!important;
      font-weight: 600 !important;
    }
    &-bold {
      font-family: var(--notoSans)!important;
      font-weight: 700 !important;
    }
  }

  //!COLORS
  .primaryBlue {
    color: var(--primaryBlue);
    &-bg {
      background-color: var(--primaryBlue);
    }
  }
  
  .secondaryBlue {
    color: var(--secondaryBlue);
    &-bg {
      background-color: var(--secondaryBlue);
    }
  }
  
  .green {
    color: var(--primaryGreen);
    &-bg {
      background-color: var(--primaryGreen);
    }
  }
  
  .red {
    color: var(--primaryRed);
    &-bg {
      background-color: var(--primaryRed);
    }
  }
  
  .orange {
    color: var(--primaryRed);
    &-bg {
      background-color: var(--primaryRed);
    }
  }
  .white {
    color: var(--primaryWhite);
    &-bg {
      background-color: var(--primaryWhite);
    }
  }
  
  .scrollbar {
    overflow-y: auto;
    overflow-x: hidden;
    /* width */
    &::-webkit-scrollbar {
      width: 3px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--primaryLightBlue);
    }
  }
 
`;

export default StyleHelperClasses;
