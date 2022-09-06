import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.scss']
})
export class AddEditServiceComponent extends BaseComponent implements OnInit {

  clinicServiceForm: FormGroup;

  constructor(
    injector: Injector,
    private fb: FormBuilder,
  ) {
    super(injector);
  }
  
  ngOnInit(): void {
    const AddEditDevice: any = {
      id: null,
      name: null,
      desciption: null,
      showServiceParts : null,
      showServiceOffers: null,
      showMenPrices: null,
    };

    let formServiceObj = {};

    Object.keys(AddEditDevice).forEach(key => {
      formServiceObj[key] = [AddEditDevice[key]];
    });
    this.clinicServiceForm = this.fb.group(formServiceObj);

  }

  addNewServicePart(){
    
  }
}