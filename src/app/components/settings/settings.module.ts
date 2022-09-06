import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
//Component
import { ClinicsComponent} from './clinics/clinics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddNewClinicComponent } from './clinics/add-new-clinic/add-new-clinic.component';
//
import { ArchwizardModule } from 'angular-archwizard';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClinicDetailsComponent } from './clinics/clinic-details/clinic-details.component';

@NgModule({
  declarations: [
    ClinicsComponent,
    AddNewClinicComponent,
    ClinicDetailsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    ArchwizardModule,
    NgSelectModule,
    
  ]
})
export class SettingsModule { }
