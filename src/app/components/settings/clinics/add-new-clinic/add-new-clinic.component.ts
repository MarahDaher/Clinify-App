import { Component, Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../../shared/validators/passwordMatch';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'app-add-new-clinic',
  templateUrl: './add-new-clinic.component.html',
  styleUrls: ['./add-new-clinic.component.scss']
})
export class AddNewClinicComponent extends BaseComponent implements OnInit, OnChanges {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  maxDate: Date;

  selectDir: string;
  //SelectLists
  public countrylist = [
    {
      id: 0, name: "Syria"
    }
  ];
  public citylist = [
    {
      id: 0, name: "Damascus"
    }
  ];

  dayList = [
    { id: 0, name: "Sunday" },
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
  ];

  workHours = {hour: 24, minute: 60};

  /** define array to save file from dropzone */
  files: File[] = [];
  uploadedFile = []
  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,
  ) {
    super(injector);
    this.maxDate = new Date();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  get phonenumbersArray(): FormArray {
    return this.secondFormGroup.get("phonenumbers") as FormArray
  }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      clinicName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'cnfPassword')
      });

    this.secondFormGroup = this._formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', Validators.required],
      location: ['', Validators.required],
      phonenumbers: this._formBuilder.array([this.newPhonenumber()])
    });

    this.thirdFormGroup = this._formBuilder.group({
      logo: ['', Validators.required],
      fromDay: ['', Validators.required],
      toDay: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],

    });

    this.fourthFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    })
  }


  public finish() {
    // this.toaster.success('Successfully Registered')
  }

  nextStep() {
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);

  }

  /**------------------------Phone Number setting -------------------*/
  newPhonenumber(): FormGroup {
    return this._formBuilder.group({
      number: ''
    });
  }
  addPhonenumber() {
    this.phonenumbersArray.push(this.newPhonenumber());
  }
  removePhonenumber(i: number) {
    this.phonenumbersArray.removeAt(i);
  }
  /**------------------------DropZone setting -------------------*/
  onSelect(event) {
    /**array to show the selected files */
    this.files.push(...event.addedFiles);
    /**get name files */
    for (let file of event.addedFiles) {
      this.uploadedFile.push(file.name);
    }

    if (this.files.length > 1) { // checking if files array has more than one content
      this.files.splice(0, 1);; // replace file
    }

    /**assign uploaded file to project_file in form */
    this.thirdFormGroup.patchValue({ project_file: this.uploadedFile });
  }

  onRemove(event) {
    /**remove file from the selected files array*/
    this.files.splice(this.files.indexOf(event), 1);
    /**remove file from the uploadedFile array*/
    this.uploadedFile.splice(this.uploadedFile.indexOf(event.name), 1);

    this.thirdFormGroup.patchValue({ project_file: this.uploadedFile });
  }
}
