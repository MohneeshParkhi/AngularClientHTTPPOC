import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelGroopFormComponent } from './ng-model-groop-form.component';

describe('NgModelGroopFormComponent', () => {
  let component: NgModelGroopFormComponent;
  let fixture: ComponentFixture<NgModelGroopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelGroopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelGroopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
