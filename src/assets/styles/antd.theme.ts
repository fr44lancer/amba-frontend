import { ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
  token: {},
  components: {
    DatePicker: {
      colorPrimary: 'var(--primaryGreen)',
      cellHoverBg: 'var(--primaryGreen)',
      cellHoverWithRangeBg: 'var(--primaryGreen)',
      fontSize: 16,
      controlHeight: 52,
      hoverBorderColor: 'var(--primaryGrey)',
      activeBorderColor: 'var(--primaryGrey)',
      activeShadow: '0',
    },
    Segmented: {
      borderRadius: 8,
      trackBg: 'var(--primaryLightGrey)',
      fontSize: 16,
      lineHeight: 38,
      controlHeight: 42,
    },
  },
};

export default antdTheme;
