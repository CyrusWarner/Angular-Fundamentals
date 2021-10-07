import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';
// ngIf alters the dom and removes the elements based on conditional provided
// [ngSwitch] used for when you want to display multiple elements based on a conditional
// [ngSwitch] can work with any data type
// *ngSwitchcase statements should all return the same data type
// [class.green] if the even time is equal to 8:00 am we will add the green style to this div
@Component({
  selector: 'event-thumbnail',
  template: ` <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
      Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{ event?.price }}</div>
    <div *ngIf="event?.location">
      <span>Location: {{ event?.location?.address }}</span>
      <span class="pad-left"
        >{{ event?.location?.city }}, {{ event?.location?.country }}</span
      >
    </div>
    <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
  </div>`,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})

// @Input() tells us that an event will be passed to this component
// @Output() Conveys that some event has occured
// EventEmitter listens to a named event, fires a callback, then emits that event with a value
// this.eventClick.emit means that this data is being emitted for other components to use
export class EventsThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'}
    }
    return {};
  }
}
