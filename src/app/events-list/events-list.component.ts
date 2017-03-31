import { Component, OnInit } from '@angular/core';
import {EventsService} from "../services/events.service";
import { Event } from '../models/Event'

@Component({
  selector: 'fp-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  private events : Event[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe((response) => {
        this.events = response;
      });
  }

}
