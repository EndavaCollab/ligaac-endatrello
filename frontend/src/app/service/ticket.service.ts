import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url = 'http://localhost:2323/';

  constructor(private httpClient: HttpClient) { }

  getAllTickets(): Observable<any>
  {
    return this.httpClient.get(this.url + 'tickets');
  }
}
