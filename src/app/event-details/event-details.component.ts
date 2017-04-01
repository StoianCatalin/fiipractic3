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
  private loading : boolean = false;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.id = params['id'];
      this.eventsService.getEventById(this.id)
        .subscribe((response) => {
          this.event = response;
          this.loading = true;
        });
    });
  }

  updateRating(value) {
    this.event.rating = value;
    this.eventsService.updateEvent(this.id, this.event)
      .subscribe((response) => {
        
      });
  }

}
