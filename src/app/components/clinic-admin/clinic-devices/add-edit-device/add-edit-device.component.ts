import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-add-edit-device',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.scss']
})
export class AddEditDeviceComponent extends BaseComponent implements OnInit {

  deviceForm: FormGroup;

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
      uses: null,
      enableOffers: null,
      enableMenPrices: null,
    }
    let formServiceObj = {};

    Object.keys(AddEditDevice).forEach(key => {
      formServiceObj[key] = [AddEditDevice[key]];
    });
    this.deviceForm = this.fb.group(formServiceObj);

  }

  addNewDevice(){
    
  }

}
