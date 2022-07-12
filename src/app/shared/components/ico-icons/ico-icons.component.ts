import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ico-icons',
  templateUrl: './ico-icons.component.html',
  styleUrls: ['./ico-icons.component.css']
})
export class IcoIconsComponent implements OnInit {

  @Input('icon') public icon;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   feather.replace();
    // });
  }

}
