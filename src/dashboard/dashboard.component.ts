import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private readonly keycloakService: KeycloakService) {}

  title = 'keycloak-angular';
  ngOnInit(): void {
    this.getTokenFromKeyCloak();
  }

  async getTokenFromKeyCloak() {
    console.log({ token: await this.keycloakService.getToken() });
  }

  logout() {
    this.keycloakService.logout();
  }
}
