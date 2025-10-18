import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../../**/*.stories.@(ts|mdx)'], // adjust according to your lib/app paths
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {},
  }

};

export default config;
