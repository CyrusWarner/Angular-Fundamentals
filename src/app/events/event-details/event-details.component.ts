import { ISession } from './../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    let eventId: number = this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(eventId);
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
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  exitAddMode(){
    this.addMode = false;
  }
}
