const theme = {
  colors: {
    primaryBlack: '#000000', //primary black color
    primaryBlue: '#272A3D', //primary blue color
    primaryLightBlue: '#A9AAB1', //buttons disable background, scrollbar thumb //40% of #272A3D
    primaryActiveBlue: '#525564', //blue active color, button hover
    secondaryBlue: '#7D7F8B', //secondary color,
    blue400: 'rgba(125, 127, 139, 0.4)', // ?
    sidebarMenuSelectedState: '#3C3F50', // Sidebar selected/hovered menu item bg-color
    badgeDefaultColor: '#1890FF', // badge default color
    primaryGreen: '#1A847C', //primary green
    lightGreen: '#9dea9d', //lightGreen green
    primaryActiveGreen: '#12635C', // button hover/focus, pagination, datepicker item hover state
    genValSuccessColor: '#19C879', // Generated/validated success color
    primaryRed: '#E0474C', //primary red
    secondaryRed: '#DC373B', //secondary red
    brightRedColor: '#E95D53',
    redBtnActiveState: '#CA3444', // red buttons hover state
    redBtnDisableState: '#F3B5B7', // red buttons disable state
    primaryOrange: '#D1441A', // Orange primary button color
    orangeBtnActiveState: '#B73C15', // Orange button hover/focus state
    brightOrange: '#F19A48', //status color
    orangeBtnDisableState: '#F9D7B6', // Orange button disable state
    sidebarTriggerColor: 'rgba(255, 255, 255, 0.6)', //sidebar collapse color
    greenButtonsDisableState: '#A3CECB', // Green buttons disable state
    errorCanceledStatusBgColor: '#FCEDEE', // Error/canceled status color
    notGenValStatusBgColor: '#F2F3F4', //Status color not generated/validated
    genValSuccessBgColor: '#E8FAF2', // Generated/validated status bg-color
    pendingGeneratingStatusBgColor: '#FEF5ED', // Pending status bg-color
    primaryWhite: '#FFFFFF', // Primary white
    secondaryWhite: '#D1E6E5', // Secondary white
    googleBtnColor: '#F8F9F9', // google btn bg/border color
    welcomeLayoutBackground: '#F8F9F9', // welcome layout bg-color
    primaryLightGrey: '#E5E7EB', //order info border color
    layoutBgColor: '#F8F9F8', //layout bg color
    pricingPageElementsBgColor: '#F5F8F8', //radio-button/pricing-card bg color
    secondaryActiveWhite: '#F4F4F6', //box-shadows color
    boxShadowColor: '#F4F4F5', //box-shadows color
    secondaryLightWhite: '#EAFBFA', // Secondary light white
    primaryGrey: '#D4D4D8',
    secondaryGrey: '#E9F3F2',
    lightGrayishRed: '#F3E2E3', //status bg-color
  },
  mediaSizes: {
    DesktopXL: '2560px',
    DesktopL: '1920px',
    DesktopM: '1600px',
    DesktopS: '1440px',
    DesktopXS: '1280px',
    Tablet: '1024px',
    TabletS: '768px',
    Mobile: '600px',
    MobileS: '375px',

    DesktopXLMin: '2559px',
    DesktopLMin: '1919px',
    DesktopMMin: '1599px',
    DesktopSMin: '1439px',
    DesktopXSMin: '1279px',
    TabletMin: '1023px',
    TabletSMin: '767px',
    MobileMin: '599px',
  },
};

export type IColorItem = keyof typeof theme.colors;

export default theme;
