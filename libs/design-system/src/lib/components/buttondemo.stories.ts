import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonDemo } from './buttondemo';
import { expect } from 'storybook/test';

const meta: Meta<ButtonDemo> = {
  component: ButtonDemo,
  title: 'ButtonDemo',
};
export default meta;

type Story = StoryObj<ButtonDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/buttondemo/gi)).toBeTruthy();
  },
};
