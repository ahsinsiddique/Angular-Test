import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlexModule} from "@angular/flex-layout";
import {PaymentComponent} from './components/payment/payment.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import { ListPaymentRequestsComponent } from './components/list-payment-requests/list-payment-requests.component';
import { PaymentRequestComponent } from './components/list-payment-requests/payment-request/payment-request.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ListPaymentRequestsComponent,
    PaymentRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
