import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {

  public clinicsList = [
    {
      title: 'AddNewClinic',
      icon: 'plus',
      path: '/settings/new-clinic'
    },
    {
      title: 'ClinicDetails',
      icon: 'shopping-bag',
      path:'/settings/clinic-details'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
