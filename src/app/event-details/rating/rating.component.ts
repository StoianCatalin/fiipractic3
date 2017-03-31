import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fp-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  stars : number[] = [1, 2, 3, 4, 5];

  @Input() rating : number;

  @Output() changeRating = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  setRating(star) {
    this.rating = star;
    this.changeRating.emit(this.rating);
  }

}
