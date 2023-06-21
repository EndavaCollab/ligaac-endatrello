import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITicket } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  backendUrl = 'http://localhost:2323';

  constructor(private httpClient: HttpClient) {}

  getAllTickets(): Observable<any> {
    return this.httpClient.get(`${this.backendUrl}/tickets`);
  }

  updateTicket(id: string, ticket: Omit<ITicket, '_id'>): Observable<any> {
    return this.httpClient.put(`${this.backendUrl}/tickets/${id}`, ticket);
  }

  deleteTicket(id: string): Observable<any> {
    return this.httpClient.delete(`${this.backendUrl}/tickets/${id}`);
  }

  updateTicket(id: string, ticket: Omit<ITicket, '_id'>): Observable<any> {
    return this.httpClient.put(this.backendUrl + 'tickets/' + id, ticket);
  }
}
