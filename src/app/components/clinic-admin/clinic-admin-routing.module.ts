import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClinicDevicesComponent } from './clinic-devices/clinic-devices.component';
import { ClinicOffersComponent } from './clinic-offers/clinic-offers.component';
import { AddEditServiceComponent } from './clinic-services/add-edit-service/add-edit-service.component';
import { ClinicServicesComponent } from './clinic-services/clinic-services.component';
import { AddEditDeviceComponent } from './clinic-devices/add-edit-device/add-edit-device.component';

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
