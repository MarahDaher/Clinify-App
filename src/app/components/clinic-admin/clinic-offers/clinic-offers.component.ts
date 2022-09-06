import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-offers',
  templateUrl: './clinic-offers.component.html',
  styleUrls: ['./clinic-offers.component.scss']
})
export class ClinicOffersComponent implements OnInit {

  clinicOffers = [
    {
      id: 1,
      name:"عروض جهاز الليزر THUNDER",
      type:"إزالة الشعر",
    },
    {
      id: 2,
      name:"عروض جهاز الليزر Dutte",
      type:"إزالة الشعر",
    },
    {
      id: 3,
      name:"عروض جهاز الليزر Alex",
      type:"إزالة الشعر",
    },
    {
      id: 4,
      name:"عروض جهاز الليزر THunder alexs",
      type:"إزالة الشعر",
    }
    ,
    {
      id: 4,
      name:"تنضيف البشرة",
      type:"العناية بالبشرة",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
