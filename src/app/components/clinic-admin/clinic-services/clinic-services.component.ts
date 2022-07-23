import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-services',
  templateUrl: './clinic-services.component.html',
  styleUrls: ['./clinic-services.component.scss']
})
export class ClinicServicesComponent implements OnInit {

  //List
  clinicServices = [
    {
      name:'إزالة الشعر باستخدام جهاز كوانتا ليزر',
      type: 'إزالة الشعر'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
