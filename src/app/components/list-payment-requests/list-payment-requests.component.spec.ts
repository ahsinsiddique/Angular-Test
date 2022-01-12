import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentRequestsComponent } from './list-payment-requests.component';

describe('ListPaymentRequestsComponent', () => {
  let component: ListPaymentRequestsComponent;
  let fixture: ComponentFixture<ListPaymentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaymentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
