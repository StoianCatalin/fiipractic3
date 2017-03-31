import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { EventsService } from './services/events.service';
import { EventCardComponent } from './event-card/event-card.component';
import { RatingComponent } from './event-details/rating/rating.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes : Routes = [
  { 'path': 'events', 'component': EventsListComponent},
  { 'path': 'events/:id', 'component': EventDetailsComponent },
  { 'path': 'details', 'component': EventDetailsComponent},
  { 'path': 'add-event', 'component': AddEventComponent},
  { 'path': '', 'redirectTo': 'events', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventCardComponent,
    RatingComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
