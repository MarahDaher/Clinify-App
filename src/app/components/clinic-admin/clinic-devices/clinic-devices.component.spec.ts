import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDevicesComponent } from './clinic-devices.component';

describe('ClinicDevicesComponent', () => {
  let component: ClinicDevicesComponent;
  let fixture: ComponentFixture<ClinicDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
