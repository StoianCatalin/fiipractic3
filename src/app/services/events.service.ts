import { Injectable } from '@angular/core';
import { Event } from '../models/Event';

@Injectable()
export class EventsService {

  events: Event[] = JSON.parse(`[
    {
      "id" : "1",
      "title": "Maximul curentului de meteori Quadrantide",
      "descriere" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat est id vehicula dictum. Donec facilisis ex ac erat iaculis, nec porta sapien posuere. Nam et felis at metus aliquam ornare. Sed erat arcu, cursus in sem ut, convallis vestibulum velit. Nam viverra ultrices velit, nec porttitor metus porta a.",
      "author" : "Alexandra",
      "image" : "http://www.astronomy.ro/wp-content/uploads/2012/12/quadrantide.png",
      "rating": "0",
      "locatie" : "Romania",
      "date" : "3- 4 ianuarie"
    },
    {
      "id" : "1",
      "title": "Maximul curentului de meteori Quadrantide",
      "descriere" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat est id vehicula dictum. Donec facilisis ex ac erat iaculis, nec porta sapien posuere. Nam et felis at metus aliquam ornare. Sed erat arcu, cursus in sem ut, convallis vestibulum velit. Nam viverra ultrices velit, nec porttitor metus porta a.",
      "author" : "Alexandra",
      "image" : "http://www.astronomy.ro/wp-content/uploads/2012/12/quadrantide.png",
      "rating": "0",
      "locatie" : "Romania",
      "date" : "3- 4 ianuarie"
    }]`);

  constructor() { }

  getEvents() {
    return this.events;
  }

  getEventById(id) {
    return this.events.find((item) => {
      return item.id == id;
    });
  }

}
