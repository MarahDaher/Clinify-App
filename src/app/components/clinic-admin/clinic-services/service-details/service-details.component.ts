import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent extends BaseComponent implements OnInit {

  serviceDetialsForm: FormGroup;

  serviceDetials = [ 
    { id: '' , name: 'ميزو + ديرمابين' , price: 100000 , description : 'dfdsferfeffe' },
    { id: '' , name: 'ميزو حقن' , price: 100000 , description : ''},
    { id: '' , name: 'ميزو حقن' , price: 100000 , description : ''},
    { id: '' , name: 'ميزو حقن' , price: 100000 , description : ''} ,
    { id: '' , name: 'ميزو حقن' , price: 100000 , description : ''} ,
  ];

  //boolean
  editMode: boolean = false;

  constructor(
    injector: Injector,
    private fb: FormBuilder,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    const AddEditServiceDetails: any = {
      id: null,
      name: null,
      price: null
    };

    let formServiceObj = {};

    Object.keys(AddEditServiceDetails).forEach(key => {
      formServiceObj[key] = [AddEditServiceDetails[key]];
    });
    this.serviceDetialsForm = this.fb.group(formServiceObj);
  }

}
