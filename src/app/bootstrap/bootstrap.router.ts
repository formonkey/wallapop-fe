import { RouterModule } from '@angular/router';

export const BootstrapRouter = RouterModule.forRoot([
  {
    path: '',
    loadChildren: () => import('../pages/main').then((m) => m.MainModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../pages/admin').then((m) => m.AdminModule),
  },
]);
