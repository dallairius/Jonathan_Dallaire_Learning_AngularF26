import {ApplicationConfig, Component, inject, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {APP_CONFIG, TacoConfig} from './taco-config';
import {TacoService} from './services/taco-service';
import {MockService} from './services/mock-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'all'
    }},
    {provide: TacoService, useClass: MockService}
  ]
};
