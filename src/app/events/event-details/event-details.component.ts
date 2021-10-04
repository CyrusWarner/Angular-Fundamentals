import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// services
import { EventService } from '../shared/event.service';
@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
          height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
    event:any
    constructor(private eventService: EventService, private route: ActivatedRoute){

    }
    ngOnInit() {
      let eventId: number = this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(eventId);
    }
}
