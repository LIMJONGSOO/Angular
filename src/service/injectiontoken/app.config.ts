import { InjectionToken } from '@angular/core';

export interface AppConfig {
    url: string;
    port: string;
}

export const MY_APP_CONFIG: AppConfig = {
    url: 'http:test.com',
    port: '5000'
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const AppConfigProvider = {
    provide: APP_CONFIG,
    useValue: MY_APP_CONFIG
};
