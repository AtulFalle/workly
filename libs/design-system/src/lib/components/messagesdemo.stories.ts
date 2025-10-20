import type { Meta, StoryObj } from '@storybook/angular';
import { MessagesDemo } from './messagesdemo';
import { expect } from 'storybook/test';

const meta: Meta<MessagesDemo> = {
  component: MessagesDemo,
  title: 'MessagesDemo',
};
export default meta;

type Story = StoryObj<MessagesDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/messagesdemo/gi)).toBeTruthy();
  },
};
