import { Component, OnInit } from '@angular/core';
import { faAddressBook, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-customers',
  templateUrl: './icon-customers.component.html',
  styleUrls: ['./icon-customers.component.scss']
})
export class IconCustomersComponent implements OnInit {

  public iconCustomers : IconDefinition = faAddressBook;

  constructor() { }

  ngOnInit(): void {
  }

}
