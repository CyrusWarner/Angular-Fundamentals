import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventsService: EventService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventsService.getEvent(route.params['id']);
  }
}
