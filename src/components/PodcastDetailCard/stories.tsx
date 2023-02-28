import type { Meta, Story } from '@storybook/react';

import PodcastDetailCard from '.';
import type { PodcastDetailCardProps } from './types';

export default {
  component: PodcastDetailCard,
  title: 'General/PodcastDetailCard',
  args: {
    podcastImage: 'https://picsum.photos/200/300',
    alt: 'Podcast Image',
    podcastTitle: 'Podcast Title',
    podcastAuthor: 'Podcast Author',
    podcastDescription:
      'a podcast where music is discussed and analyzed in depth and with a lot of passion and love for the genre and the artists ',
  },
} as Meta;

const Template: Story<PodcastDetailCardProps> = (args) => <PodcastDetailCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
