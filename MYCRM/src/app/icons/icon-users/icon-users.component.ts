import { Component, OnInit } from '@angular/core';
import { faUserCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-users',
  templateUrl: './icon-users.component.html',
  styleUrls: ['./icon-users.component.scss']
})
export class IconUsersComponent implements OnInit {

  public iconUsers : IconDefinition = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
