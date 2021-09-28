import { RouterModule } from '@angular/router';

import { MainComponent, MainMenuComponent } from './components';

export const MainRouter = RouterModule.forChild([
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../main/home').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',
    component: MainMenuComponent,
    outlet: 'menu',
  }
]);
