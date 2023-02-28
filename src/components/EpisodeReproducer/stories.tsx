import type { Meta, Story } from '@storybook/react';

import EpisodeReproducer from '.';
import type { EpisodeReproducerProps } from './types';

export default {
  component: EpisodeReproducer,
  title: 'General/EpisodeReproducer',
  args: {
    title: 'Episode Title',
    descriptionText: '<p>this is a description of an episode</p>',
  },
} as Meta;

const Template: Story<EpisodeReproducerProps> = (args) => <EpisodeReproducer {...args} />;

export const Default = Template.bind({});
Default.args = {};
