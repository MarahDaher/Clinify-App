import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { ServicePriceModels } from 'src/app/shared/models/servicePrice';

@Component({
  selector: 'app-add-edit-service-part',
  templateUrl: './add-edit-service-part.component.html',
  styleUrls: ['./add-edit-service-part.component.scss']
})
export class AddEditServicePartComponent extends BaseComponent implements OnInit {

  servicePartForm: FormGroup;
  servicePriceModal: ServicePriceModels;

  //List
  devicesList = [
    { id: 1, name: 'كوانتا ليزر' },
    { id: 2, name: 'Thundr ليزر'}
  ];


  public get deviceControl(): FormControl {
    return this.servicePartForm?.get(['device']) as FormControl;
  }
  get servicePriceGroup(): FormArray {
    return this.servicePartForm?.get(['servicePrice']) as FormArray;
  }
  get savingsOfferseGroup(): FormArray {
    return this.servicePartForm?.get(['savingsOffers']) as FormArray;
  }
  get menPricesGroup(): FormArray {
    return this.servicePartForm?.get(['menPrices']) as FormArray;
  }
  constructor(
    injector: Injector,
    private fb: FormBuilder,
  ) {
    super(injector);
  }

  ngOnInit(): void {

    const AddEditService: any = {
      id: null,
      name: null,
      device: null,
      location: null,
      servicePrice: [],
      savingsOffers: [],
      menPrices: []
    }
    let formServiceObj = {};

    Object.keys(AddEditService).forEach(key => {
      formServiceObj[key] = [AddEditService[key]];
    });
    formServiceObj['servicePrice'] = this.fb.array([this.newSericePrice()])
    formServiceObj['savingsOffers'] = this.fb.array([this.newSavingsOffers()])
    formServiceObj['menPrices'] = this.fb.array([this.menPricesOffers()])

    this.servicePartForm = this.fb.group(formServiceObj);
  }

  /**------------------------Serice Prices -------------------*/
  newSericePrice(): FormGroup {
    return this.fb.group({
      name: '',
      price: ''
    });
  }
  addServicePrice() {
    this.servicePriceGroup.push(this.newSericePrice());
  }
  removeServicePrice(i: number) {
    this.servicePriceGroup.removeAt(i);
  }

  /**------------------------Savings Offers -------------------*/
  newSavingsOffers(): FormGroup {
    return this.fb.group({
      name: '',
      price: ''
    });
  }
  addSavingsOffers() {
    this.savingsOfferseGroup.push(this.newSavingsOffers());
  }
  removeSavingsOffers(i: number) {
    this.savingsOfferseGroup.removeAt(i);
  }
  /**------------------------Men Prices -------------------*/
  menPricesOffers(): FormGroup {
    return this.fb.group({
      name: '',
      price: ''
    });
  }
  addMenPrices() {
    this.menPricesGroup.push(this.menPricesOffers());
  }
  removeMenPrices(i: number) {
    this.menPricesGroup.removeAt(i);
  }
}
