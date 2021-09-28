import { RouterModule } from '@angular/router';

import { DashboardComponent } from './components';

export const DashboardRouter = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent,
  },
]);
