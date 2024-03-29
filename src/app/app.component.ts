import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
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
