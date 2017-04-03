import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import {Http, Headers} from "@angular/http";
import {AuthService} from "../shared/services/auth.service";

@Injectable()
export class EventsService {


  constructor(private http: Http, private authService: AuthService) { }

  getEvents() {
    return this.http.get('http://localhost:3232/events/all')
      .map(response => response.json());
  }

  getEventById(id) {
    return this.http.get(`http://localhost:3232/events/${id}`)
      .map(response => response.json())
  }

  updateEvent(id, event) {
    return this.http.post(`http://localhost:3232/events/edit/${id}`, event)
      .map(response => response.json());
  }

  addEvent(event) {
    let header = new Headers({
      'Authorization': this.authService.getToken()
    });
    return this.http.post(`http://localhost:3232/events/insert`, event, {headers: header});
  }

}
