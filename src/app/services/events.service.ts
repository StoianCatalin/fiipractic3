import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import {Http, Headers} from "@angular/http";

@Injectable()
export class EventsService {

  events: Event[];

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get('http://localhost:3232/events/all')
      .map(response => response.json());
  }

  getEventById(id) {
    return this.http.get(`http://localhost:3232/events/${id}`)
      .map(response => response.json())
  }

  updateEvent(id, event) {
    let header = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let body = this.convertToBody(event);
    return this.http.post(`http://localhost:3232/events/edit/${id}`, body, {headers: header})
      .map(response => response.json());
  }

  convertToBody(event) {
    let body = '';
    for (let property in event) {
      body = body + property + '=' + event[property] + '&';
    }
    return body.substr(0, body.length - 1);
  }

}
