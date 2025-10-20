import type { Meta, StoryObj } from '@storybook/angular';
import { TimelineDemo } from './timelinedemo';
import { expect } from 'storybook/test';

const meta: Meta<TimelineDemo> = {
  component: TimelineDemo,
  title: 'TimelineDemo',
};
export default meta;

type Story = StoryObj<TimelineDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/timelinedemo/gi)).toBeTruthy();
  },
};
