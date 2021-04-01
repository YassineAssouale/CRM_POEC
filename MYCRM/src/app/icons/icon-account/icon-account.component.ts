import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-account',
  templateUrl: './icon-account.component.html',
  styleUrls: ['./icon-account.component.scss']
})
export class IconAccountComponent implements OnInit {

  public iconAccount : any = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
