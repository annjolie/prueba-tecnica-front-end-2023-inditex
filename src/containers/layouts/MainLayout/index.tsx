import Head from 'next/head';
import { Container, Content, MenuHeader } from './styles';
import type { Props } from './types';
import { useLogic } from './logic';

export function MainLayout({ children }: Props) {
  const { isLoading } = useLogic();
  return (
    <>
      <Head>
        <title>Podcaster</title>
        <meta name="Podcaster" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ann Jolie Lourido" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <MenuHeader isLoading={isLoading} />
        <Content>{children}</Content>
      </Container>
    </>
  );
}
