import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormUsingReactiveFormComponent } from './complex-form-using-reactive-form.component';

describe('ComplexFormUsingReactiveFormComponent', () => {
  let component: ComplexFormUsingReactiveFormComponent;
  let fixture: ComponentFixture<ComplexFormUsingReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormUsingReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormUsingReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
