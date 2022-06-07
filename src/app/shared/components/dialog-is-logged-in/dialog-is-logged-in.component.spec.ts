import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIsLoggedInComponent } from './dialog-is-logged-in.component';

describe('DialogIsLoggedInComponent', () => {
  let component: DialogIsLoggedInComponent;
  let fixture: ComponentFixture<DialogIsLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogIsLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIsLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
