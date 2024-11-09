import theme, { IColorItem } from '@/assets/styles/theme';
import { notoSans } from '@/assets/styles/fonts';
import { createGlobalStyle } from 'styled-components';

function colorVariablesGenerator() {
  const colorsArr: string[] = Object.keys(theme.colors);

  let colorVariable = '';

  for (let i = 0; i < colorsArr.length; i++) {
    let color = colorsArr[i] as IColorItem;
    colorVariable += `--${colorsArr[i]}: ${theme.colors[color]};`;
  }

  return colorVariable;
}

function spaceGenerator() {
  let str = '';

  for (let i = 1; i <= 250; i++) {
    str += `--space${i}x: calc(var(--spaceSize) * ${i});`;
  }

  return str;
}

const Variables = createGlobalStyle`
  :root {
     //! Screen Sizes
        --desktopXL:${(props) => props.theme.mediaSizes.DesktopXL};
        --desktopL:${(props) => props.theme.mediaSizes.DesktopL};
        --desktopM:${(props) => props.theme.mediaSizes.DesktopM};
        --desktopS: ${(props) => props.theme.mediaSizes.DesktopS};
        --desktopXS: ${(props) => props.theme.mediaSizes.DesktopXS};
        --tablet: ${(props) => props.theme.mediaSizes.Tablet};
        --tabletS: ${(props) => props.theme.mediaSizes.TabletS};
        --mobile: ${(props) => props.theme.mediaSizes.Mobile};
        --mobileS: ${(props) => props.theme.mediaSizes.MobileS};
    //! Fonts
    --notoSans: ${notoSans.style.fontFamily};

    //! Transition
    --trTime: 0.3s;

    //! Colors
    ${colorVariablesGenerator()}
    
    //! Spacing
    --spaceSize: 8px;

    --space0-5x: calc(var(--spaceSize) * 0.5);
    --space1-5x: calc(var(--spaceSize) * 1.5);
    --space2-5x: calc(var(--spaceSize) * 2.5);
    --space3-5x: calc(var(--spaceSize) * 3.5);
    --space4-5x: calc(var(--spaceSize) * 4.5);
    ${spaceGenerator()}

    //! Line heights
    --lineHeight1: calc(var(--space5x) + 2px);
    --lineHeight2: var(--space4-5x);
    --lineHeight3: var(--space3-5x);
    --lineHeight4: var(--space3x);
    --lineHeight5: calc(var(--space3x) - 2px);
    --lineHeight6: var(--space2-5x);
    --lineHeight1-5x: 1.5;
  }
  
  @media only screen and  (min-width: ${(props) =>
    props.theme.mediaSizes.DesktopXL}) {
    :root {
      --h1: var(--space3-5x);
      --h2: var(--space3x);
      --h3: var(--space2-5x);
      --h4: var(--space2x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }
  
  @media only screen and  (max-width: ${(props) =>
    props.theme.mediaSizes.DesktopXLMin}) and (min-width: ${(props) =>
    props.theme.mediaSizes.DesktopL}) {
    :root {
      --h1: var(--space3-5x);
      --h2: var(--space3x);
      --h3: var(--space2-5x);
      --h4: var(--space2x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }

  }

  @media only screen and (max-width: ${(props) =>
    props.theme.mediaSizes.DesktopLMin}) and (min-width: ${(props) =>
    props.theme.mediaSizes.DesktopM}) {
    :root {
      --h1: var(--space3-5x);
      --h2: var(--space3x);
      --h3: var(--space2-5x);
      --h4: var(--space2x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }

  @media only screen and (max-width: ${(props) =>
    props.theme.mediaSizes.DesktopMMin}) and (min-width: ${(props) =>
    props.theme.mediaSizes.DesktopS}) {
    :root {
      --h1: var(--space3-5x);
      --h2: var(--space3x);
      --h3: var(--space2-5x);
      --h4: var(--space2x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }

  @media only screen and (max-width: ${(props) =>
    props.theme.mediaSizes.DesktopSMin}) and (min-width: ${(props) =>
    props.theme.mediaSizes.DesktopXS}) {
    :root {
      --h1: var(--space3-5x);
      --h2: var(--space3x);
      --h3: var(--space2-5x);
      --h4: var(--space2x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }

  @media only screen and (max-width: ${(props) =>
    props.theme.mediaSizes.DesktopXSMin}) and (min-width: ${(props) =>
    props.theme.mediaSizes.Tablet}) {
    :root {
      --h1: var(--space3-5x);
      --h2: var(--space3x);
      --h3: var(--space2-5x);
      --h4: var(--space2x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }

  @media only screen and (max-width: ${(props) =>
    props.theme.mediaSizes.TabletMin}) and (min-width: ${(props) =>
    props.theme.mediaSizes.TabletS}) {
    :root {
      --h1: var(--space3x);
      --h2: var(--space2-5x);
      --h3: var(--space2x);
      --h4: var(--space1-5x);

      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }

  @media only screen and (max-width: ${(props) =>
    props.theme.mediaSizes.TabletSMin}) {
    :root {
      --h1: var(--space3x);
      --h2: var(--space2-5x);
      --h3: calc(var(--space2x) + 2px);
      --h4: var(--space2x);
      
      //! Line height
      --lineHeightH1: var(--lineHeight1-5x);
      --lineHeightH2: var(--lineHeight1-5x);
      --lineHeightH3: var(--lineHeight1-5x);
      --lineHeightH4: var(--lineHeight1-5x);
    }
  }
`;

export default Variables;
