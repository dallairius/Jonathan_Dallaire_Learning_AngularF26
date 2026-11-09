import {ApplicationConfig, Component, inject, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import {APP_CONFIG, TacoConfig} from './taco-config';
import {TacoService} from './services/taco-service';
import {MockService} from './services/mock-service';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {loadingInterceptorInterceptor} from './loading-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([loadingInterceptorInterceptor])),
    provideRouter(routes,withComponentInputBinding()),
    {provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://www.givefood.org.uk/api/2/foodbanks',
        defaultCategory: 'all'
    }},
    //{provide: TacoService, useClass: MockService}
  ]
};
