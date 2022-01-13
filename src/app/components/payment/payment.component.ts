import {Component, OnDestroy, OnInit} from '@angular/core';
import {PaymentRequestService} from "../../services/payment-request.service";
import {PaymentRequest} from "../../shared/models/PaymentRequest";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {
  active = 1;
  paymentRequests: PaymentRequest[];

  constructor(private paymentRequestService: PaymentRequestService) { }

  ngOnInit(): void {

    this.paymentRequestService.getAllPaymentRequests().pipe(untilDestroyed(this))
      .subscribe((paymentRequests: PaymentRequest[])=> {
        this.paymentRequests = paymentRequests;
      })
  }

  ngOnDestroy() {
  }

}
