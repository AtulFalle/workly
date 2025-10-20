import type { Meta, StoryObj } from '@storybook/angular';
import { TableDemo } from './tabledemo';
import { expect } from 'storybook/test';

const meta: Meta<TableDemo> = {
  component: TableDemo,
  title: 'TableDemo',
};
export default meta;

type Story = StoryObj<TableDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/tabledemo/gi)).toBeTruthy();
  },
};
