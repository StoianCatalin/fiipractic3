import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Event } from '../models/Event';

@Component({
  selector: 'fp-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @ViewChild('form') form;

  event : Event = new Event();

  constructor() { }

  ngOnInit() {
  }

  submit(event) {
    if (this.form.valid)
      console.log(event);
  }

}
