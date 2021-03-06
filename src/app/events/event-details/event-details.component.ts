import { ISession } from './../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// services
import { EventService } from '../shared/event.service';
import { IEvent } from '..';
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
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all'
  sortBy: string = 'votes'
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  // We reset the event property and change events in ngOnInit
  ngOnInit() {
    this.route.data.forEach((data) => {
        this.event = data['event']
        this.addMode = false;
    })
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.addMode = false;
    });

  }

  exitAddMode(){
    this.addMode = false;
  }
}
