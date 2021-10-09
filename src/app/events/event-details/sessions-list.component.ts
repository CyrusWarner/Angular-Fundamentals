import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '..';
@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
})
export class SessionsListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];
  // ngOnChanges is called everytime one of the input values gets a new value
  // Similar to component did update
  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }
  // this.sessions.slice(0) creates a duplicate of the sessions array with all the same elements
  filterSessions(filter){
    if(filter === 'all'){
      this.visibleSessions = this.sessions.slice(0)
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })

    }
  }
}
