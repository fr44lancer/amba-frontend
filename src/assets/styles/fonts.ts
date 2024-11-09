import localFont from 'next/font/local';

export const notoSans = localFont({
  src: [
    {
      path: '../font/NotoSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/NotoSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/NotoSans-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
});
