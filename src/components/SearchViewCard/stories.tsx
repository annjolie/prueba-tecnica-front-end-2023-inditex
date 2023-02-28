import type { Meta, Story } from '@storybook/react';

import SearchViewCard from '.';
import type { SearchViewCardProps } from './types';

export default {
  component: SearchViewCard,
  title: 'General/SearchViewCard',
  args: {
    podcastImage: 'https://picsum.photos/200/300',
    alt: 'Podcast Image',
    podcastTitle: 'Podcast Title',
    podcastAuthor: 'Podcast Author',
  },
} as Meta;

const Template: Story<SearchViewCardProps> = (args) => <SearchViewCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
