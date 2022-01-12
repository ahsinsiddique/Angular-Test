import {Component, Input, OnInit} from '@angular/core';
import {PaymentRequest} from "../../shared/models/PaymentRequest";

@Component({
  selector: 'app-list-payment-requests',
  templateUrl: './list-payment-requests.component.html',
  styleUrls: ['./list-payment-requests.component.scss']
})
export class ListPaymentRequestsComponent implements OnInit {
  @Input() paymentRequests: PaymentRequest[]

  constructor() { }

  ngOnInit(): void {
  }

}
