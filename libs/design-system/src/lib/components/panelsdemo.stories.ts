import type { Meta, StoryObj } from '@storybook/angular';
import { PanelsDemo } from './panelsdemo';
import { expect } from 'storybook/test';

const meta: Meta<PanelsDemo> = {
  component: PanelsDemo,
  title: 'PanelsDemo',
};
export default meta;

type Story = StoryObj<PanelsDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/panelsdemo/gi)).toBeTruthy();
  },
};
