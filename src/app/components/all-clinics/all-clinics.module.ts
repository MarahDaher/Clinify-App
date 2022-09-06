import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { AllClinicsRoutingModule } from './all-clinics-routing.module';
import { SharedModule } from '../../shared/shared.module';
//Components
import { AllClinicsComponent } from '../all-clinics/all-clinics.component';

@NgModule({
  declarations: [
    AllClinicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AllClinicsRoutingModule
  ]
})
export class AllClinicsModule { }
