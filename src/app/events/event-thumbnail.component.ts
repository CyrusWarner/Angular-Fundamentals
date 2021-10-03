import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>
      <span>&nbsp;</span>
      <span>{{ event.location.city }}, {{ event.location.country }}</span>
      <span></span>
    </div>
  </div>`,
})

// @Input() tells us that an event will be passed to this component
// @Output() Conveys that some event has occured
// EventEmitter listens to a named event, fires a callback, then emits that event with a value
// this.eventClick.emit means that this data is being emitted for other components to use
export class EventsThumbnailComponent {
  @Input() event: any;
}
