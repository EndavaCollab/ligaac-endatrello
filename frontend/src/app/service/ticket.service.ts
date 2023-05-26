import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  backendUrl = 'http://localhost:2323/';

  constructor(private httpClient: HttpClient) {}

  getAllTickets(): Observable<any> {
    return this.httpClient.get(this.backendUrl + "tickets");
  }
}
