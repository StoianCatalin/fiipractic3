import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../shared/rating/rating.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    RatingComponent
  ],
  exports: [
    RatingComponent,
    MaterialModule
  ]
})
export class SharedModule { }
