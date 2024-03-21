import { Routes } from '@angular/router';
import { ProtectedComponent } from '../protected/protected.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'protected',
    component: ProtectedComponent,
  },
];
