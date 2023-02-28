import type { Meta, Story } from '@storybook/react';

import PodcastSearchViewImage from '.';
import type { PodcastSearchViewImageProps } from './types';

export default {
  component: PodcastSearchViewImage,
  title: 'General/PodcastSearchViewImage',
  args: {
    podcastImage: 'https://picsum.photos/200/300',
    alt: 'Podcast Image',
  },
} as Meta;

const Template: Story<PodcastSearchViewImageProps> = (args) => <PodcastSearchViewImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
