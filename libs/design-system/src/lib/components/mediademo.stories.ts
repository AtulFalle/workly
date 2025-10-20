import type { Meta, StoryObj } from '@storybook/angular';
import { MediaDemo } from './mediademo';
import { expect } from 'storybook/test';

const meta: Meta<MediaDemo> = {
  component: MediaDemo,
  title: 'MediaDemo',
};
export default meta;

type Story = StoryObj<MediaDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/mediademo/gi)).toBeTruthy();
  },
};
