import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from "@angular/router";
import {EventsService} from "../services/events.service";
import { Event } from '../models/Event';

@Component({
  selector: 'fp-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  private id: Number;
  private event : Event;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.id = params['id'];
      this.event = this.eventsService.getEventById(this.id);
    });
  }

}
