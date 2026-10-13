import {InjectionToken} from '@angular/core';

export interface TacoConfig {
  apiBaseUrl: string;
  defaultCategory: string;

}

export const APP_CONFIG = new InjectionToken<TacoConfig>('taco.config')
