import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// services
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/index';
// [event] this means the event-thumbnail takes in an event and we pass it over in quotations.
// (eventClick) HTML property is the Output eventClick from event thumbnail component.
// $event references the date emitted with the event
// doing #variableName allows you to access methods and variables anywhere in that template


@Component({
  template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events"> 
    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
    </div>
  </div>`,
})

export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName:string){
    this.toastr.success(eventName);

  }

}
