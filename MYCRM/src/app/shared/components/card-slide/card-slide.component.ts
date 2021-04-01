import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss']
})
export class CardSlideComponent implements OnInit {

  @Input() buttonName : string;

  @Output() buttonClicked : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public switch() {
    this.buttonClicked.emit();
  }

}
