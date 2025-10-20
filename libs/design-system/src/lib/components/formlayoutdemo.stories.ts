import type { Meta, StoryObj } from '@storybook/angular';
import { FormLayoutDemo } from './formlayoutdemo';
import { expect } from 'storybook/test';

const meta: Meta<FormLayoutDemo> = {
  component: FormLayoutDemo,
  title: 'FormLayoutDemo',
};
export default meta;

type Story = StoryObj<FormLayoutDemo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/formlayoutdemo/gi)).toBeTruthy();
  },
};
