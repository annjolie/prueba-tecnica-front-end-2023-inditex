import { Container, PodcastImage } from './styles';
import React from 'react';
import type { PodcastSearchViewImageProps } from './types';

export default function PodcastSearchViewImage({podcastImage, className }: PodcastSearchViewImageProps): JSX.Element {
  return <Container className={className}>
    <PodcastImage src={podcastImage} />
  </Container>;
}
