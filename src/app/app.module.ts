import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { EventsService } from './services/events.service';
import { EventCardComponent } from './event-card/event-card.component';
import { AddEventComponent } from './add-event/add-event.component';
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './login/login.component';
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/guards/auth.guard";

const routes : Routes = [
  { 'path': 'events', 'component': EventsListComponent},
  { 'path': 'events/:id', 'component': EventDetailsComponent },
  { 'path': 'details', 'component': EventDetailsComponent},
  { 'path': 'add-event', 'component': AddEventComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { 'path': '', 'redirectTo': 'events', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventCardComponent,
    AddEventComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
