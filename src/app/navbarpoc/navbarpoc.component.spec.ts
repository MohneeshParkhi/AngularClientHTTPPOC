import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpocComponent } from './navbarpoc.component';

describe('NavbarpocComponent', () => {
  let component: NavbarpocComponent;
  let fixture: ComponentFixture<NavbarpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
