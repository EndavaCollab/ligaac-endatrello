import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITicket } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  backendUrl = 'http://localhost:2323'

  constructor(private httpClient: HttpClient) { }

  getAllTickets(): Observable<any> {
    return this.httpClient.get(`${this.backendUrl}/tickets`);
  }

  updateTicket(id: any, ticket: Omit<ITicket, '_id'>): Observable<any> {
    return this.httpClient.put(`${this.backendUrl}/tickets/${id}`, ticket);
  }
}