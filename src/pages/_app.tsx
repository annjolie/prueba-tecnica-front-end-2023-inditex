import themes from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MainLayout } from '@/containers/layouts/MainLayout';
import PodcastProvider from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PodcastProvider>
      <ThemeProvider theme={themes.light}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </PodcastProvider>
  );
}
