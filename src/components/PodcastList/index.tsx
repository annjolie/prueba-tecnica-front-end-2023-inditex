import { Container } from './styles';
import React from 'react';
import type { PodcastListProps } from './types';
import SearchViewCard from '../SearchViewCard';
import { Grid } from '@mui/material';

export default function PodcastList({ podcastList, className }: PodcastListProps): JSX.Element {
  return (
    <Container className={className}>
      <Grid container>
        {podcastList.map((podcast) => (
          <Grid key={podcast.id} item xs={12} sm={2.2} md={2.2}>
            <SearchViewCard
              podcastImage={podcast.podcastImage}
              alt={podcast.alt}
              podcastTitle={podcast.podcastTitle}
              podcastAuthor={podcast.podcastAuthor}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
