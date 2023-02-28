import type { Meta, Story } from '@storybook/react';

import EpisodeTable from '.';
import type { EpisodeTableProps } from './types';

export default {
  component: EpisodeTable,
  title: 'General/EpisodeTable',
  args: {
    rowsData: [
      {
        title: 'Episode 1',
        date: '2021-01-01',
        duration: '1:00:00',
      },
      {
        title: 'Episode 2',
        date: '2021-01-02',
        duration: '1:00:00',
      },
      {
        title: 'Episode 3',
        date: '2021-01-03',
        duration: '1:00:00',
      },
      {
        title: 'Episode 4',
        date: '2021-01-04',
        duration: '1:00:00',
      },
      {
        title: 'Episode 5',
        date: '2021-01-05',
        duration: '1:00:00',
      },
    ],
  },
} as Meta;

const Template: Story<EpisodeTableProps> = (args) => <EpisodeTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
