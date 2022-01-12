import {Component, Input, OnInit} from '@angular/core';
import {PaymentRequest} from "../../../shared/models/PaymentRequest";

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss']
})
export class PaymentRequestComponent implements OnInit {
  @Input() paymentRequest: PaymentRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
