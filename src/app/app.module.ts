import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// components
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver
} from './events/index'
//  services
import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';
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
    AuthService,
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
