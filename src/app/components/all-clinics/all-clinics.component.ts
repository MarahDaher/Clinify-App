import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-clinics',
  templateUrl: './all-clinics.component.html',
  styleUrls: ['./all-clinics.component.scss']
})
export class AllClinicsComponent implements OnInit {
  allClinics = [
    {
      id : 0 ,
      name: "Diamond Beauty Center",
      address: "ابو رمانة - ساحة المطاعم",
      logo: 'assets/clinics/Diamond.png'
    },
    {
      id : 1 ,
      name: "Sparkil Beauty Center",
      address: "ابو رمانة - ساحة المطاعم",
      logo: 'assets/clinics/Diamond.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
