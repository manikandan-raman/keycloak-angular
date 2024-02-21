import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakInitializer } from './auth/keycloak-initializer';
import { KeycloakService } from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: KeycloakInitializer,
      multi: true,
      deps: [KeycloakService],
    },
  ],
};
