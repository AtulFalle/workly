import type { Meta, StoryObj } from '@storybook/angular';
import { TreeDemo } from './treedemo';
import { expect } from 'storybook/test';

const meta: Meta<TreeDemo> = {
  component: TreeDemo,
  title: 'TreeDemo',
};
export default meta;

type Story = StoryObj<TreeDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/treedemo/gi)).toBeTruthy();
  },
};
