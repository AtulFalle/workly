import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonDemo } from '../components/buttondemo';

const meta: Meta<ButtonDemo> = {
  title: 'PrimeNG/Buttons Demo',
  component: ButtonDemo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ButtonDemo>;

export const Default: Story = {
  args: {},
};
