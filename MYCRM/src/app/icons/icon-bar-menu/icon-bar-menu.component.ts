import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-bar-menu',
  templateUrl: './icon-bar-menu.component.html',
  styleUrls: ['./icon-bar-menu.component.scss']
})
export class IconBarMenuComponent implements OnInit {

  public iconBarMenu : any = faBars;

  constructor() { }

  ngOnInit(): void {
  }



}
