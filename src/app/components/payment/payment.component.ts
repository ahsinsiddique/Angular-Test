import { Component, OnInit } from '@angular/core';
import {PaymentRequestService} from "../../services/payment-request.service";
import {PaymentRequest} from "../../shared/models/PaymentRequest";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  active = 1;
  paymentRequests: PaymentRequest[];

  constructor(private paymentRequestService: PaymentRequestService) { }

  ngOnInit(): void {

    this.paymentRequestService.getAllPaymentRequests()
      .subscribe((paymentRequests: PaymentRequest[])=> {
        this.paymentRequests = paymentRequests;
        console.log(paymentRequests);
      })
  }

}
