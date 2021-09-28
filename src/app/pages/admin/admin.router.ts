import { RouterModule } from '@angular/router';

import { AdminComponent, AdminMenuComponent } from './components';

export const AdminRouter = RouterModule.forChild([
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../admin/dashboard').then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: '',
    component: AdminMenuComponent,
    outlet: 'menu',
  },
]);
