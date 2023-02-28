import type { Meta, Story } from '@storybook/react';

import Header from '.';
import type { HeaderProps } from './types';

export default {
  component: Header,
  title: 'General/Header',
  args: {
    color: '#55A6F8',
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
