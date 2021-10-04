import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
// services
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
// routes
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
