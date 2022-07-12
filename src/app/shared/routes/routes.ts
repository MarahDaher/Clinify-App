import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'all-clinics',
    loadChildren: () => import('../../components/all-clinics/all-clinics.module').then(m => m.AllClinicsModule)
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample/sample.module').then(m => m.SampleModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/settings/settings.module').then(m => m.SettingsModule)
  }
];
