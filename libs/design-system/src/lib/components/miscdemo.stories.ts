import type { Meta, StoryObj } from '@storybook/angular';
import { MiscDemo } from './miscdemo';
import { expect } from 'storybook/test';

const meta: Meta<MiscDemo> = {
  component: MiscDemo,
  title: 'MiscDemo',
};
export default meta;

type Story = StoryObj<MiscDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/miscdemo/gi)).toBeTruthy();
  },
};
