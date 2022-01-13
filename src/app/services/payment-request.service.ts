import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentRequestService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPaymentRequests(): Observable<any> {
    return this.httpClient.get("../../assets/payments-requests.json")
      .pipe(map(requests => requests as PaymentRequest[]));
  }

}
