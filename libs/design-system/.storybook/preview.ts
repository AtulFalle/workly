import { applicationConfig, type Preview } from '@storybook/angular';

// Import global styles
// import '../src/lib/assets/design-system.scss';
// Import PrimeNG styles
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura'; // Import the theme preset


// import 'primeicons/primeicons.css'; // PrimeIcons styles
import '!style-loader!css-loader!sass-loader!../src/lib/assets/design-system.scss';

const preview: Preview = {
 decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        // Pass the theme preset directly to providePrimeNG
        providePrimeNG({
          theme: {
            preset: Aura, // Use the imported preset
          },
        }),
      ],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;