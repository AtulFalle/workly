import type { Meta, StoryObj } from '@storybook/angular';
import { MenuDemo } from './menudemo';
import { expect } from 'storybook/test';

const meta: Meta<MenuDemo> = {
  component: MenuDemo,
  title: 'MenuDemo',
};
export default meta;

type Story = StoryObj<MenuDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/menudemo/gi)).toBeTruthy();
  },
};
