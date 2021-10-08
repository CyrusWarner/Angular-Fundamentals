import { Component, Input } from "@angular/core";
import { ISession } from "..";
@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html'
})

export class SessionsListComponent{
  @Input() sessions: ISession[]
}
