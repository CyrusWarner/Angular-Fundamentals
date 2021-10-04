import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventsListComponent } from "./app/events/events-list.component";
import { CreateEventComponent } from "./app/events/create-event.component";

import { Routes } from "@angular/router";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]