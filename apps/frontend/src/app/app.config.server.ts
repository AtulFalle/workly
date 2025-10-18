import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), importProvidersFrom(BrowserAnimationsModule)],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
