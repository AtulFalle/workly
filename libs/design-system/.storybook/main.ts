import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  webpackFinal: async (config: any) => {
    // Add SCSS support with include paths
    const scssRule = config.module?.rules?.find(
      (rule: any) => rule.test?.toString().includes('scss')
    );
    if (scssRule && scssRule.use) {
      const sassLoaderOptions = scssRule.use.find(
        (use: any) => use.loader?.includes('sass-loader')
      );
      if (sassLoaderOptions) {
        sassLoaderOptions.options = {
          ...sassLoaderOptions.options,
          sassOptions: {
            includePaths: [
              'src/styles', 
              'src/assets/styles', 
              'libs/design-system/src/lib/assets', 
              'src/lb/assets'
            ],
          },
        };
      }
    }

    // Fix for PrimeIcons: handle asset files (fonts)
    // Find the default font handling rule and adjust it
    const fileLoaderRule = config.module?.rules?.find(
      (rule: any) =>
        rule.test && typeof rule.test.toString === 'function' && rule.test.toString().includes('woff')
    );
    if (fileLoaderRule && fileLoaderRule.test) {
      (fileLoaderRule.test as RegExp) = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|woff2)(\?.*)?$/;
      if ('exclude' in fileLoaderRule) {
          fileLoaderRule.exclude = /primeicons\.css/;
      }
    }

    // Add a specific rule to handle PrimeIcons fonts
    config.module?.rules?.push({
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: /node_modules\/primeicons/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default config;