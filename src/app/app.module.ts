import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// components
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { HttpClientModule } from '@angular/common/http';


import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventListResolver,
  CreateSessionComponent,
  SessionsListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';
//  services
import {
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
} from './common/index';
import { AuthService } from './user/auth.service';
// routes
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Error404Component } from './errors/404.component';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator,

  ],
  // we provide a token and we use a value or use a class. The token allows us to access the data
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    {provide: JQ_TOKEN, useValue: jQuery},
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
