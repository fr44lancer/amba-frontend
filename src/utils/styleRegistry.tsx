'use client';

import React, { useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import StyleHelperClasses from '@/assets/styles/styleHelperClasses';
import Variables from '@/assets/styles/variables';
import theme from '@/assets/styles/theme';
import { ConfigProvider } from 'antd';
import antdConfig from '@/configs/antd.config';
import AntdReset from '@/assets/styles/antdReset';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = createCache();
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return (
      <>
        {styles}
        <style
          id="antd"
          dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
        />
      </>
    );
  });

  if (typeof window !== 'undefined') {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ConfigProvider
        form={{
          validateMessages: antdConfig.antd.validateMessages,
        }}
        theme={{
          hashed: false,
        }}
      >
        <StyleProvider cache={cache}>
          <ThemeProvider theme={theme}>
            <Variables />
            <StyleHelperClasses />
            <AntdReset />
            {children}
          </ThemeProvider>
        </StyleProvider>
      </ConfigProvider>
    </StyleSheetManager>
  );
}
