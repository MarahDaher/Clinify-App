import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AllClinicsComponent } from '../all-clinics/all-clinics.component';

const routes: Routes = [
  {
    path: "",
    component: AllClinicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllClinicsRoutingModule { }
