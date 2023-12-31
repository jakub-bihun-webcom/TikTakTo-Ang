import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOutputComponent } from './customer-output.component';

describe('OutputCustomerComponent', () => {
  let component: CustomerOutputComponent;
  let fixture: ComponentFixture<CustomerOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerOutputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
