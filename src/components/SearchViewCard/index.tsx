import { Container, PodcastImage, Wrapper, Title, Author } from './styles';
import React from 'react';
import type { SearchViewCardProps } from './types';

export default function SearchViewCard({
  id,
  podcastImage,
  alt,
  podcastTitle,
  podcastAuthor,
  className,
}: SearchViewCardProps): JSX.Element {
  return (
    <Container href={`/podcast/${id}`} className={className}>
      <PodcastImage podcastImage={podcastImage} alt={alt}/>
      <Wrapper>
        <Title>{podcastTitle}</Title>
        <Author>{podcastAuthor}</Author>
      </Wrapper>
    </Container>
  );
}
