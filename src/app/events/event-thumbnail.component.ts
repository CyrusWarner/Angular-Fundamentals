
import { Component, Input, InputDecorator } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template:`    
    <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
      <div>
          <span>Location: {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span>{{event.location.city}}, {{event.location.country}}</span>
          <span></span>
      </div>
    </div>`
})

// @Input() tells us that an event will be passed to this component
export class EventsThumbnailComponent  {
    @Input() event:any

}