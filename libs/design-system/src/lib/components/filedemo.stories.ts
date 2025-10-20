import type { Meta, StoryObj } from '@storybook/angular';
import { FileDemo } from './filedemo';
import { expect } from 'storybook/test';

const meta: Meta<FileDemo> = {
  component: FileDemo,
  title: 'FileDemo',
};
export default meta;

type Story = StoryObj<FileDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/filedemo/gi)).toBeTruthy();
  },
};
