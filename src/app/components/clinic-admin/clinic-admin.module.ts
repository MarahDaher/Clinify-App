import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Module
import { ClinicAdminRoutingModule } from './clinic-admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

//Component
import { ClinicServicesComponent } from './clinic-services/clinic-services.component';
import { ClinicDevicesComponent } from './clinic-devices/clinic-devices.component';
import { ClinicOffersComponent } from './clinic-offers/clinic-offers.component';
import { AddEditServiceComponent } from './clinic-services/add-edit-service/add-edit-service.component';
import { AddEditDeviceComponent } from './clinic-devices/add-edit-device/add-edit-device.component';
import { ServicePartsComponent } from './clinic-services/service-parts/service-parts.component';
import { AddEditServicePartComponent } from './clinic-services/service-parts/add-edit-service-part/add-edit-service-part.component';
import { ServiceDetailsComponent } from './clinic-services/service-details/service-details.component';


@NgModule({
  declarations: [
    ClinicServicesComponent,
    ClinicDevicesComponent,
    ClinicOffersComponent,
    AddEditServiceComponent,
    AddEditDeviceComponent,
    ServicePartsComponent,
    AddEditServicePartComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ClinicAdminRoutingModule,
    SharedModule,
    NgSelectModule
  ]
})
export class ClinicAdminModule { }
