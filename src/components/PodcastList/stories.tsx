import type { Meta, Story } from '@storybook/react';

import PodcastList from '.';
import type { PodcastListProps } from './types';

export default {
  component: PodcastList,
  title: 'General/PodcastList',
  args: {
    podcastList: [
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
      {
        id: '1',
        podcastImage: 'https://picsum.photos/200/300',
        alt: 'Podcast Image',
        podcastTitle: 'Podcast Title',
        podcastAuthor: 'Podcast Author',
      },
    ],
  },
} as Meta;

const Template: Story<PodcastListProps> = (args) => <PodcastList {...args} />;

export const Default = Template.bind({});
Default.args = {};
