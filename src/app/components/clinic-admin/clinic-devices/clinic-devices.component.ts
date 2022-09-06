import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-devices',
  templateUrl: './clinic-devices.component.html',
  styleUrls: ['./clinic-devices.component.scss']
})
export class ClinicDevicesComponent implements OnInit {

  //List
  AllDevices = [
    {
    id: 1,
    name: 'كوانتا',
    uses: 'إزالة الشعر'
    },
    {
      id: 2,
      name: 'Thundr',
      uses: 'إزالة الشعر'
      },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
