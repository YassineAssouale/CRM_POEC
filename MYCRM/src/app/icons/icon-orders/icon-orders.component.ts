import { Component, OnInit } from '@angular/core';
import { faFileAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-orders',
  templateUrl: './icon-orders.component.html',
  styleUrls: ['./icon-orders.component.scss']
})
export class IconOrdersComponent implements OnInit {

  public iconOrders : IconDefinition = faFileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
