import { Component, Input} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div>Time: {{ event?.time }}</div>
    <div>Price: \${{ event?.price }}</div>
    <div [hidden]="!event?.location">
      <span>Location: {{ event?.location?.address }}</span>
      <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
    </div>
    <div [hidden]="!event?.onlineUrl">
      Online URL: {{event?.onlineUrl}}
    </div>
  </div>`,
  styles: [`
  .thumbnail {min-height: 210px;}
  .pad-left {margin-left: 10px;}
  .well div {color: #bbb;}`]
})

// @Input() tells us that an event will be passed to this component
// @Output() Conveys that some event has occured
// EventEmitter listens to a named event, fires a callback, then emits that event with a value
// this.eventClick.emit means that this data is being emitted for other components to use
export class EventsThumbnailComponent {
  @Input() event: any;

}
