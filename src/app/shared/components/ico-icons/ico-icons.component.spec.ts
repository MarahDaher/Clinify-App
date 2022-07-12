import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoIconsComponent } from './ico-icons.component';

describe('IcoIconsComponent', () => {
  let component: IcoIconsComponent;
  let fixture: ComponentFixture<IcoIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcoIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
