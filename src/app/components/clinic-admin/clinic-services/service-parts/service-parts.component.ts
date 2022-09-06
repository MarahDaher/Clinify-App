import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-parts',
  templateUrl: './service-parts.component.html',
  styleUrls: ['./service-parts.component.scss']
})
export class ServicePartsComponent implements OnInit {

    //List
    servicePart = [
    { id: 1, name: 'كوانتا ليزر' },
    { id: 2, name: 'Thundr ليزر'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
