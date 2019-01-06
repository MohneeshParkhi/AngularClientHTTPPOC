import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTemplateFormValidationComponent } from './registration-template-form-validation.component';

describe('RegistrationTemplateFormValidationComponent', () => {
  let component: RegistrationTemplateFormValidationComponent;
  let fixture: ComponentFixture<RegistrationTemplateFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationTemplateFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTemplateFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
