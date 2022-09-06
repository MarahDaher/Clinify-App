import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditServicePartComponent } from './add-edit-service-part.component';

describe('AddEditServicePartComponent', () => {
  let component: AddEditServicePartComponent;
  let fixture: ComponentFixture<AddEditServicePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditServicePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditServicePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
