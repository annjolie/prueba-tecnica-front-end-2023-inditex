import { Container, PodcastImage, Wrapper, Title, Author, Description } from './styles';
import React from 'react';
import type { PodcastDetailCardProps } from './types';

export default function PodcastDetailCard({
  podcastImage,
  alt,
  podcastTitle,
  podcastAuthor,
  podcastDescription,
  className,
}: PodcastDetailCardProps): JSX.Element {
  return (
    <Container className={className}>
      <PodcastImage src={podcastImage} alt={alt} />
      <Wrapper>
        <Title>{podcastTitle}</Title>
        <Author>by {podcastAuthor}</Author>
      </Wrapper>
      <Wrapper>
        <Title>Description</Title>
        <Description>{podcastDescription}</Description>
      </Wrapper>
    </Container>
  );
}
