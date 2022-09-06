import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClinicDevicesComponent } from './clinic-devices/clinic-devices.component';
import { ClinicOffersComponent } from './clinic-offers/clinic-offers.component';
import { AddEditServiceComponent } from './clinic-services/add-edit-service/add-edit-service.component';
import { ClinicServicesComponent } from './clinic-services/clinic-services.component';
import { AddEditDeviceComponent } from './clinic-devices/add-edit-device/add-edit-device.component';
import { ServicePartsComponent } from './clinic-services/service-parts/service-parts.component';
import { AddEditServicePartComponent } from './clinic-services/service-parts/add-edit-service-part/add-edit-service-part.component';
import { ServiceDetailsComponent } from './clinic-services/service-details/service-details.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'services',
        component: ClinicServicesComponent
      },
      {
        path: 'services/add',
        component: AddEditServiceComponent
      },
      {
        path: 'service/:id/details',
        component: ServiceDetailsComponent
      },
      {
        path: 'services/:id/parts',
        component: ServicePartsComponent
      },
      {
        path: 'services/:id/add-part',
        component: AddEditServicePartComponent
      },


      {
        path: 'devices',
        component: ClinicDevicesComponent
      },
      {
        path: 'devices/add',
        component: AddEditDeviceComponent
      },
      {
        path: 'offers',
        component: ClinicOffersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicAdminRoutingModule { }
