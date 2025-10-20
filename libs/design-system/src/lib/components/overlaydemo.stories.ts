import type { Meta, StoryObj } from '@storybook/angular';
import { OverlayDemo } from './overlaydemo';
import { expect } from 'storybook/test';

const meta: Meta<OverlayDemo> = {
  component: OverlayDemo,
  title: 'OverlayDemo',
};
export default meta;

type Story = StoryObj<OverlayDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/overlaydemo/gi)).toBeTruthy();
  },
};
