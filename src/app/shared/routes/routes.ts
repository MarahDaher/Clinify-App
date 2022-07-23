import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'all-clinics',
    loadChildren: () => import('../../components/all-clinics/all-clinics.module').then(m => m.AllClinicsModule)
  },
  {
    path: 'clinic',
    loadChildren: () => import('../../components/clinic-admin/clinic-admin.module').then(m => m.ClinicAdminModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/settings/settings.module').then(m => m.SettingsModule)
  }
];
