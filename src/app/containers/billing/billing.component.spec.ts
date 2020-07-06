import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingComponent } from './billing.component';
//import{add} from './billing.component';

describe('BillingComponent', () => {
  let component: BillingComponent;
  let fixture: ComponentFixture<BillingComponent>;
  let c = new BillingComponent();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should be valid',() => {
   spyOn(console,'log');
   c.valid();
   expect(console.log).toHaveBeenCalledWith('function is valid');
 })  

});
