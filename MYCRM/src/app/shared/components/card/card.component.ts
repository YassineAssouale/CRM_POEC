import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() selection: string[];
  @Input() valueSelected: string;

  @Output() clickedItemSelection: EventEmitter<string> = new EventEmitter<string>();
  @Output() displayClicked : EventEmitter<any> = new EventEmitter<any>();
  @Output() editClicked : EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClicked : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /* Outputs' methods */

  public edit() {
    console.log("edit2");
    this.editClicked.emit();
  }

  public display() {
    console.log("display2");
    this.displayClicked.emit();
  }

  public deleteX() {
    console.log("delete2");
    this.deleteClicked.emit();
  }

  public select(value: string){
    this.clickedItemSelection.emit(value);
  }

}
