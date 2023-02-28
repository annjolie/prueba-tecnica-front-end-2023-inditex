import { Container, Name } from './styles';
import React from 'react';
import type { HeaderProps } from './types';
import NextLink from 'next/link';
import { Audio } from 'react-loader-spinner';

export default function Header({ color, isLoading, className }: HeaderProps): JSX.Element {
  return (
    <Container className={className}>
      <NextLink href="/">
        <Name>Podcaster</Name>
      </NextLink>
      {isLoading && <Audio width={15} height={15} color={color} ariaLabel="loading" />}
    </Container>
  );
}
