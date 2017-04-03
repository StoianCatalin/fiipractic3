import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Event } from '../models/Event';
import {EventsService} from "../services/events.service";

@Component({
  selector: 'fp-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @ViewChild('form') form;

  event : Event = new Event();

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  submit(event) {
    if (this.form.valid)
      this.eventsService.addEvent(event)
        .subscribe((response) => {
          console.log(response);
        });
  }

}
