import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
// services
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event.route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
// routes
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue:  checkDirtyState},
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')

  }
  return true;
}
