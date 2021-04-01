import { Component, OnInit } from '@angular/core';
import { faIndent, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-display',
  templateUrl: './icon-display.component.html',
  styleUrls: ['./icon-display.component.scss']
})
export class IconDisplayComponent implements OnInit {

  public iconDisplay : IconDefinition = faIndent;

  constructor() { }

  ngOnInit(): void {
  }

}
