import { KeycloakOptions, KeycloakService } from 'keycloak-angular';

export function KeycloakInitializer(keycloakService: KeycloakService) {
  const options: KeycloakOptions = {
    config: {
      url: 'http://localhost:4302',
      realm: 'test',
      clientId: 'frontend',
    },
    initOptions: {
      onLoad: 'login-required',
    },
    bearerExcludedUrls: ['/'],
  };
  return () => keycloakService.init(options);
}
