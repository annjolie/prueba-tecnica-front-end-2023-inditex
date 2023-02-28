import { Container, Title, Description, Reproducer } from './styles';
import React from 'react';
import type { EpisodeReproducerProps } from './types';

export default function EpisodeReproducer({
  title,
  descriptionText,
  episodeUrl,
  className,
}: EpisodeReproducerProps): JSX.Element {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: descriptionText }}></Description>
      <Reproducer src={episodeUrl} controls/>
    </Container>
  );
}
