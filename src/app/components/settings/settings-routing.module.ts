import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ClinicsComponent } from './clinics/clinics.component';
import { AddNewClinicComponent } from './clinics/add-new-clinic/add-new-clinic.component';
import { ClinicDetailsComponent } from './clinics/clinic-details/clinic-details.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'clinics',
        component: ClinicsComponent
      },
      {
        path: 'new-clinic',
        component: AddNewClinicComponent
      },
      {
        path: 'clinic-details',
        component: ClinicDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
