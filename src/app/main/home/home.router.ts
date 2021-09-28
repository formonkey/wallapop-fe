import { RouterModule } from '@angular/router';

import { HomeComponent } from './components';

export const HomeRouter = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
  },
]);
