import themes from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';
import { MainLayout } from '@/containers/layouts/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
